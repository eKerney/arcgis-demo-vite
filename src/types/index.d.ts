export interface Position { x: number; y: number; z?: number }

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
    cameraLocation?: {[key: string]: CameraPosition}; 
    availableLayers?: Array; 
    fieldDomains?: Array; 
    scoredFields?: Array; 
    AOIgeometry?: Object; 
    basemap?: string;
}

export interface MapContextInterface {
    scene?: Object;
    view?: Object;
    sketch?: Object;
    graphicsLayer?: Object;
}



