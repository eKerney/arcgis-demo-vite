import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PublishIcon from '@mui/icons-material/Publish';
import { exportSurfaceData, submitSurfaceFields } from './utilityFunctions';
import { AppContextInterface, SurfaceInterface } from "../types"

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

export const requestSurfaceButton = (surfaceDataCallback, appContextState: AppContextInterface, demoPanel: string) => (     
    <Box textAlign='center'>
        <Button 
            variant="contained" 
            startIcon={<PublishIcon />}
            onClick={(() => submitSurfaceFields(surfaceDataCallback, appContextState, demoPanel))}>
            Surface Request
        </Button>
    </Box>
)


