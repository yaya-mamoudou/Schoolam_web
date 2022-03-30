import {useEffect,useMemo} from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import styles from './map.module.css'
const API_KEY = process.env.NEXT_MAP_API_KEY
import Loader from '../Loader/Loader'

export default function MapUni() {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY })
  return isLoaded  ? <Map/> : <div className='container border rounded d-flex align-items-center mt-5'><Loader/> <span className='ms-3'>Loading</span></div>
}

const Map = () => {
  const center = useMemo(()=>({lat: 44, lng: -80}),[])
  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName={`border rounded ${styles.map} mt-5`}>
      <Marker position={{ lat: 44, lng: -80 }}/>
    </GoogleMap>
  )
}