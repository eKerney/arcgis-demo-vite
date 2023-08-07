import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppStore';
import { MapContext } from '../contexts/MapStore';

export const RemoveSurfaceButton = () => {
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);
    // @ts-ignore
    const [mapContext, mapDispatch] = useContext(MapContext);
    const resetMapLayer = () => {
        mapContext.graphicsLayer.removeAll()
        appDispatch({ type: 'surfaceData', 
                    payload: { 
                        scoredFields: appContext.scoredFields, 
                        demoPanel: 'RESET SURFACE', 
                        surfaceResolution: appContext.surfaceResolution,
                        surfaceRequest: false,
                    }
        }); 
        appDispatch({ type: 'AOIgeometry', payload: {} })
    }

    return (
        <Box textAlign='center'>
        { true && <Button 
        variant="outlined" 
        startIcon={<DeleteIcon />}
        size="small"
        onClick={resetMapLayer}>
        Remove Surface
        </Button> }
        </Box>
    )
}

export default RemoveSurfaceButton;
