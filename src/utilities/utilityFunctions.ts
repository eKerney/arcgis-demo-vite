import { useContext } from "react"
import { SurfaceContext } from "../contexts/Surface"
import { AppContextInterface } from "../types";

export const exportSurfaceData = () => {
    const surface = useContext(SurfaceContext);
    const link = document.createElement("a")
    link.download = "surfaceData.geojson"
    link.href = surface.GeoJSONblob
    link.click()
}

export const submitSurfaceFields = (appContext: AppContextInterface, appDispatch)  => {
    appDispatch({ type: 'surfaceData', 
                payload: { 
                    scoredFields: appContext.scoredFields, 
                    demoPanel: appContext.demoPanel, 
                    surfaceResolution: appContext.surfaceResolution,
                    surfaceRequest: true,
                } 
    }) 
};

export const MenuProps = {
    PaperProps: {
        style: {
          maxHeight: 48 * 4.5 + 8,
          width: 250,
        },
    },
};

export const getStyles = (name, personName, theme) => {
    return {
        fontWeight:
          personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
    };
}

