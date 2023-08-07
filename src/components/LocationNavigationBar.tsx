import { useContext } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
import { CameraPosition } from '../types';
import { AppContext } from '../contexts/AppStore';

export default function LocationNavigationBar({ }) {
  // const [value, setValue] = React.useState("Los Angeles");
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);

const locations: {[key: string]: CameraPosition} = {
    'Los Angeles': { position: {x: -118.255, y: 34.010, z: 1380}, heading: 0, tilt: 76},
    'Ontario': { position: {x: -117.685, y: 33.935, z: 2546}, heading: 6.873, tilt: 76.762 },
    'Detroit': { position: {x: -83.113, y: 42.268, z: 4754}, heading: 33.511, tilt: 65.004 },
    'Arlington, TX': {position: {x: -97.110, y: 32.704, z: 3122}, heading: 3.431, tilt: 46.679 },
    'The Villages': {position: {x: -81.941, y: 28.812, z: 3245}, heading: 339, tilt: 69},
    'Phoenix': {position: {x: -112.026, y: 33.356, z: 2659 }, heading: 335, tilt: 75},
    'Holland, MI': {position: {x: -86.034, y: 42.749, z: 2181 }, heading: 298, tilt: 71.86},
}

    const handleChange = (event, newValue) => {
        console.log('navigation', newValue)
        appDispatch({ type: 'cameraLocation', payload: locations[newValue] });
        appDispatch({ type: 'placeName', payload: newValue });
        console.log('location', appContext.cameraLocation);
        console.log('location', appContext.placeName);
    };

  return (
    <Box style={{ position: 'fixed', bottom: 0, opacity: 0.6}} 
        sx={{
            zIndex: 'tooltip',
            bgcolor: 'background.paper',
            boxShadow: 1,
            p: 1,
            width: 1
        }}
     >
    <Tabs value={appContext.placeName} onChange={handleChange} aria-label="disabled tabs example" centered 
        sx={{ zIndex: 'tooltip', boxShadow: 9 }} >
      <Tab label="Los Angeles" value={"Los Angeles"}/>
      <Tab label="Ontario" value={"Ontario"} />
      <Tab label="Detroit" value={"Detroit"}/>
      <Tab label="Arlington, TX" value={"Arlington, TX"}/>
      <Tab label="The Villages" value={"The Villages"}/>
      <Tab label="Phoenix" value={"Phoenix"}/>
      <Tab label="Holland, MI" value={"Holland, MI"}/>
    </Tabs>
      </Box>
  );
}

