import React from 'react';
import { useTheme } from '@mui/material/styles';
import {useState, useContext } from 'react';
import { SurfaceContext } from '../contexts/Surface';
import SurfaceResolutionSelector from './SurfaceResolutionSelector';
import RemoveSurfaceButton from './RemoveSurfaceButton';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import layersData from '../components/layersData.json'; 
import PanelFormatting from '../utilities/PanelFormatting.ts'
import { AppContext } from '../contexts/AppContext';
import { AppContextInterface } from '../types';
import { requestSurfaceButton, exportSurfaceButton } from '../utilities/utilityComponents';
import { MenuProps, getStyles } from '../utilities/utilityFunctions.ts';

export const SelectDataSurface = ({ surfaceDataCallback, geometryCallback}) => {
    const appContextData = useContext(AppContext);
    const [appContextState, setAppContextState] = useState<AppContextInterface>(appContextData)
    const surface = useContext(SurfaceContext);
    const theme = useTheme();
    const [selectedFields, setSelectedFields] = useState([]);
    const [scoredFields, setScoredFields] = useState([]); 
    const layers = ((layersData.layers.filter(d => !layersData.excludeClassify.includes(d))).filter(d => !layersData.problemLayers.includes(d))).sort();
    // NOTE: Look to remove need for surfaceResolutionCallback in future 
    const surfaceResolutionCallback = (payload: any) => setAppContextState({...appContextState, surfaceResolution: payload})
    const setHeight = () => selectedFields.length === 0 ? '500px' : (`${selectedFields.length*48+380}px`)  

    const handleFieldChange = ({ target: { value }, }) => {
        setSelectedFields( typeof value === 'string' ? value.split(',') : value,);
        setScoredFields(value.map(field => ({field: field, score: 'HIGH', func: []})));
        setAppContextState({...appContextState, scoredFields: scoredFields})
    };

    return  (
  <>
    <div className="control-panel" style={{ height: setHeight() }} >
    <h2 style={{textAlign: "center"}}>SELECT DATA SURFACE</h2>
      <hr />
        <br />
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
        <br />
        <br />
    <br />  
    <Box textAlign='center'>
        <SurfaceResolutionSelector resolutionCallback={surfaceResolutionCallback}/> 
        <br />  
        {scoredFields && appContextState.surfaceResolution && requestSurfaceButton(surfaceDataCallback, appContextState, 'SELECT DATA')}
        <br />  
        {surface.GeoJSONblob && exportSurfaceButton(surface)}
        <br />
        { surface.GeoJSONblob && <RemoveSurfaceButton 
            surfaceDataCallback={surfaceDataCallback} 
            geometryCallback={geometryCallback}
        />}
    </Box>
    </div>
  </>
  )    
}

export default React.memo(SelectDataSurface);
