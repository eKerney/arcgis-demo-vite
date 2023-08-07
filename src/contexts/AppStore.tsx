import { createContext, useReducer } from "react";
import { Action, AppAction, AppContextInterface } from "../types";

const appActionType: AppAction = {
    DEMOTYPE: 'demoType',
    DEMOPANEL: 'demoPanel',
    CAMERALOCATION: 'cameraLocation',
    PLACENAME: 'placeName',
    AVAILABLELAYERS: 'availableLayers',
    FIELDDOMAINS: 'fieldDomans',
    SCOREDFIELDS: 'scoredFields',
    AOIGEOMETRY: 'AOIgeometry',
    BASEMAP: 'basemap',
    WAYPOINTSGEOMETRY: 'waypointsGeometry',
    SURFACERESOLUTION: 'surfaceResolution',
    SURFACEDATA: 'surfaceData',
    SURFACEREQUEST: 'surfaceRequest',
    SELECTEDFIELDS: 'selectedFields',
}

const locations: {[key: string]: CameraPosition} = {
    'Los Angeles': { position: {x: -118.255, y: 34.010, z: 1380}, heading: 0, tilt: 76},
    'Ontario': { position: {x: -117.685, y: 33.935, z: 2546}, heading: 6.873, tilt: 76.762 },
    'Detroit': { position: {x: -83.113, y: 42.268, z: 4754}, heading: 33.511, tilt: 65.004 },
    'Arlington, TX': {position: {x: -97.110, y: 32.704, z: 3122}, heading: 3.431, tilt: 46.679 },
    'The Villages': {position: {x: -81.941, y: 28.812, z: 3245}, heading: 339, tilt: 69},
    'Phoenix': {position: {x: -112.026, y: 33.356, z: 2659 }, heading: 335, tilt: 75},
    'Holland, MI': {position: {x: -86.034, y: 42.749, z: 2181 }, heading: 298, tilt: 71.86},
}

export const initialAppState: AppContextInterface = {
    demoType: 'DEMO SELECT', 
    demoPanel: 'DEMO PANEL', 
    cameraLocation: locations['Los Angeles'], // {position: {x: 0, y: 0, z: 0}, tilt: 0},
    placeName: 'Los Angeles',
    availableLayers: [], 
    fieldDomains: [], 
    scoredFields: [], 
    AOIgeometry: {}, 
    basemap: 'dark-gray-vector',
    waypointsGeometry: {},
    surfaceResolution: 0,
    surfaceRequest: false,
    selectedFields: [],
};

export const AppContext = createContext(initialAppState) 

export const AppStore = ({ children }) => {
  const [state, dispatch] = useReducer((state: AppContextInterface, action: Action) => {
    switch (action.type) {
        case appActionType.DEMOTYPE:
            return {...state, demoType: action.payload}
        case appActionType.DEMOPANEL:
            return {...state, demoPanel: action.payload}
        case appActionType.CAMERALOCATION:
            return {...state, cameraLocation: action.payload}
        case appActionType.PLACENAME:
            return {...state, placeName: action.payload}
        case appActionType.AVAILABLELAYERS:
            return {...state, availableLayers: action.payload}
        case appActionType.FIELDDOMAINS:
            return {...state, fieldDomains: action.payload}
        case appActionType.SCOREDFIELDS:
            return {...state, scoredFields: action.payload}
        case appActionType.AOIGEOMETRY:
            return {...state, AOIgeometry: action.payload}
        case appActionType.BASEMAP:
            return {...state, basemap: action.payload}
        case appActionType.WAYPOINTSGEOMETRY:
            return {...state, waypointsGeometry: action.payload}
        case appActionType.SURFACERESOLUTION:
            return {...state, surfaceResolution: action.payload}
        case appActionType.SURFACEDATA:
            return {...state, surfaceResolution: action.payload.surfaceResolution, demoPanel: action.payload.demoPanel, scoredFields: action.payload.scoredFields, surfaceRequest: action.payload.surfaceRequest }
        case appActionType.SURFACEREQUEST:
            return {...state, surfaceRequest: action.payload}
        case appActionType.SELECTEDFIELDS:
            return {...state, selectedFields: action.payload}
        default:
            return state
    }
  }, initialAppState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  )
}

