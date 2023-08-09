import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
// import UASrouting from './UASrouting';
import { SurfaceContext } from "../contexts/Surface";
import RemoveSurfaceButton from './RemoveSurfaceButton';
import SurfaceResolutionSelector from './SurfaceResolutionSelector';
import { requestSurfaceButton, exportSurfaceButton } from '../utilities/utilityComponents';
import { AppContext } from '../contexts/AppStore';
import { MenuProps, getStyles } from '../utilities/utilityFunctions.ts';

const dataModels = {
    SPRIGHT: [
        { field: "Roads", score: "LOW", func: []},
        { field: "Transmission lines", score: "MED", func: []},
        { field: "Railroad lines", score: "MED", func: []},
        { field: "Schools", score: "MED", func: []},
        { field: "Airports", score: "HIGH", func: []},
        { field: "Hospitals", score: "HIGH", func: []},
        { field: "Prisons", score: "HIGH", func: []},
        { field: "FCC Antenna Structures", score: "HIGH", func: []},
        { field: "Helipads", score: "HIGH", func: []},
        { field: "Electric substations", score: "HIGH", func: []},
        { field: "Police stations", score: "HIGH", func: []},
        { field: "Emergency operation centers", score: "HIGH", func: []},
        { field: "Wind farms", score: "HIGH", func: []},
        { field: "Special use airspace", score: "HIGH", func: []},
        { field: "Power Plants", score: "HIGH", func: []},
        { field: "FAA Obstacles", score: "HIGH", func: []},
        { field: "Military facilities", score: "HIGH", func: []},
        { field: "Military Training Routes", score: "HIGH", func: []},
    ]
}

export const SurfaceModel = () => {
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);
    const surface = useContext(SurfaceContext);
    const theme = useTheme();
    const [selectedFields, setSelectedFields] = useState(appContext.selectedFields);
    const [scoredFields, setScoredFields] = useState(appContext.scoredFields); 
    // const setHeight = () => selectedFields.length === 0 ? '400px' : (`${selectedFields.length*100+480}px`)  

    // force appContext to be set before surface request
    useEffect(() => {
        appDispatch({ type: 'scoredFields', payload: scoredFields })
        appDispatch({ type: 'selectedFields', payload: selectedFields })
    }, [selectedFields, scoredFields] )

    const names = ["Part 107 Operator Model", "Part 135 Delivery Model"];

    const handleFieldChange = (event) => {
        const { target: { value }, } = event;
        const  fields = (
            value[0] === "Part 107 Operator Model" 
                ? dataModels.SPRIGHT 
                : value[0] === 'b' 
                    ? 2 
                    : value[0] === 'c' 
                        ? 3 
                        : 'nope' 
        );
        setSelectedFields(value);
        setScoredFields(fields);
    };

    const renderModelSelect = () => {
        return (
          <FormControl sx={{ m: 0, width: 280  }}>
            <InputLabel id="demo-multiple-chip-label">Surface Models</InputLabel>
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
              {names.map((name) => (
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
        )
    }

    return  (
        <>
            <div className="control-panel">
                <h2 style={{textAlign: "center"}}>SELECT SURFACE MODEL</h2>
                <hr />
                <br />
                { renderModelSelect() }
                <br />
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

export default React.memo(SurfaceModel);

