import { useContext, useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
// import WebScene from "@arcgis/core/WebScene";
import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { MapContext } from "../contexts/MapContext";
import { AppContext } from "../contexts/AppContext";

export const SceneMap = ({ children, sceneStateCallback }) => {
    const mapContextData  = useContext(MapContext);
    const appContextData = useContext(AppContext); 
    const mapDiv = useRef(null);

    const createMap = useEffect(() => {
    if (mapDiv.current) {
        const scene = new WebScene({ 
            basemap: appContextData.basemap,
            ground: 'world-elevation',
        });
        const view = new SceneView({
                map: scene,
                container: mapDiv.current,
                padding: {top: 40},
                camera: appContextData.cameraLocation,
                spatialReference: { wkid: 4326 },
        });
        view.popup.defaultPopupTemplateEnabled = true;
        // add graphics layer for sketch widget, works better here than in component
        const graphicsLayer = new GraphicsLayer({elevationInfo: 'on-the-ground' });
        scene.add(graphicsLayer);  
        
        const OSM3Dbuildings = new SceneLayer({
            url: 'https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer',
            popupEnabled: false,
            opacity: 0.02
        }); 
        scene.add(OSM3Dbuildings);
        sceneStateCallback({...mapContextData, view: view, scene: scene, graphicsLayer: graphicsLayer})

        return () => { view && view.destroy() };
        }
    }, []);


  return (
      <>
        <div className="mapDiv" ref={mapDiv} ></div>
        {children}
      </>
  );
}

export default SceneMap;

