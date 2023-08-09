import { useState, useContext, useEffect } from "react";
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
import { AppContext } from "../contexts/AppStore";
// import ElevatePanel from "./ElevatePanel";
// import { RouteContext } from "../contexts/Route";
import UploadAOIpanel from "./UploadAOIpanel";

export const DemoOptions = ({ }) => {
    const drawerWidth = 70;
    const logoStyle = {marginTop: -40, marginBottom: 20, marginRight: 2}
    // const surface = useContext(SurfaceContext);
    // const route = useContext(RouteContext);
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);
    const handleClick = (event, text: string) =>  {
        appDispatch({ type: 'demoPanel', payload: text.toUpperCase() });
    }

  const demoOptionsList = [
    ...((appContext.demoType ==='AirHub SkyPath' || appContext.demoType==='AirHub Elevate' || appContext.demoType==='AirHub MultiPath' 
        || appContext.demoType==='AirHub ReadyToFly') ? [] : ['SELECT DATA SURFACE']),
    ...((appContext.demoType==='AirHub Elevate') ? [] : ['CLASSIFY SURFACE']),
    ...((appContext.demoType==='AirHub Elevate') ? [] : ['CALCULATE SURFACE']),
    ...((appContext.demoType==='AirHub Elevate') ? [] : ['SURFACE DATA MODEL']),
    ...['REFRESH MAP'],
    ...['UPLOAD AOI GEOMETRY']
  ];
  const demoIconsList = [
    ...((appContext.demoType==='AirHub SkyPath' || appContext.demoType==='AirHub Elevate'|| appContext.demoType==='AirHub MultiPath' 
        || appContext.demoType==='AirHub ReadyToFly') ? [] : [<DoneOutlineIcon className='icon' />]),
    ...(appContext.demoType!=='AirHub Elevate' ? [<RuleIcon className='icon' />] : []),
    ...(appContext.demoType!=='AirHub Elevate' ? [<CalculateIcon className='icon'/>] : []),
    ...(appContext.demoType!=='AirHub Elevate' ? [<AccountTreeIcon className='icon'/>] : []),
    ...[<RefreshIcon className='icon'/>, <UploadFileOutlinedIcon className='icon'/>] 
  ];

    const renderControlPanel = () => {
        return (
            appContext.demoPanel  === 'REFRESH MAP' 
            ? window.location.reload(false) 
            // : appContextData.demoType === 'AirHub ReadyToFly' && surface && route 
            // ? <ElevatePanel onDemoSelect={onDemoSelect} elevateParamsCallback={elevateParamsCallback}/> 
            : appContext.demoPanel === 'SELECT DATA SURFACE' 
            ? <SelectDataSurface /> 
            : appContext.demoPanel === 'CLASSIFY SURFACE'
            ? <ClassifySurface /> 
            : appContext.demoPanel === 'CALCULATE SURFACE' 
            ? <CalculateSurface /> 
            : appContext.demoPanel === 'SURFACE DATA MODEL' 
            ? <SurfaceModel /> 
            // : appContextData.demoPanel === 'AirHub Elevate' 
            // ? <ElevatePanel onDemoSelect={onDemoSelect} elevateParamsCallback={elevateParamsCallback} /> 
            : appContext.demoPanel === 'UPLOAD AOI GEOMETRY' 
            ? <UploadAOIpanel /> 
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
          {demoOptionsList.map((textData, index) => (
            <ListItem key={textData} disablePadding > <Tooltip title={textData} placement="right">
              <ListItemButton onClick={event => handleClick(event, textData)}>  
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
