import React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

export const SurfaceResolutionSelector = ({ resolutionCallback }: {resolutionCallback: (payload: number) => void }) => {
  const [res, setRes] = React.useState('');

  const handleChange = (event: Event) => {
      setRes(event.target.value);
      resolutionCallback(event.target.value);
  };

  return (
    <Box style={{position: 'relative', width: 200, left: 38, top: 0}}
         sx={{ maxWidth: 220 }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Surface Resolution</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={res}
          label="Surface Resolution"
          onChange={handleChange}
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
