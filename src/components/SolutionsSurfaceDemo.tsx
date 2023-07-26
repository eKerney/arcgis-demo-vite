import { useEffect, useState, useContext } from "react";
import SceneMap from './SceneMap';
import SketchWidget from "./SketchWidget";
import { AppContext } from "../contexts/AppContext";
import { MapContext } from "../contexts/MapContext";
import { AppContextInterface, MapContextInterface } from "../types";
import DemoOptions from "./DemoOptions";
import SurfaceProvider from "../contexts/Surface";
import SurfaceLayer from "./SurfaceLayer";
import HexaGraph from "./HexaGraph";

export const SolutionsSurfaceDemo = () => { 
    const mapContextData = useContext(MapContext);
    const [mapContextState, setMapContextState] = useState<MapContextInterface>(mapContextData);
    const appContextData = useContext(AppContext);
    const [appContextState, setAppContextState] = useState<AppContextInterface>(appContextData);
    
    const geometrySketchCallback = (payload: Object) => setAppContextState({...appContextState, AOIgeometry: payload})
    // does sceneStateCallback need to be spread any specified???  Check later inside SceneMap
    const sceneStateCallback = (payload: any) => setMapContextState(payload); 
    const sketchStateCallback = (payload: __esri.Sketch) => setMapContextState(previous => ({...previous, sketch: payload}))
    const surfaceDataCallback = (payload: any) => { 
        console.log(payload.demoPanel)
        setAppContextState({...appContextState, scoredFields: payload.scoredFields, surfaceResolution: payload.surfaceResolution, demoPanel: payload.demoPanel})
    };

    useEffect(() => {
        console.log('Solutions appContextState', appContextState)
    }, [appContextState])

    return (
        <>
        <AppContext.Provider value={appContextState} >
        <MapContext.Provider value={mapContextState} >
        <SurfaceProvider>
            { (appContextState.demoPanel==='CLASSIFY SURFACE' || appContextState.demoPanel==='CALCULATE SURFACE' || appContextState.demoPanel==='SURFACE DATA MODEL') && <HexaGraph /> }
            <SceneMap sceneStateCallback={sceneStateCallback} >
                <SketchWidget geometryCallback={geometrySketchCallback} sketchStateCallback={sketchStateCallback}/>
                <SurfaceLayer  /> 
            </SceneMap>
            {/* <LocationNavigationBar cameraStateCallback={cameraStateCallback} />*/}
            {/* { sceneState.view && <CameraUpdate view={sceneState.view} camera={cameraState} /> }*/}
            <DemoOptions geometryCallback={geometrySketchCallback} surfaceDataCallback={surfaceDataCallback} /> 
        </SurfaceProvider>
        </MapContext.Provider>
        </AppContext.Provider>
        </>
    )
}

export default SolutionsSurfaceDemo;
