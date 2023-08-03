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
    availableLayers?: Array; 
    fieldDomains?: Array; 
    scoredFields?: Object[]; 
    AOIgeometry?: Object; 
    basemap?: string;
    waypointsGeometry?: Object;
    surfaceResolution?: number;
}

export interface MapContextInterface {
    scene?: __esri.WebScene;
    view?: __esri.View;
    sketch?: __esri.Sketch;
    graphicsLayer?: __esri.GraphicsLayer;
}

export interface FeatureInterface {
    type: string;
    geometry: Object
    properties?: Object;
}

export interface GeoJSONinterface {
    type: string;
    features: FeatureInterface[];
}

export interface SurfaceInterface {
    GeoJSONblob?: string;
    fields?: Object;
    fieldInfos?: Object;
    hexTypes?: number[];
    parsedGeoJSON?: GeoJSONinterface;
    blob?: Blob;
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
    AVAILABLELAYERS: string;
    FIELDDOMAINS: string;
    SCOREDFIELDS: string;
    AOIGEOMETRY: string;
    BASEMAP: string;
    WAYPOINTSGEOMETRY: string;
    SURFACERESOLUTION: string;
}
    
export type Action = {
    type: string
    payload?: any
}
