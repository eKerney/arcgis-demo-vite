import { useContext, useEffect, useLayoutEffect, useState } from "react";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import { SurfaceContext } from "../contexts/Surface";
import { AppContext } from "../contexts/AppContext";
import { MapContext } from "../contexts/MapContext";

export const SurfaceLayer = () => {
    const surface = useContext(SurfaceContext);
    const [surfaceMapReference, setSurfaceMapReference] = useState(null);
    const appContextData = useContext(AppContext);
    const mapContextData = useContext(MapContext);

    const renderClassifySurface = () => {
        const renderer = {
          type: "simple", 
          symbol: {
            type: "polygon-3d", 
            outline: { color: "rgba(230, 230, 230, 0.3)", width: 0.0 }, 
            symbolLayers: [{ type: "extrude" }] 
          },
          label: "",
          visualVariables: [
            { type: "size", 
              field: "SCORE", 
              stops: [{ value: 0.5, size: 20 },
                      { value: 5, size: 30 },
                      { value: 50, size: 60 },
                      { value: 200, size: 120 }]
            },
            { type: "color", 
              field: "SCORE", 
              stops: [{ value: 0.5, color: "rgba(253, 231, 37, 0.1)"},
                      { value: 5, color: "rgba(53, 183, 121, 0.3)" },
                      { value: 50, color: "rgba(49, 104, 142, 0.3)" },
                      { value: 200, color: "rgba(68, 1, 84, 0.3)" }]
            }
          ]
        };
        const popup = { 
            title: "SCORE {SCORE}",
            content: [{ type: "fields", fieldInfos: surface.fieldInfos}]
        }
        const geoJSONsurface = new GeoJSONLayer({ 
            url: surface.GeoJSONblob,
            renderer: renderer, 
            popupEnabled: true,
            fields: surface.fields,
            popupTemplate: popup,
            elevationInfo: 'relative-to-ground',
        });
        surface.GeoJSONblob && mapContextData.scene.add(geoJSONsurface);
        setSurfaceMapReference(geoJSONsurface);
    }

    const renderSelectDataSurface = () => {
        const renderer = {
          type: "simple", 
          symbol: {
            type: "polygon-3d", 
            outline: { color: "rgba(230, 230, 230, 0.2)", width: 0.1 }, 
            symbolLayers: [{ type: "extrude" }] 
          },
          label: "",
          visualVariables: [
            { type: "size", 
              field: "SCORE", 
              stops: [{ value: 5, size: 10 },
                      { value: 200, size: 135 }]
            },
            { type: "color", 
              field: "SCORE", 
              stops: [{ value: 5, color: "rgba(20, 20, 20, 0.1)"},
                      { value: 200, color: "rgba(0, 123, 224, 0.4)" }]
            }
          ]
        };
        const popup = { 
            title: "SELECTED DATA",
            content: [{ type: "fields", fieldInfos: surface.fieldInfos}]
        }
        const geoJSONsurface = new GeoJSONLayer({ 
            id: 'surfaceLayer',
            url: surface.GeoJSONblob,
            renderer: renderer, 
            popupEnabled: true,
            fields: surface.fields,
            popupTemplate: popup,
            elevationInfo: 'relative-to-ground',
        });
        surface.GeoJSONblob && mapContextData.scene.add(geoJSONsurface);
        setSurfaceMapReference(geoJSONsurface);
    }

    const removeSurfaceLayer = () => {
        console.log('removeSurfaceLayer')
        mapContextData.scene.remove(surfaceMapReference);
    }

    useLayoutEffect(() => {
        appContextData.demoPanel === 'SELECT DATA SURFACE'
            ? renderSelectDataSurface() 
            : appContextData.demoPanel === 'RESET SURFACE' 
                ? removeSurfaceLayer()
                : renderClassifySurface();
    }, [surface.GeoJSONblob, appContextData.demoPanel]);

    useEffect(() => {
        console.log('surface layer appContextData update');
    }, [appContextData])

    return (
    <></>
    )

}

export default SurfaceLayer;
