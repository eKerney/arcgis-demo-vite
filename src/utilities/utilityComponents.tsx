import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PublishIcon from '@mui/icons-material/Publish';
import { exportSurfaceData } from './utilityFunctions';
import { SurfaceInterface } from '../types';

export const exportSurfaceButton = (surface: SurfaceInterface) => (
    <Box textAlign='center'>
        <Button 
            variant="outlined" 
            startIcon={<CloudDownloadIcon />}
            onClick={(() => exportSurfaceData(surface))}>
            Export Surface
        </Button> 
    </Box>
)

export const requestSurfaceButton = (appDispatch) => (     
    <Box textAlign='center'>
        <Button 
            variant="contained" 
            startIcon={<PublishIcon />}
            onClick={(() => appDispatch({ type: 'surfaceRequest', payload: true }) )}>
            Surface Request
        </Button>
    </Box>
)


