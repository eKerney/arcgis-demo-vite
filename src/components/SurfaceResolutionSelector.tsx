import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppStore';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export const SurfaceResolutionSelector = () => {
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);

  // const handleChange = (event: Event) => {
      // setRes(event.target.value);
      // resolutionCallback(event.target.value);
  // };

  return (
    <Box style={{position: 'relative', width: 200, left: 38, top: 0}}
         sx={{ maxWidth: 220 }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Surface Resolution</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={appContext.surfaceResolution}
          label="Surface Resolution"
          onChange={((event: Event) => appDispatch({ type: 'surfaceResolution', payload: event.target.value }) )}
        >
          <MenuItem value={9}>COARSE - 9</MenuItem>
          <MenuItem value={10}>LOW - 10</MenuItem>
          <MenuItem value={11}>MED - 11</MenuItem>
          <MenuItem value={12}>HIGH - 12</MenuItem>
          <MenuItem value={13}>FINE - 13</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default SurfaceResolutionSelector;
