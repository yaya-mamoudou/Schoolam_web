import {useEffect,useMemo} from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import styles from './map.module.css'
const API_KEY = process.env.NEXT_MAP_API_KEY
import Loader from '../Loader/Loader'

export default function MapUni({ lng, lat,label }) {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY })
  return isLoaded ? <Map label={label} lng={lng} lat={lat}/> : <div className='container border rounded d-flex align-items-center mt-5'><Loader/> <span className='ms-3'>Loading</span></div>
}

const Map = ({ lat, lng, label}) => {
  console.log(lng,lat);
  
  const center = useMemo(()=>({lat: parseFloat(lat), lng: parseFloat(lng)}),[])
  return (
    <GoogleMap zoom={16} center={{lat: parseFloat(lng), lng: parseFloat(lat)}} mapContainerClassName={`border rounded ${styles.map} mt-5`}>
    <Marker label={label} position={{lat: parseFloat(lng), lng: parseFloat(lat)}}/>
  </GoogleMap>
  )
}