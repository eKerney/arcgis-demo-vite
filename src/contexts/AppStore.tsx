import { createContext, useReducer } from "react";
import { Action, AppAction, AppContextInterface } from "../types";

const appActionType: AppAction = {
    DEMOTYPE: 'demoType',
    DEMOPANEL: 'demoPanel',
    CAMERALOCATION: 'cameraLocation',
    AVAILABLELAYERS: 'availableLayers',
    FIELDDOMAINS: 'fieldDomans',
    SCOREDFIELDS: 'scoredFields',
    AOIGEOMETRY: 'AOIgeometry',
    BASEMAP: 'basemap',
    WAYPOINTSGEOMETRY: 'waypointsGeometry',
    SURFACERESOLUTION: 'surfaceResolution'
}

export const initialAppState: AppContextInterface = {
    demoType: 'DEMO SELECT', 
    demoPanel: 'DEMO PANEL', 
    cameraLocation: {position: {x: 0, y: 0, z: 0}, tilt: 0},
    availableLayers: [], 
    fieldDomains: [], 
    scoredFields: [], 
    AOIgeometry: {}, 
    basemap: 'dark-gray-vector',
    waypointsGeometry: {},
    surfaceResolution: 0,
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

