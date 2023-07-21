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
import logo from './common/ASLLogoStack.png'
import ElevatePanel from "./ElevatePanel";
import { DemoContext } from "../contexts/DemoContext";
import { SurfaceContext } from "../contexts/Surface";
import { RouteContext } from "../contexts/Route";
import UploadAOIpanel from "./UploadAOIpanel";

export const DemoOptions = ({ demoState, onDemoSelect, secondaryCallback, scene, geometryCallback, elevateParamsCallback }) => {
    const drawerWidth = 70;
    const logoStyle = {marginTop: -40, marginBottom: 20, marginRight: 2}
    const [demoType, setDemoType] = useState('');
    const { surface } = useContext(SurfaceContext);
    const { route } = useContext(RouteContext);
    const { demo } = useContext(DemoContext);
    const [files, setFiles] = useState([]);

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

  const handleFileUpload = (event) => setFiles(event)
    

  const demoOptionsList = [
    ...((demoState==='AirHub SkyPath' || demoState==='AirHub Elevate' || demoState==='AirHub MultiPath' 
        || demoState==='AirHub ReadyToFly') ? [] : ['Select Data Surface']),
    ...((demoState==='AirHub Elevate') ? [] : ['Classify Surface']),
    ...((demoState==='AirHub Elevate') ? [] : ['Calculate Surface']),
    ...((demoState==='AirHub Elevate') ? [] : ['Surface Data Model']),
    ...['Refresh Map'],
    ...['Upload AOI Geometry']
  ];
  const demoIconsList = [
    ...((demoState==='AirHub SkyPath' || demoState==='AirHub Elevate'|| demoState==='AirHub MultiPath' 
        || demoState==='AirHub ReadyToFly') ? [] : [<DoneOutlineIcon className='icon' />]),
    ...(demoState!=='AirHub Elevate' ? [<RuleIcon className='icon' />] : []),
    ...(demoState!=='AirHub Elevate' ? [<CalculateIcon className='icon'/>] : []),
    ...(demoState!=='AirHub Elevate' ? [<AccountTreeIcon className='icon'/>] : []),
    ...[<RefreshIcon className='icon'/>, <UploadFileOutlinedIcon className='icon'/>] 
  ];

    const renderControlPanel = () => {
        return (
            demoType === 'REFRESH MAP' 
            ? window.location.reload(false) 
            : demo.demoType === 'AirHub ReadyToFly' && surface && route 
            ? <ElevatePanel onDemoSelect={onDemoSelect} elevateParamsCallback={elevateParamsCallback}/> 
            : demoType === 'SELECT DATA SURFACE' 
            ? <SelectDataSurface geometryCallback={geometryCallback} demoState={demoState} onDemoSelect={onDemoSelect} secondaryCallback={secondaryCallback} scene={scene} /> 
            : demoType === 'CLASSIFY SURFACE'
            ? <ClassifySurface geometryCallback={geometryCallback} demoState={demoState} onDemoSelect={onDemoSelect} secondaryCallback={secondaryCallback} scene={scene} /> 
            : demoType === 'CALCULATE SURFACE' 
            ? <CalculateSurface geometryCallback={geometryCallback} demoState={demoState} onDemoSelect={onDemoSelect} secondaryCallback={secondaryCallback} scene={scene} /> 
            : demoType === 'SURFACE DATA MODEL' 
            ? <SurfaceModel geometryCallback={geometryCallback} demoState={demoState} onDemoSelect={onDemoSelect} secondaryCallback={secondaryCallback} scene={scene} /> 
            : demoState === 'AirHub Elevate' 
            ? <ElevatePanel onDemoSelect={onDemoSelect} elevateParamsCallback={elevateParamsCallback} /> 
            : demoType === 'UPLOAD AOI GEOMETRY' 
            ? <UploadAOIpanel onDemoSelect={onDemoSelect} elevateParamsCallback={elevateParamsCallback} geometryCallback={geometryCallback}/> 
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
                setDemoType(text.toUpperCase())
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
