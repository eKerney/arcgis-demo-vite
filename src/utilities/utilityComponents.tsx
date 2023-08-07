import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PublishIcon from '@mui/icons-material/Publish';
import { exportSurfaceData, submitSurfaceFields } from './utilityFunctions';
import { AppContextInterface } from '../types';

export const exportSurfaceButton = () => (
    <Box textAlign='center'>
        <Button 
            variant="outlined" 
            startIcon={<CloudDownloadIcon />}
            onClick={(() => exportSurfaceData())}>
            Export Surface
        </Button> 
    </Box>
)

export const requestSurfaceButton = (appContext: AppContextInterface, appDispatch) => (     
    <Box textAlign='center'>
        <Button 
            variant="contained" 
            startIcon={<PublishIcon />}
            onClick={(() => submitSurfaceFields(appContext, appDispatch))}>
            Surface Request
        </Button>
    </Box>
)


