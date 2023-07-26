import { AppContextInterface, SurfaceInterface } from "../types"

export const exportSurfaceData = (surface: SurfaceInterface) => {
    const link = document.createElement("a")
    link.download = "surfaceData.geojson"
    link.href = surface.GeoJSONblob
    link.click()
}

export const submitSurfaceFields = (surfaceDataCallback, appContextState: AppContextInterface, demoPanel: string)  => {
    surfaceDataCallback({
        scoredFields: appContextState.scoredFields, 
        demoPanel: demoPanel,
        surfaceResolution: appContextState.surfaceResolution,
    });
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
