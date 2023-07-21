import { useEffect, useState, useContext } from "react";
import SceneMap from './SceneMap';
import SketchWidget from "./SketchWidget";
import { AppContext } from "../contexts/AppContext";
import { MapContext } from "../contexts/MapContext";
import { AppContextInterface, MapContextInterface } from "../types";
import DemoOptions from "./DemoOptions";
// import SurfaceProvider from "../contexts/Surface";
// import HexaGraph from "./HexaGraph";

export const SolutionsSurfaceDemo = ({ }) => { 
    const mapContextData = useContext(MapContext);
    const [sceneState, setSceneState] = useState<MapContextInterface>(mapContextData);
    const appContextData = useContext(AppContext);
    const [appContextState, setAppContextState] = useState<AppContextInterface>(appContextData);
    
    // const [basemap, setBasemap] = useState('dark-gray-vector');
    // const [sceneState, setSceneState] = useState({scene: null, view: null, sketch: null, sketch: null});
    // const [geometry, setGeometry] = useState(null);
    // const [surfaceFields, setSurfaceFields] = useState(null);
    // const [demoType, setDemoType] = useState(1);
    // const [surfaceResolution, setSurfaceResolution] = useState(null)
    // const [cameraState, setCameraState] = useState({position: {x: -118.255, y: 34.010, z: 1380}, tilt: 76})
    //
    const geometrySketchCallback = (payload: Object) => setAppContextState({...appContextState, AOIgeometry: payload})
    // does sceneStateCallback need to be spread any specified???  Check later inside SceneMap
    const sceneStateCallback = (payload: any) => setSceneState(payload); 
    const sketchStateCallback = (payload: __esri.Sketch) => setSceneState({...sceneState, sketch: payload})
    // const cameraStateCallback = (payload: any) => setCameraState(payload);
    
    const surfaceDataCallback = payload => { 
        setSurfaceFields(payload[0]);
        // setDemoType(payload[1])
        setSurfaceResolution(payload[2])
    };
    useEffect(() => {
        console.log(appContextState)
    }, [appContextState])

    return (
        <>
        <AppContext.Provider value={appContextState} >
        <MapContext.Provider value={sceneState} >
        {/* <SurfaceProvider 
            geometry={appContextState.AOIgeometry} 
            surfaceFields={appContextState.scoredFields}  
            surfaceResolution={appContextState.surfaceResolution} 
            demoType={appContextState.demoType} 
        >*/}
            { (appContextState.demoPanel==='CLASSIFY SURFACE' || appContextState.demoPanel==='CALCULATE SURFACE' || appContextState.demoPanel==='SURFACE DATA MODEL') && <HexaGraph /> }
            <SceneMap sceneStateCallback={sceneStateCallback} >
                <SketchWidget geometryCallback={geometrySketchCallback} sketchStateCallback={sketchStateCallback}/>
                {/* <SurfaceLayer scene={sceneState} demoType={demoType} /> */}
            </SceneMap>
            {/* <LocationNavigationBar cameraStateCallback={cameraStateCallback} />*/}
            {/* { sceneState.view && <CameraUpdate view={sceneState.view} camera={cameraState} /> }*/}
            <DemoOptions 
                scene={sceneState}
                geometryCallback={geometrySketchCallback}
                onDemoSelect={surfaceDataCallback} 
                /* demoState={demoState} */
            /> 
        {/* </SurfaceProvider>*/}
        </MapContext.Provider>
        </AppContext.Provider>
        </>
    )
}

export default SolutionsSurfaceDemo;
