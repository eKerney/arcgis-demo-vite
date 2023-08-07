import { createContext, useState, useEffect, useCallback, useContext } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import { GeoJSONinterface, SurfaceInterface } from '../types';
import { AppContext } from './AppStore';
import metadata from '../components/metadata.json';
//
// const BASE_URI=process.env.REACT_APP_BASE_URI
// const SUBSCRIPTION=process.env.REACT_APP_SUBSCRIPTION
// const CLIENT_ID=process.env.REACT_APP_CLIENT_ID
// const CLIENT_SECRET=process.env.REACT_APP_CLIENT_SECRET
// const API_SCOPE='airhub-api/advisory.read'

export const SurfaceContext = createContext<SurfaceInterface>({GeoJSONblob: '', fields: {}, fieldInfos: {}, hexTypes: [], parsedGeoJSON: {type: '', features: []}, blob: new Blob([])})

const SurfaceProvider = ({ children }) => {
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);
    const [surface, setSurface] = useState<SurfaceInterface>({
        GeoJSONblob: '', fields: {}, fieldInfos: {}, hexTypes: [], 
        parsedGeoJSON: {type: '', features: []}, blob: new Blob([]) 
    });
    const [loading, setLoading] = useState<Boolean>(true);

    const fetchSurface = useCallback(async () => {
      console.log('fetchSurface');
      console.log(appContext.surfaceRequest);
      setLoading(true)
      let requestData = { 
        "resolution": appContext.surfaceResolution, 
        "scoring": { "LOW": 5, "MED": 50, "HIGH": 200 },
        "layers": [
            { "code": "lulc", "fields": ["mode"], "score": "BASE", "fieldType": "", "newField": "", "expr": []},
        ],
        "geometry": {
          "type": "Polygon",
          "coordinates": [appContext.AOIgeometry]
        },
      };

        if (appContext.scoredFields.length !== 0) {
                appContext.scoredFields.forEach(d => {
                    // special cases for calculated value layers 
                    const field = ((d.field).split('_'))[0];
                    const funcExpr = metadata[field].CODE === 'roads' ? d.func.join("|")
                        : d.func
                    // if layer contains objectid then use objectid as attribute>
                    // else use first attribute in attribute array
                    const feature = {
                        "fields": [metadata[field].FIELDS[0]],
                        "code": metadata[((d.field).split('_'))[0]].CODE,
                        "score": d.func.length > 0 
                            ? d.funcScore 
                            : d.score,
                        "expr": d.func.length > 0 
                            ? funcExpr 
                            : "",
                        "fieldType": d.func.length === 0 
                            ? ''
                            : metadata[field].CODE === 'lulc' 
                                ? 'IN_LIST'
                                : metadata[field].CODE === 'roads' 
                                    ? 'MATCH_PARTIAL'
                                    : 'FUNC',
                        "newField": d.func.length > 0
                            ? d.field
                            : ""
                    }
                    requestData.layers.push(feature)
            });
        }

      const data  = JSON.stringify(requestData);
        var config = {
            method: 'post',
            url: 'http://localhost:7071/api/solutionsSurfaceV2',
            // url: 'https://func-data-poc-dev-cus.azurewebsites.net/api/solutionsSurfaceV2?code=RQD1SQwRNEpx7fZViMiKlsCUBkKWHjy6QTaTtX3J9MFhAzFuD7dj0w==',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };
        if (Object.keys(appContext.AOIgeometry).length !== 0 && Object.keys(appContext.scoredFields).length !== 0) {
              console.log('request', requestData);
                axios(config)
                  .then(function (response) {
                      console.log('ran request');
                    // parse reqeust from API as GeoJSON
                    const parsedGeoJSON: GeoJSONinterface = JSON.parse(response.data);
                    // extract feature properties from GeoJSON.features[0]
                    let fields: Object[] = [], fieldInfos: Object[] = [];
                    Object.entries(parsedGeoJSON.features[0].properties).forEach(d => {
                        fields.push({ name: d[0], alias: d[0], type: 'string'})
                        fieldInfos.push({fieldName:d[0], label:d[0]})
                    });
                    // create blobURL to be added to ArcGIS scene as GeoJSONlayer 
                    const blobData = new Blob([JSON.stringify(parsedGeoJSON)], { type: "application/json" });
                    const geoJSONblob = URL.createObjectURL(blobData);
                    // prep data for HexGraph visualization
                      let s = [0,0,0]
                      const hexF = 100/37, len = parsedGeoJSON.features.length
                      parsedGeoJSON.features.forEach((d: Object) => {
                        d.properties.SCORE === 200 ? (s[0]=s[0]+1) :
                          (d.properties.SCORE === 50 ? (s[1]=s[1]+1) : (s[2]=s[2]+1))
                      })
                      const hexPer = [Math.round((s[0]/len*100)/hexF), 
                          Math.round((s[1]/len*100)/hexF), 
                          Math.round((s[2]/len*100)/hexF)]
                      const hexTypes = Array().concat(Array(hexPer[0]).fill(200))
                          .concat(Array(hexPer[1]).fill(50))
                          .concat(Array(hexPer[2]).fill(5))
                    // surface context contains geoJSONblob, fields and fieldInfos for layer rendering
                    setSurface({GeoJSONblob: geoJSONblob, fields: fields, fieldInfos: fieldInfos, 
                        hexTypes: hexTypes, parsedGeoJSON: parsedGeoJSON, blob: blobData
                    })
                    setLoading(false)
                    appDispatch({ type: 'surfaceRequest', payload: false })
                    console.log('in change state portion')
                  })
                  .catch(function (error: Error) {
                    console.log(error);
                  });
        }
  }, [appContext.surfaceRequest])
   
    useEffect(() => {
        appContext.surfaceRequest && fetchSurface()
    }, [fetchSurface])

    useEffect(() => {
      // clears surface data when reset surface button is clicked
        appContext.demoPanel === 'RESET SURFACE' && setSurface({
            GeoJSONblob: '', fields: {}, fieldInfos: {}, 
            hexTypes: [], parsedGeoJSON: {type: '', features: []}, blob: new Blob([])
       }); 
    }, [appContext.demoPanel])

    const context = surface 

  return (
  <>
  {loading && appContext.surfaceRequest === true && <Spinner /> }
  <SurfaceContext.Provider value={context}>{children}</SurfaceContext.Provider>
  </> 
  )
}

export default SurfaceProvider
