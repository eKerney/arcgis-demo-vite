import { createContext, useState, useEffect, useCallback, useContext } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import { AppContext } from './AppContext';
import { GeoJSONinterface, SurfaceInterface } from '../types';

// const metadata = require('../components/metaDataJOINobj.json');
const metadata = require('../components/metadata.json');
//
// const BASE_URI=process.env.REACT_APP_BASE_URI
// const SUBSCRIPTION=process.env.REACT_APP_SUBSCRIPTION
// const CLIENT_ID=process.env.REACT_APP_CLIENT_ID
// const CLIENT_SECRET=process.env.REACT_APP_CLIENT_SECRET
// const API_SCOPE='airhub-api/advisory.read'

export const SurfaceContext = createContext({
    surface: null,
})

const SurfaceProvider = ({ children, auth }) => {
    const appContextData = useContext(AppContext);
    const [surface, setSurface] = useState<SurfaceInterface>();
    const [loading, setLoading] = useState<Boolean>(true);

    const fetchSurface = useCallback(async () => {
      setLoading(true)
    // console.log('in fetchSurface wrapper - geom', geometry)
      let requestData = { 
        "resolution": appContextData.surfaceResolution, 
        "scoring": { "LOW": 5, "MED": 50, "HIGH": 200 },
        "layers": [
            { "code": "lulc", "fields": ["mode"], "score": "BASE", "fieldType": "", "newField": "", "expr": []},
        ],
        "geometry": {
          "type": "Polygon",
          "coordinates": [appContextData.AOIgeometry]
        },
        // Local Testing
        // "ENV": {
        //     "BASE_URI": BASE_URI,
        //     "SUBSCRIPTION": SUBSCRIPTION,
        //     "CLIENT_ID": CLIENT_ID,
        //     "CLIENT_SECRET": CLIENT_SECRET,
        //     "API_SCOPE": API_SCOPE
        // },
      };

        if (appContextData.scoredFields) {
                appContextData.scoredFields.forEach(d => {
                    // special cases for calculated value layers 

                    const field = ((d.field).split('_'))[0];
                    const funcExpr = metadata[field].CODE === 'roads' ? d.func.join("|")
                        : d.func
                    // console.log(d);
                    // console.log(funcExpr)
                    // if layer contains objectid then use objectid as attribute>
                    // else use first attribute in attribute array
                    const feature = {
                        "fields": [metadata[field].FIELDS[0]],
                        // "fields": metadata[field].FIELDS.includes('objectid') 
                        //     ? ["objectid"]
                        //     :  [metadata[field].FIELDS[0]],
                        "code": metadata[((d.field).split('_'))[0]].CODE,
                        // "code": metadata[d.field].CODE,
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
                            // ? funcType 
                            // : "",
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

        if (appContextData.AOIgeometry && appContextData.scoredFields) {
              console.table(requestData);
                axios(config)
                  .then(function (response) {
                    console.log('IN DATA FETCH');
                    // parse reqeust from API as GeoJSON
                    const parsedGeoJSON: GeoJSONinterface = JSON.parse(response.data);
                    // extract feature properties from GeoJSON.features[0]
                    let fields: Object[] = [], fieldInfos: Object[] = [];
                    Object.entries(parsedGeoJSON.features[0].properties).forEach(d => {
                        fields.push({ name: d[0], alias: d[0], type: 'string'})
                        fieldInfos.push({fieldName:d[0], label:d[0]})
                    });
                    // create blobURL to be added to ArcGIS scene as GeoJSONlayer 
                    const blob = new Blob([JSON.stringify(parsedGeoJSON)], { type: "application/json" });
                    const geoJSONblob = URL.createObjectURL(blob);
                    // console.log(geoJSONblob);
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
                    setSurface([ geoJSONblob, fields, fieldInfos, hexTypes, parsedGeoJSON, blob]);
                    setLoading(false)
                  })
                  .catch(function (error: Error) {
                    console.table(error);
                  });
        }
  }, [surfaceFields])
   
  useEffect(() => {
      fetchSurface()
  }, [fetchSurface])

  useEffect(() => {
      // clears surface data when reset surface button is clicked
      demoType === 5 && setSurface(false)
  }, [demoType])

    const context = { surface }

  return (
  <>
  {loading && surfaceFields && <Spinner /> }
  {/* {!loading && <SurfaceContext.Provider value={context}>{children}</SurfaceContext.Provider>} */}
  <SurfaceContext.Provider value={context}>{children}</SurfaceContext.Provider>
  </> 
  )
}

export default SurfaceProvider