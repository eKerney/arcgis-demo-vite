import { useContext, useLayoutEffect } from "react";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import LineSymbol3D from "@arcgis/core/symbols/LineSymbol3D";
import { RouteContext } from "../contexts/Route";
import { MapContext } from "../contexts/MapStore";

export const RouteLayer = () => {
    const route = useContext(RouteContext);
    // @ts-ignore
    const [mapContext, mapDispatch] = useContext(MapContext);

    const renderRouteLayer = () => {

        const stripSymbol = new LineSymbol3D({
            // type: "line-3d",
            symbolLayers: [{
                type: "path",
                profile: "quad",
                join: "round",
                material: { color: [0, 0, 255, 0.3] },
                width: 16, // the width in m
                height: 10, // the height in m
                profileRotation: "heading"
            }]
        });

        const renderer = new SimpleRenderer({
            // type: "simple", 
            symbol: stripSymbol,
            label: "",
        });

        const geoJSONroute = new GeoJSONLayer({ 
            id: 'surfaceLayer',
            url: route.routeBlob, 
            renderer: renderer,
            popupEnabled: true,
            // popupTemplate: popup,
            elevationInfo: {
                mode: 'relative-to-ground',
                offset: 50,
            }
        });
        route.routeBlob && mapContext.scene.add(geoJSONroute);
    }

    useLayoutEffect(() => {
        renderRouteLayer()
    }, [route.routeBlob]);

    return (
    <></>
    )
}

export default RouteLayer;

