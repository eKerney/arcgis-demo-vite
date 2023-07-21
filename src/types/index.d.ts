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
    scoredFields?: Array; 
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



