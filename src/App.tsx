import { useContext, useEffect, useState } from "react";
import DemoCards from "./components/DemoCards"
import SkyPathDemo from "./components/SkyPathDemo";
// import ElevateDemo from "./components/ElevateDemo";
// import MultiPathDemo from "./components/MultiPathDemo";
// import ReadyToFlyDemo from "./components/ReadyToFlyDemo";
import SceneMap from "./components/SceneMap";
import type { AppContextInterface, CameraPosition, DemoCard, MapContextInterface } from "./types";
import SolutionsSurfaceDemo from "./components/SolutionsSurfaceDemo";
import { AppContext } from "./contexts/AppStore"; 
import { MapContext } from "./contexts/MapStore";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import banner from '../src/assets/Airspace Link Banner.png'
import "./App.css";

const demoCardData: DemoCard[] = [
    {name: 'AirHub SolutionsSurface', cardPosition: {marginLeft:-600, marginTop:-300}, imagePath:'../src/assets/SolutionsSurface.png', action:'SURFACE', altText:'Solutions Surface Demo', desc: 'Mash up over 60 AirHub data sources into a customizable drone solution surface'},
    {name: 'AirHub Elevate', cardPosition: {marginLeft:-150, marginTop:-300}, imagePath:'../src/assets/RouteConvert.png', action:'ROUTECONVERTER', altText:'UAS Route Convertor Demo', desc: 'Exact altitude & elevation reference data for precise 3Ddrone routing' },
    {name: 'AirHub SkyPath', cardPosition: {marginLeft:300, marginTop:-300}, imagePath:'../src/assets/UASrouting.png', action:'ROUTING', altText: 'UAS Routing Demo', desc: 'Precise Least Cost Path routing from custom generated surfaces'},
    {name: 'AirHub MultiPath', cardPosition: {marginLeft:-600, marginTop:0}, imagePath:'../src/assets/MultiPathDemo.png', action:'MULTIROUTING', altText: 'UAS MultiPath Routing', desc: 'Custom surface Least Cost Path Hub+Spoke Routing'},
    {name: 'AirHub ReadyToFly', cardPosition: {marginLeft:-150, marginTop:0}, imagePath:'../src/assets/ReadyToFly.png', action:'READYTOFLY', altText: 'Surface, MultiPath Routing and Elevate', desc: 'UAS Solutions Surface LeastCostPath to precise 3D elevated ready-to-fly routes'},
]
const bannerStyle = { zIndex: 10, width: 360, position: 'absolute', left: '50%', top: '50%', marginLeft: -180, marginTop: 300, opacity: 0.5 }

const locations: {[key: string]: CameraPosition} = {
    'Los Angeles': { position: {x: -118.255, y: 34.010, z: 1380}, heading: 0, tilt: 76},
    'Ontario': { position: {x: -117.685, y: 33.935, z: 2546}, heading: 6.873, tilt: 76.762 },
    'Detroit': { position: {x: -83.113, y: 42.268, z: 4754}, heading: 33.511, tilt: 65.004 },
    'Arlington, TX': {position: {x: -97.110, y: 32.704, z: 3122}, heading: 3.431, tilt: 46.679 },
    'The Villages': {position: {x: -81.941, y: 28.812, z: 3245}, heading: 339, tilt: 69},
    'Phoenix': {position: {x: -112.026, y: 33.356, z: 2659 }, heading: 335, tilt: 75},
    'Holland, MI': {position: {x: -86.034, y: 42.749, z: 2181 }, heading: 298, tilt: 71.86},
}
const darkTheme = createTheme({ palette: { mode: 'dark', }, });

export const App = () => { 
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);
    // @ts-ignore
    const [mapContext, mapDispatch] = useContext(MapContext);
    
    useEffect(() => {
        console.log('app', appContext);
        // console.log('dispatch', dispatch({ type: 'demoType', payload: 'AHHHHHH' }))
    }, [appContext] )

    return (
        <>
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
            {appContext.demoType === 'DEMO SELECT' && <SceneMap /> }
            {appContext.demoType === 'DEMO SELECT' && <DemoCards demoCardData={demoCardData}  />}
            {appContext.demoType === 'DEMO SELECT' && <img src={banner} style={bannerStyle} alt='Airspace Link Inc. banner'/> }
            {appContext.demoType === demoCardData[0].name && <SolutionsSurfaceDemo />} 
            {/* appContext.demoType === demoCardData[2].name && <SkyPathDemo  />*/} 
        </ThemeProvider>
        </>
    )

}

export default App;

