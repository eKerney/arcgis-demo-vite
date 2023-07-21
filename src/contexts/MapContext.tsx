import { createContext } from "react";
import { MapContextInterface } from "../types";

export const MapContext = createContext<MapContextInterface>({ 
    scene: {},
    view: {},
    sketch: {},
    graphicsLayer: {}
});

