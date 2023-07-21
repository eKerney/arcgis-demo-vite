import Sketch from "@arcgis/core/widgets/Sketch";
import { useEffect, useContext, useState, useCallback } from "react"; 
import { AppContext } from "../contexts/AppContext";
import { MapContext } from "../contexts/MapContext";
import { MapContextInterface } from "../types";

export const SketchWidget = ({ geometryCallback, sketchStateCallback }) => {
    const mapContextData = useContext(MapContext);
    const appContextData = useContext(AppContext);
    
    const renderSketchWidget = useCallback(() => {
        if (mapContextData.view.ui) {
            console.log('mapContextView', mapContextData.view.ui)
            mapContextData.view.when(() => {
                const sketch = new Sketch({
                    layer: mapContextData.graphicsLayer,
                    view: mapContextData.view,
                    creationMode: "update",
                    layout: "vertical",
                    availableCreateTools: ["polygon", "rectangle", "circle"],
                    defaultCreateOptions: { hasZ: false },
                });
            // add sketch widget to map
            mapContextData.view.ui.add(sketch, "top-left");
            // set geometry as sketch if drawing is complete
            appContextData.AOIgeometry && geometryCallback(appContextData.AOIgeometry) 
            sketch.on("create", (event) => event.state === "complete" && geometryCallback(event.graphic.toJSON().geometry.rings[0]))
            // send sketch widget state back if widget needs to be update for additional functions
            sketchStateCallback(sketch)
        });
        }
    }, [mapContextData.scene])

    useEffect(() => {
        // DemoContext.AOIgeometry 
        //     ? scene && geometryCallback(DemoContext.AOIgeometry) 
        //     : scene && renderSketchWidget()
        // console.log('mapContextData in sketch')
        // console.log(mapContextData)
        mapContextData.view && renderSketchWidget()
    }, [mapContextData.scene])    
    return <></>
}

export default SketchWidget;
