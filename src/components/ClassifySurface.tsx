import React, { useState, useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import PublishIcon from '@mui/icons-material/Publish';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { SurfaceContext } from "../contexts/Surface";
// import UASrouting from './UASrouting';
import SurfaceResolutionSelector from './SurfaceResolutionSelector';
import RemoveSurfaceButton from './RemoveSurfaceButton';
import layersData from '../components/layersData.json'; 
import { AppContext } from '../contexts/AppContext';
import { AppContextInterface } from '../types';
import { requestSurfaceButton, exportSurfaceButton } from '../utilities/utilityComponents';
import { MenuProps, getStyles } from '../utilities/utilityFunctions.ts';

// ClassifySurface Panel for SolutionsSurface & SkyPath Demos
// export const ClassifySurface = ({ demoState, onDemoSelect, secondaryCallback, scene, geometryCallback }) => {
export const ClassifySurface = ({ surfaceDataCallback, geometryCallback}) => {
    const appContextData = useContext(AppContext);
    const [appContextState, setAppContextState] = useState<AppContextInterface>(appContextData)
    const surface = useContext(SurfaceContext);
    const theme = useTheme();
    const [selectedFields, setSelectedFields] = useState([]);
    const [scoredFields, setScoredFields] = useState<Object[]>([]); 
    const layers = ((layersData.layers.filter(d => !layersData.excludeClassify.includes(d))).filter(d => !layersData.problemLayers.includes(d))).sort();
    const surfaceResolutionCallback = (payload: any) => setAppContextState({...appContextState, surfaceResolution: payload})
    const submitSurfaceFields = () => {
        surfaceDataCallback({
            scoredFields: appContextState.scoredFields, 
            demoPanel: 'CLASSIFY SURFACE', 
            surfaceResolution: appContextState.surfaceResolution,
        });
    };
    const setHeight = () => selectedFields.length === 0 ? '400px' : (`${selectedFields.length*100+480}px`)  
    // const [surfaceResolution, setSurfaceResolution] = useState(null); 
    // const layers = ((layersData.layers.filter(d => !layersData.excludeClassify.includes(d))).filter(d => !layersData.problemLayers.includes(d))).sort();
    // const appContextData = useContext(AppContext);
    // const [appContextState, setAppContextState] = useState<AppContextInterface>(appContextData)
    //
    // const surface = useContext(SurfaceContext);
    // const theme = useTheme();
    // const [selectedFields, setSelectedFields] = useState([]);
    // const [scoredFields, setScoredFields] = useState([]); 
    // const [surfaceResolution, setSurfaceResolution] = useState(null); 
    // functions for setting surfaceResolution and submitting surfaceField Payload, passed back up to parents to the Surface Context
    // const surfaceResolutionCallback = payload => setSurfaceResolution(payload)
    // const submitSurfaceFields = () => onDemoSelect([scoredFields, 2, surfaceResolution]);

    // set selectedFields state when added to chip selector
    const handleFieldChange = ({ target: { value }, }) => {
        setSelectedFields( typeof value === 'string' ? value.split(',') : value,);
        setScoredFields(value.map(field => ({field: field, score: 'LOW', func: []})));
        setAppContextState({...appContextState, scoredFields: scoredFields})
    };

    const handleScoreChange = ({ target: { value, name}, }) => {
        setScoredFields(
            scoredFields.map(scoredField => 
            scoredField.field === name
                ? {...scoredField, score: value}
                : {...scoredField }
        ));
        console.log(scoredFields)
        setAppContextState({...appContextState, scoredFields: scoredFields})
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
                <SurfaceResolutionSelector resolutionCallback={surfaceResolutionCallback}/> 
                {scoredFields && appContextState.surfaceResolution && requestSurfaceButton(surfaceDataCallback, appContextState, 'CLASSIFY SURFACE')}
                <br />
                {surface.GeoJSONblob && exportSurfaceButton(surface)}
                {/*(demoState === 'AirHub SkyPath'||demoState==='AirHub MultiPath'||demoState==='AirHub ReadyToFly') && surface && 
                    <UASrouting secondaryCallback={secondaryCallback} scene={scene} demoState={demoState} />*/ } 
                <br />
                { surface.GeoJSONblob && <RemoveSurfaceButton 
                    surfaceDataCallback={surfaceDataCallback} 
                    geometryCallback={geometryCallback}
                />}
            </div>
        </>
    )    
}

export default React.memo(ClassifySurface);
