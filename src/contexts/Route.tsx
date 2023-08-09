import { createContext, useState, useEffect, useCallback, useContext } from 'react'
import { SurfaceContext } from '../contexts/Surface'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { GeoJSONinterface, RouteInterface } from '../types'
import { AppContext } from './AppStore'

// const BASE_URI=process.env.REACT_APP_BASE_URI
// const SUBSCRIPTION=process.env.REACT_APP_SUBSCRIPTION
// const CLIENT_ID=process.env.REACT_APP_CLIENT_ID
// const CLIENT_SECRET=process.env.REACT_APP_CLIENT_SECRET
// const API_SCOPE='airhub-api/advisory.read'

export const initialRouteState: RouteInterface = ({ 
    routeBlob: new Blob([]),
    routeGeoJSON: {"type": "FeatureCollection", "features": []} 
});

export const RouteContext = createContext(initialRouteState);

const RouteProvider = ({ children }) => {
    // @ts-ignore
    const [appContext, appDispatch] = useContext(AppContext);
    const surface = useContext(SurfaceContext);
    const [route, setRoute] = useState<RouteInterface>({ 
        routeBlob: new Blob([]),
        routeGeoJSON: {"type": "FeatureCollection", "features": []} 
    });
    const [loading, setLoading] = useState(true);

    const convertSurface = (GeoJSON: GeoJSONinterface) => {
        const requestGeoJSON: GeoJSONinterface = { "type": "FeatureCollection", "features": [] }
        GeoJSON.features.forEach(d => {
            requestGeoJSON.features.push({
                "type": "Feature", "id": d.id, 
                "properties": {"SCORE":d.properties.SCORE, "id":d.properties.id},
                "geometry": {"type": "Polygon", "coordinates": [[]] },  
            })
        })
        return requestGeoJSON;
    }

    const fetchData = useCallback(async () => {
    if (appContext.waypointsGeometry && surface.GeoJSONblob) {
      let requestData = { 
            "resolution": appContext.surfaceResolution,
            "waypoints": [appContext.waypointsGeometry],  
            "surface_GeoJSON": convertSurface(surface.parsedGeoJSON),
            // "ENV": {
            // "BASE_URI": BASE_URI,
            // "SUBSCRIPTION": SUBSCRIPTION,
            // "CLIENT_ID": CLIENT_ID,
            // "CLIENT_SECRET": CLIENT_SECRET,
            // "API_SCOPE": API_SCOPE
            // }
      };

      const data  = JSON.stringify(requestData);
      const config = {
            method: 'post',
            // url: 'http://localhost:7071/api/routingSolutions',
            url: 'https://func-data-poc-dev-cus.azurewebsites.net/api/routingSolutions?code=N4dpI_xDyPftKbFjj2MKbdM2UiSan99L1iC3ckf9PsTAAzFu9n6XtQ==',
            headers: {'Content-Type': 'application/json'},
            data : data
        };

        console.log('routeRequest', requestData)
                axios(config)
                  .then(function (response) {
                    response.data.features.forEach((d, i) => response.data.features[i].id = i)
                    const blob = new Blob([JSON.stringify(response.data)], { type: "application/json" });
                    const geoJSONblob = URL.createObjectURL(blob);
                    setRoute({ routeBlob: geoJSONblob, routeGeoJSON: response.data });
                    setLoading(false)
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
        }
  }, [appContext.waypointsGeometry])
   
  useEffect(() => {
    console.log('useEffect triggered');
    fetchData();
  }, [fetchData])

  const context = route

  return (
    <>
    {loading && Object.keys(appContext.waypointsGeometry).length !== 0 && <Spinner /> }
    <RouteContext.Provider value={context}>{children}</RouteContext.Provider>
    </>
  )
}

export default RouteProvider

