import { useContext } from "react";
import SceneMap from './SceneMap';
import SketchWidget from "./SketchWidget";
import SurfaceProvider from "../contexts/Surface";
import SurfaceLayer from "./SurfaceLayer";
import HexaGraph from "./HexaGraph";
import LocationNavigationBar from "./LocationNavigationBar";
import DemoOptions from "./DemoOptions";
import { AppContext } from "../contexts/AppStore";
import { MapContext } from "../contexts/MapStore";

export const SolutionsSurfaceDemo = () => { 
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);
    // @ts-ignore
    const [mapContext, mapDispatch] = useContext(MapContext);
    
    return (
        <>
        <SurfaceProvider>
            { (appContext.demoPanel==='CLASSIFY SURFACE' || appContext.demoPanel==='CALCULATE SURFACE' || appContext.demoPanel==='SURFACE DATA MODEL') && <HexaGraph /> }
            <SceneMap >
                <SketchWidget />
                <SurfaceLayer /> 
            </SceneMap>
            <LocationNavigationBar />
            <DemoOptions /> 
        </SurfaceProvider>
        </>
    )
}

export default SolutionsSurfaceDemo;
