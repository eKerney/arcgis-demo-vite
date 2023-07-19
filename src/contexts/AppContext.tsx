import { createContext } from "react";
import { AppContextInterface } from "../types";

export const AppContext = createContext<AppContextInterface>({
    demoType: 'DEMO SELECT', demoPanel: 'DEMO PANEL', cameraLocation: {position: {x: 0, y: 0, z: 0}, tilt: 0},
    availableLayers: [], fieldDomains: [], scoredFields: [], AOIgeometry: {}, basemap: 'dark-gray-vector'
});

