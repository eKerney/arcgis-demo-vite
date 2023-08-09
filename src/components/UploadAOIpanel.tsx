import React, { useContext } from 'react';
import {useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import FileUpload from "react-material-file-upload";
import { AppContext } from '../contexts/AppStore';
// import DemoProvider from '../contexts/DemoContext';
// import { DemoContext } from '../contexts/DemoContext';

export const UploadAOIpanel = () => {
  // @ts-ignore
  const [appContext, appDispatch] = useContext(AppContext);
  const [files, setFiles] = useState([]);
  
  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (evt) => {
        const parsedData = JSON.parse(evt.target.result);
        appDispatch({ type: 'AOIgeometry', payload: parsedData.features[0].geometry.coordinates[0] })
        // setDemoContextData({...demo, AOIgeometry: parsedData.features[0].geometry.coordinates[0]})
        // geometryCallback(parsedData.features[0].geometry.coordinates[0])
    }
    files.length ? reader.readAsText(files[0]) : console.log('none');
  }, [files])

// @ts-ignore
  const handleFileUpload = (event) => setFiles(event)

// primary return
    return  (
    <div className="control-panel" style={{ height: '800px' }} >
      <h2 style={{textAlign: "center"}}>Upload AOI Geometry</h2>
      <hr />
         <FileUpload key={'handleFileUpload'} value={files} onChange={handleFileUpload} /> 
      <Box textAlign='center'>
        <br />  
      </Box>
    </div>
  )    
}

export default React.memo(UploadAOIpanel);

