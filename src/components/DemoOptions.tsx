import React, { useState, useContext, useEffect } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import RuleIcon from '@mui/icons-material/Rule';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import RefreshIcon from '@mui/icons-material/Refresh';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import SelectDataSurface from './SelectDataSurface';
import ClassifySurface from './ClassifySurface';
import CalculateSurface from './CalculateSurface';
import SurfaceModel from './SurfaceModel';
import { Tooltip } from '@mui/material';
import logo from '../assets/ASLLogoStack.png'
import ElevatePanel from "./ElevatePanel";
import { AppContext } from "../contexts/AppContext";
// import { DemoContext } from "../contexts/DemoContext";
// import { SurfaceContext } from "../contexts/Surface";
// import { RouteContext } from "../contexts/Route";
// import UploadAOIpanel from "./UploadAOIpanel";

    // const [appContextState, setAppContextState] = useState<AppContextInterface>({
    //     demoType: 'DEMO SELECT', 
    //     demoPanel: 'DEMO PANEL', 
    //     cameraLocation: locations['Los Angeles'],
    //     availableLayers: [], 
    //     fieldDomains: [], 
    //     scoredFields: [], 
    //     AOIgeometry: {}, 
    //     basemap: 'dark-gray-vector',
    //     waypointsGeometry: {},
    //     surfaceResolution: 0,
    // });
    //
export const DemoOptions = ({ onDemoSelect, secondaryCallback, scene, geometryCallback, elevateParamsCallback }) => {
    const drawerWidth = 70;
    const logoStyle = {marginTop: -40, marginBottom: 20, marginRight: 2}
    // const [demoType, setDemoType] = useState('');
    // const { surface } = useContext(SurfaceContext);
    // const { route } = useContext(RouteContext);
    // const { demo } = useContext(DemoContext);
    const [files, setFiles] = useState([]);
    // newly added
    const appContextData = useContext(AppContext);
    const [appContextState, setAppContextState] = useState<AppContextInterface>(appContextData);

    //file upload working section
    useEffect(() => {
        const reader = new FileReader();
        reader.onload = (evt) => {
          const parsedData = JSON.parse(evt.target.result)
          const blob = new Blob([JSON.stringify(parsedData)], { type: "application/json" });
          // setElevateOptions( {...elevateOptions, GeoJSON: parsedData} )
          return URL.createObjectURL(blob);
        }
        files.length ? reader.readAsText(files[0]) : console.log('none');
    }, [files])

  const handleFileUpload = (event: Event) => setFiles(event)

  const demoOptionsList = [
    ...((appContextData.demoType ==='AirHub SkyPath' || appContextData.demoType==='AirHub Elevate' || appContextData.demoType==='AirHub MultiPath' 
        || appContextData.demoType==='AirHub ReadyToFly') ? [] : ['Select Data Surface']),
    ...((appContextData.demoType==='AirHub Elevate') ? [] : ['Classify Surface']),
    ...((appContextData.demoType==='AirHub Elevate') ? [] : ['Calculate Surface']),
    ...((appContextData.demoType==='AirHub Elevate') ? [] : ['Surface Data Model']),
    ...['Refresh Map'],
    ...['Upload AOI Geometry']
  ];
  const demoIconsList = [
    ...((appContextData.demoType==='AirHub SkyPath' || appContextData.demoType==='AirHub Elevate'|| appContextData.demoType==='AirHub MultiPath' 
        || appContextData.demoType==='AirHub ReadyToFly') ? [] : [<DoneOutlineIcon className='icon' />]),
    ...(appContextData.demoType!=='AirHub Elevate' ? [<RuleIcon className='icon' />] : []),
    ...(appContextData.demoType!=='AirHub Elevate' ? [<CalculateIcon className='icon'/>] : []),
    ...(appContextData.demoType!=='AirHub Elevate' ? [<AccountTreeIcon className='icon'/>] : []),
    ...[<RefreshIcon className='icon'/>, <UploadFileOutlinedIcon className='icon'/>] 
  ];

    const renderControlPanel = () => {
        return (
            appContextState.demoPanel  === 'REFRESH MAP' 
            ? window.location.reload(false) 
            // : appContextData.demoType === 'AirHub ReadyToFly' && surface && route 
            // ? <ElevatePanel onDemoSelect={onDemoSelect} elevateParamsCallback={elevateParamsCallback}/> 
            : appContextState.demoPanel === 'SELECT DATA SURFACE' 
            ? <SelectDataSurface geometryCallback={geometryCallback} demoState={appContextData.demoType} onDemoSelect={onDemoSelect} secondaryCallback={secondaryCallback} scene={scene} /> 
            // : appContextData.demoPanel === 'CLASSIFY SURFACE'
            // ? <ClassifySurface geometryCallback={geometryCallback} demoState={appContextData.demoType} onDemoSelect={onDemoSelect} secondaryCallback={secondaryCallback} scene={scene} /> 
            // : appContextData.demoPanel === 'CALCULATE SURFACE' 
            // ? <CalculateSurface geometryCallback={geometryCallback} demoState={appContextData.demoType} onDemoSelect={onDemoSelect} secondaryCallback={secondaryCallback} scene={scene} /> 
            // : appContextData.demoPanel === 'SURFACE DATA MODEL' 
            // ? <SurfaceModel geometryCallback={geometryCallback} demoState={appContextData.demoType} onDemoSelect={onDemoSelect} secondaryCallback={secondaryCallback} scene={scene} /> 
            // : appContextData.demoPanel === 'AirHub Elevate' 
            // ? <ElevatePanel onDemoSelect={onDemoSelect} elevateParamsCallback={elevateParamsCallback} /> 
            // : appContextData.demoPanel === 'UPLOAD AOI GEOMETRY' 
            // ? <UploadAOIpanel onDemoSelect={onDemoSelect} elevateParamsCallback={elevateParamsCallback} geometryCallback={geometryCallback}/> 
            : <></>
        )    
    }
                
  return (
      <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            paddingLeft: 1,
            opacity: .80 },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <img src={logo} style={logoStyle} />
        <Divider />
        { <List >
          {demoOptionsList.map((text, index) => (
            <ListItem key={text} disablePadding > <Tooltip title={text} placement="right">
              <ListItemButton onClick={() => {
               setAppContextState({...appContextData, demoPanel: text.toUpperCase()}) 
                // setDemoType(text.toUpperCase())
              }}>  
                <ListItemIcon>
                  {demoIconsList[index]}
                </ListItemIcon>
              </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List> }
      </Drawer>
    </Box>
        {renderControlPanel()}
    </>
  );
}
export default DemoOptions;