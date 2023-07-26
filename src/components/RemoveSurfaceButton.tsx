import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useState } from 'react';
import { MapContext } from '../contexts/MapContext';
import { AppContext } from '../contexts/AppContext';

export const RemoveSurfaceButton = ({ surfaceDataCallback, geometryCallback }) => {
    const mapContextData = useContext(MapContext);
    const appContextData = useContext(AppContext);
    const [appContextState, setAppContextState] = useState(appContextData);

    const resetMapLayer = () => {
        mapContextData.graphicsLayer.removeAll()
        surfaceDataCallback({
            scoredFields: appContextState.scoredFields, 
            demoPanel: 'RESET SURFACE',
            surfaceResolution: appContextState.surfaceResolution,
        });
        geometryCallback(null)
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
