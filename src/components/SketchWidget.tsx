import Sketch from "@arcgis/core/widgets/Sketch";
import { useEffect, useContext, useCallback } from "react"; 
import { AppContext } from "../contexts/AppStore";
import { MapContext } from "../contexts/MapStore";

export const SketchWidget = () => {
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);
    // @ts-ignore
    const [mapContext, mapDispatch] = useContext(MapContext);

    const renderSketchWidget = useCallback(() => {
        if (mapContext.view.ui) {
            mapContext.view.when(() => {
                const sketch = new Sketch({
                    layer: mapContext.graphicsLayer,
                    view: mapContext.view,
                    creationMode: "update",
                    layout: "vertical",
                    availableCreateTools: ["polygon", "rectangle", "circle"],
                    defaultCreateOptions: { hasZ: false },
                });
            // add sketch widget to map
            mapContext.view.ui.add(sketch, "top-left");
            // set geometry as sketch if drawing is complete
            mapContext.AOIgeometry && appDispatch({ type: 'AOIgeometry', payload: appContext.AOIgeometry })    //geometryCallback(appContextData.AOIgeometry) 
            sketch.on("create", (event: any) => event.state === "complete" && appDispatch({ type: 'AOIgeometry', payload: event.graphic.toJSON().geometry.rings[0] }) )
            //geometryCallback(event.graphic.toJSON().geometry.rings[0]))
            // send sketch widget state back if widget needs to be update for additional functions
            mapDispatch({ type: 'sketch', payload: sketch });
            // sketchStateCallback(sketch)
        });
        }
    }, [mapContext.scene])

    useEffect(() => {
        // DemoContext.AOIgeometry 
        //     ? scene && geometryCallback(DemoContext.AOIgeometry) 
        //     : scene && renderSketchWidget()
        // console.log('mapContextData in sketch')
        // console.log(mapContextData)
        mapContext.scene && renderSketchWidget()
    }, [mapContext.scene])    
    return <></>
}

export default SketchWidget;
