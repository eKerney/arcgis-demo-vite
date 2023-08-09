import React, { useState, useContext, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { SurfaceContext } from "../contexts/Surface";
// import UASrouting from './UASrouting';
import SurfaceResolutionSelector from './SurfaceResolutionSelector';
import RemoveSurfaceButton from './RemoveSurfaceButton';
import layersData from '../components/layersData.json'; 
import { requestSurfaceButton, exportSurfaceButton } from '../utilities/utilityComponents';
import { MenuProps, getStyles } from '../utilities/utilityFunctions.ts';
import { AppContext } from '../contexts/AppStore.tsx';

// ClassifySurface Panel for SolutionsSurface, SkyPath Demos, MultiPath, ReadyToFly Demos
export const ClassifySurface = () => {
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);
    const surface = useContext(SurfaceContext);
    const theme = useTheme();
    const [selectedFields, setSelectedFields] = useState(appContext.selectedFields);
    const [scoredFields, setScoredFields] = useState(appContext.scoredFields); 
    const layers = ((layersData.layers.filter(d => !layersData.excludeClassify.includes(d))).filter(d => !layersData.problemLayers.includes(d))).sort();
    const setHeight = () => selectedFields.length === 0 ? '400px' : (`${selectedFields.length*100+480}px`)  

    // force appContext to be set before surface request
    useEffect(() => {
        appDispatch({ type: 'scoredFields', payload: scoredFields })
        appDispatch({ type: 'selectedFields', payload: selectedFields })
    }, [selectedFields, scoredFields] )

    // set selectedFields state when added to chip selector
    const handleFieldChange = ({ target: { value }, }) => {
        setSelectedFields( typeof value === 'string' ? value.split(',') : value,);
        setScoredFields(value.map((field: any) => ({field: field, score: 'LOW', func: [], valueCalc: false})));
    };

    const handleScoreChange = ({ target: { value, name}, }) => {
        setScoredFields(
            scoredFields.map(scoredField => 
            scoredField.field === name
                ? {...scoredField, score: value}
                : {...scoredField }
        ));
        console.log(scoredFields)
    }

    // render UI for Layer Select 
    const renderLayerSelect = () => {
        return (
        <FormControl sx={{ m: 0, width: 280  }}>
            <InputLabel id="demo-multiple-chip-label">Surface Layers</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={selectedFields}
              onChange={handleFieldChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {layers.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, selectedFields, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
    )}

    // render UI for layer scoring UI 
    const renderLayerScoring = () => {
        return (
            <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {scoredFields.map((values, index) => (
                <FormControl  fullWidth key={values.field}>
                  <InputLabel id="demo-simple-select-label" >{values.field}</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.score}
                    label="Category"
                    onChange={handleScoreChange}
                    key={values.field+'score'}
                    name={values.field}
                  >
                    <MenuItem value='LOW'>5</MenuItem>
                    <MenuItem value='MED'>50</MenuItem>
                    <MenuItem value='HIGH'>200</MenuItem>
                  </Select>
                </FormControl>
            ))}
                </Box>
            </>
    )}

    // primary jsx return
    return  (
        <>
            <div className="control-panel" style={{ height: setHeight() }} >
                <h2 style={{textAlign: "center"}} >CLASSIFY SURFACE</h2>
                <hr />
                <br />
                {renderLayerSelect()}
                <br />
                <br />
                {renderLayerScoring()}
                <SurfaceResolutionSelector /> 
                <br />
                {(scoredFields && appContext.surfaceResolution !==0 
                    && Object.keys(appContext.AOIgeometry).length !== 0 ) 
                    && requestSurfaceButton(appDispatch)
                }
                <br />
                {surface.GeoJSONblob && exportSurfaceButton(surface)}
                {/*(demoState === 'AirHub SkyPath'||demoState==='AirHub MultiPath'||demoState==='AirHub ReadyToFly') && surface && 
                    <UASrouting secondaryCallback={secondaryCallback} scene={scene} demoState={demoState} />*/ } 
                <br />
                { surface.GeoJSONblob && <RemoveSurfaceButton />}
            </div>
        </>
    )    
}

export default React.memo(ClassifySurface);
