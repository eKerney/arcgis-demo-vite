export interface Position { x?: number; y: number; z?: number }

export interface CameraPosition {
    position?: Position;
    heading?: number;
    tilt?: number;
}

export interface DemoCard {
    name: string; 
    cardPosition: Object; 
    imagePath: string; 
    action: string; 
    altText: string; 
    desc: string
}

export interface AppContextInterface {
    demoType?: string; 
    demoPanel?: string; 
    cameraLocation?: CameraPosition; 
    placeName?: string;
    availableLayers?: Array; 
    fieldDomains?: Array; 
    scoredFields?: Object[]; 
    AOIgeometry?: Object; 
    basemap?: string;
    waypointsGeometry?: Array;
    surfaceResolution?: number;
    surfaceRequest?: Boolean;
    selectedFields?: Object[];
}

export interface MapContextInterface {
    scene?: __esri.WebScene;
    view?: __esri.View;
    sketch?: __esri.Sketch;
    graphicsLayer?: __esri.GraphicsLayer;
}

export type GeoJSONprops = {
    SCORE?: string;
    id?: string;
}

export interface FeatureInterface {
    type: string;
    geometry: Object
    id?: string;
    properties: GeoJSONprops;
}

export interface GeoJSONinterface {
    type: string;
    features: FeatureInterface[];
}

export interface SurfaceInterface {
    GeoJSONblob: string;
    fields: Object;
    parsedGeoJSON: GeoJSONinterface;
    fieldInfos?: Object;
    hexTypes?: number[];
    blob?: Blob;
}

export interface RouteInterface {
    routeBlob: blob;
    routeGeoJSON: GeoJSONinterface
}

export interface SurfaceData {
    demoPanel: string;
    scoredFields: Object[]; 
    surfaceResolution: number;
}

export type MapAction = {
    SCENE: string;
    VIEW: string;
    SKETCH: string;
    GRAPHICSLAYER: string;
    SCENEVIEWGRAPHICS: string;
}

export type AppAction = {
    DEMOTYPE: string;
    DEMOPANEL: string;
    CAMERALOCATION: string;
    PLACENAME: string;
    AVAILABLELAYERS: string;
    FIELDDOMAINS: string;
    SCOREDFIELDS: string;
    AOIGEOMETRY: string;
    BASEMAP: string;
    WAYPOINTSGEOMETRY: string;
    SURFACERESOLUTION: string;
    SURFACEDATA: string;
    SURFACEREQUEST: string;
    SELECTEDFIELDS: string;
}
    
export type Action = {
    type: string
    payload?: any
}
