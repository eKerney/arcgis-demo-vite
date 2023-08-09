import { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import RoomIcon from '@mui/icons-material/Room';
import Sketch from '@arcgis/core/widgets/Sketch';
import { RouteContext } from '../contexts/Route';
import DownloadIcon from '@mui/icons-material/Download';
import { IconButtonClasses, IconClasses, SvgIconClasses, SvgIconTypeMap } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';
import { AppContext } from '../contexts/AppStore';
import { MapContext } from '../contexts/MapStore';

export const UASrouting = () => {
  const route = useContext(RouteContext)
  const [waypoints, setWaypoints] = useState <Array<Array<number>>>([])
  const [sketchWidgetState, setSketchWidgetState] = useState(false)
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);
    // @ts-ignore
    const [mapContext, mapDispatch] = useContext(MapContext);
  
  // if 2 waypoints for start/end then set geometry in callback
    useEffect(() => {
        appContext.demoType ==='AirHub SkyPath' 
        && waypoints.length === 2 
        && appDispatch({ type: 'waypointsGeometry', payload: waypoints })
    }, [waypoints])

    const enterWaypointsButton = () => {
                // remove existing polygon sketch widget
                mapContext.view.ui.remove(mapContext.sketch)
                // create new points sketch widget
                const sketchWaypoints = new Sketch({
                    layer: mapContext.graphicsLayer,
                    view: mapContext.view,
                    layout: "vertical",
                    creationmode: "continuous",
                    availableCreateTools: ["point"],
                });
                mapContext.view.ui.add(sketchWaypoints, "top-left");
                // when sketchWaypoints = ready then set activeTool as point
                sketchWaypoints.state === "ready" && sketchWaypoints.create("point");

                sketchWaypoints.on("create", (event) => {
                    if (event.state === "complete") {
                        const { x, y, z } = event.graphic.toJSON().geometry;
                        setWaypoints((waypoints: number[][]) => [...waypoints, [x, y, z]])
                    }
                });
                setSketchWidgetState(true)
    }; 

    const exportRouteData = () => {
        const link = document.createElement("a")
        link.download = "route.geojson"
        link.href = route.routeBlob 
        link.click()
    }
    const multiRouteRequest = () => setWaypoints(waypoints)
    
    // const multiRouteButton = () => (
    //     <Box textAlign='center'>
    //         <br />  
    //         <Button 
    //             variant="contained" 
    //             startIcon={<DownloadIcon />}
    //             onClick={multiRouteRequest}>
    //             Request Route
    //         </Button> 
    //     </Box>
    //     )
    
    const multiFunctionButton = (icon, onClickFunction, buttonText: string) => (
        <Box textAlign='center'>
            <br />  
            <Button 
                variant="contained" 
                startIcon={icon}
                onClick={onClickFunction}>
                {buttonText} 
            </Button> 
        </Box>
    )
  
  const renderRouteInput = () => {
    return (
        <>
            <br />  
            <Box textAlign='center'>
                <hr />
                <br />  
                { !sketchWidgetState && multiFunctionButton(<RoomIcon />, (enterWaypointsButton), 'Enter Waypoints')}
                <br />  
                { (appContext.demoType ==='AirHub MultiPath' || appContext.demoType ==='AirHub ReadyToFly') 
                  && multiFunctionButton(<DownloadIcon/>, (multiRouteRequest), 'Request Route')}
                <br />  
                { (route.routeGeoJSON.features.length !== 0) && multiFunctionButton(<DownloadIcon/>, (exportRouteData), 'Export Route') }
            </Box>
        </>
    )
  }

  return (
    <> 
      {renderRouteInput()}
    </>
  )
}

export default UASrouting;
