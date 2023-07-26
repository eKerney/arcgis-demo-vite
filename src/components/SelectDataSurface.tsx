import React from 'react';
import { useTheme } from '@mui/material/styles';
import {useState, useContext } from 'react';
import { SurfaceContext } from '../contexts/Surface';
import SurfaceResolutionSelector from './SurfaceResolutionSelector';
import RemoveSurfaceButton from './RemoveSurfaceButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PublishIcon from '@mui/icons-material/Publish';
// let layersData = require('../components/layersData.json');
import layersData from '../components/layersData.json'; 
import { AppContext } from '../contexts/AppContext';
import { MapContext } from '../contexts/MapContext';
import { AppContextInterface } from '../types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const SelectDataSurface = ({ surfaceDataCallback, geometryCallback}) => {
    const appContextData = useContext(AppContext);
    const [appContextState, setAppContextState] = useState<AppContextInterface>(appContextData)
    // const mapContextData = useContext(MapContext);
    const surface = useContext(SurfaceContext);
    const theme = useTheme();
    const [selectedFields, setSelectedFields] = useState([]);
    const [scoredFields, setScoredFields] = useState([]); 
    const layers = ((layersData.layers.filter(d => !layersData.excludeClassify.includes(d))).filter(d => !layersData.problemLayers.includes(d))).sort();
    const [surfaceResolution, setSurfaceResolution] = useState(null); 
    // NOTE: Look to remove need for surfaceResolutionCallback in future 
    const surfaceResolutionCallback = (payload: any) => {
        // setSurfaceResolution(payload)
        console.log('resolution', payload)
        setAppContextState(previous => ({...previous, surfaceResolution: payload}) )
        console.log('resolution', appContextState.surfaceResolution)
    }

    const setHeight = () => selectedFields.length === 0 ? '500px' : (`${selectedFields.length*48+380}px`)  

    const handleFieldChange = (event) => {
        const { target: { value }, } = event;
        setSelectedFields( typeof value === 'string' ? value.split(',') : value,);
        setScoredFields(value.map(field => ({field: field, score: 'HIGH', func: [] })));
        setAppContextState({...appContextState, scoredFields: scoredFields})
    };

    const exportSurfaceData = () => {
        const link = document.createElement("a")
        link.download = "surfaceData.geojson"
        link.href = surface.GeoJSONblob
        link.click()
    }

    const submitSurfaceFields = () => {
        surfaceDataCallback({
            scoredFields: appContextState.scoredFields, 
            demoPanel: 'SELECT DATA COMPONENT', 
            surfaceResolution: appContextState.surfaceResolution,
        });
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
        <Button 
            variant="contained" 
            startIcon={<PublishIcon />}
            onClick={scoredFields && appContextState.surfaceResolution && submitSurfaceFields}>
            Surface Request
        </Button>
            <br />  
            <br />  
            { surface && <Button 
                variant="outlined" 
                startIcon={<CloudDownloadIcon />}
                onClick={surface && exportSurfaceData}>
                Export Surface
        </Button> }
        <br />
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
