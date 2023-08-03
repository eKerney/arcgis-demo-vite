import { useEffect, useState, useContext } from "react";
import SceneMap from './SceneMap';
import SketchWidget from "./SketchWidget";
// import DemoOptions from "./DemoOptions";
import SurfaceProvider from "../contexts/Surface";
import SurfaceLayer from "./SurfaceLayer";
import HexaGraph from "./HexaGraph";
import { AppContext } from "../contexts/AppStore";
import { MapContext } from "../contexts/MapStore";

export const SolutionsSurfaceDemo = () => { 
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);
    // @ts-ignore
    const [mapContext, mapDispatch] = useContext(MapContext);
    
    // const geometrySketchCallback = (payload: Object) => setAppContextState({...appContextState, AOIgeometry: payload})
    // const sceneStateCallback = (payload: any) => setMapContextState(payload); 
    // const sketchStateCallback = (payload: __esri.Sketch) => setMapContextState(({...mapContextState, sketch: payload}))
    const surfaceDataCallback = (payload: any) => { 
        console.log(payload.demoPanel)
        setAppContextState({...appContextState, scoredFields: payload.scoredFields, surfaceResolution: payload.surfaceResolution, demoPanel: payload.demoPanel})
    };

    useEffect(() => {
        // console.log('Solutions appContextState', appContextState)
        console.log('SolutionsSurface', appContext)
        console.log('SolutionsSurface', mapContext)
    }, [appContext, MapContext])

    return (
        <>
        <SurfaceProvider>
            { (appContext.demoPanel==='CLASSIFY SURFACE' || appContext.demoPanel==='CALCULATE SURFACE' || appContext.demoPanel==='SURFACE DATA MODEL') && <HexaGraph /> }
            <SceneMap >
                <SketchWidget />
                <SurfaceLayer /> 
            </SceneMap>
            {/* <LocationNavigationBar cameraStateCallback={cameraStateCallback} />*/}
            {/* { sceneState.view && <CameraUpdate view={sceneState.view} camera={cameraState} /> }*/}
            { /* <DemoOptions geometryCallback={geometrySketchCallback} surfaceDataCallback={surfaceDataCallback} /> */}
        </SurfaceProvider>
        </>
    )
}

export default SolutionsSurfaceDemo;
