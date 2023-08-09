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
import RouteProvider from "../contexts/Route";
import RouteLayer from "./RouteLayer";

export const SkyPathDemo = () => { 
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);
    // @ts-ignore
    const [mapContext, mapDispatch] = useContext(MapContext);
    
    return (
        <>
        <SurfaceProvider>
            <RouteProvider>
                { (appContext.demoPanel==='CLASSIFY SURFACE' || appContext.demoPanel==='CALCULATE SURFACE' || appContext.demoPanel==='SURFACE DATA MODEL') && <HexaGraph /> }
                <SceneMap >
                    <SketchWidget />
                    <SurfaceLayer /> 
                    <RouteLayer />
                </SceneMap>
                <LocationNavigationBar />
                <DemoOptions /> 
            </RouteProvider>
        </SurfaceProvider>
        </>
    )
}

export default SkyPathDemo;
