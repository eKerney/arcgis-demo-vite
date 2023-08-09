import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import { SurfaceContext } from "../contexts/Surface";
import UASrouting from './UASrouting';
import SurfaceResolutionSelector from './SurfaceResolutionSelector';
import RemoveSurfaceButton from './RemoveSurfaceButton';
import layersData from '../components/layersData.json';
import fieldDomainData from '../assets/fieldDomains.json';
import { requestSurfaceButton, exportSurfaceButton } from '../utilities/utilityComponents';
import { MenuProps, getStyles } from '../utilities/utilityFunctions.ts';
import { AppContext } from '../contexts/AppStore.tsx';


export const CalculateSurface = () => {
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);
    const surface = useContext(SurfaceContext);
    const theme = useTheme();
    const [selectedFields, setSelectedFields] = useState(appContext.selectedFields);
    const [scoredFields, setScoredFields] = useState(appContext.scoredFields); 
    const layers = ((layersData.layers.filter(d => !layersData.excludeCalculate.includes(d))).filter(d => !layersData.problemLayers.includes(d))).sort();
    const setHeight = () => selectedFields.length === 0 ? '400px' : (`${selectedFields.length*130+540}px`)  

    const fieldDomains = fieldDomainData.domains;
    const valueCalcLayers = layersData.valueCalcLayers 
    const domainSelectLayers = layersData.domainSelectLayers 

    const handleFieldChange = ({ target: { value }, }) => {
        setSelectedFields( typeof value === 'string' ? value.split(',') : value,);
        setScoredFields(value.map((field: any) => ({field: field, score: 'LOW', funcScore: '', func: [], valueCalc: false })));
        appDispatch({ type: 'scoredFields', payload: scoredFields })
        appDispatch({ type: 'selectedFields', payload: selectedFields })
    };

    const handleScoreChange = ({ field, func, funcScore, valueCalc }) => ({ target: { value, name} }) => {
        console.log(`field ${field}, func ${func}, funcScore ${funcScore}, valueCalc ${valueCalc}`); 
        func  
            ? (setScoredFields(
                scoredFields.map(scoredField => 
                scoredField.field === field
                    ? {...scoredField, func: value, valueCalc: valueCalc}
                    : {...scoredField }
                )))
            : (setScoredFields(
                scoredFields.map(scoredField => 
                scoredField.field === name
                    ? {...scoredField, score: value}
                    : {...scoredField }
                )));
        funcScore 
            ? (setScoredFields(
                scoredFields.map(scoredField => 
                scoredField.field === field
                    ? {...scoredField, funcScore: value}
                    : {...scoredField }
                )))
            : console.log();
        console.log('scoredFields', scoredFields);
    }
    // forces appContext to be current for surface request
    useEffect(() => {
        appDispatch({ type: 'scoredFields', payload: scoredFields })
        appDispatch({ type: 'selectedFields', payload: selectedFields })
    }, [selectedFields, scoredFields] )

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

    const renderCalculateFields = (values) => {
        const fieldType = valueCalcLayers.includes(values.field) 
            ? 'valueCalc'
            : domainSelectLayers.includes(values.field) 
                ? 'domainSelect'
                : '';
        const categories = values.field === 'MAX_obstacle_elev_m' 
            ? 'lambda x: 1 if x > 25 else None'
            : fieldDomains[values.field] 

        return (
          <>
            <FormControl>
                {fieldType === 'valueCalc' 
                ?   <TextField 
                        id="filled-basic" 
                        label="x > 1000 (may use >,<,>=,<=)" 
                        variant="filled" 
                        value={values.func.length !== 0 ? values.func : 'x > ___'} 
                        onChange={handleScoreChange({ field: values.field, func: true, valueCalc: true})} 
                    />
                :   fieldType === "domainSelect" ?
                    <>
                    <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                    <Select
                        multiple
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.func}
                        onChange={ handleScoreChange({ field: values.field, func: [''], valueCalc: false }) }
                        key={values.field+'domains'}
                        name={values.field+'domains'}
                    >
                      {categories.map(domain => <MenuItem key={domain} value={domain}>{domain}</MenuItem> )}
                    </Select>
                    </>
                :   <></>
                }

            </FormControl>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Score</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.funcScore}
                    onChange={ handleScoreChange({ field: values.field, func: false, funcScore: true}) }
                    key={values.field+'score'}
                    name={values.field}
                >
                    <MenuItem value='LOW'>5</MenuItem>
                    <MenuItem value='MED'>50</MenuItem>
                    <MenuItem value='HIGH'>200</MenuItem>
                </Select>
            </FormControl>
          </>
        )
    }

const renderLayerScoring = () => {
        return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {scoredFields.map((values, index) => (
                <FormControl  fullWidth key={values.field}>
                  <InputLabel id="demo-simple-select-label" >{values.field}</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values.score}
                    label="Category"
                    onChange={ handleScoreChange({ field: false, func: false}) }
                    key={values.field+'score'}
                    name={values.field}
                  >
                    <MenuItem value='LOW'>5</MenuItem>
                    <MenuItem value='MED'>50</MenuItem>
                    <MenuItem value='HIGH'>200</MenuItem>
                    { (valueCalcLayers.includes(values.field) === true || domainSelectLayers.includes(values.field) === true) 
                            && <MenuItem value='FUNC'>Calculation</MenuItem> } 
                  </Select>
                  {values.score === 'FUNC' && renderCalculateFields(values)}
                </FormControl>
            ))}
            </Box>
    )}

    //primary jsx return
    return  (
  <>
    <div className="control-panel" style={{ height: setHeight() }} >
    <h2 style={{textAlign: "center"}} >CALCULATE SURFACE</h2>
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
        {surface.GeoJSONblob && exportSurfaceButton(surface)}
        {   (appContext.demoType === 'AirHub SkyPath' 
            || appContext.demoType === 'AirHub MultiPath' 
            || appContext.demoType === 'AirHub ReadyToFly') 
            && surface.GeoJSONblob && <UASrouting /> } 
        <br />
        { surface.GeoJSONblob && <RemoveSurfaceButton />}
    </div>
  </>
  )    
}

export default React.memo(CalculateSurface);
