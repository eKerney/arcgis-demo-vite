import { createContext } from "react";
import { MapContextInterface } from "../types";

export const MapContext = createContext<MapContextInterface>({
    scene: null,
    view: null,
    sketch: null,
    graphicsLayer: null
});

