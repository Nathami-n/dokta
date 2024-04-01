'use client'
import {
    MapContainer,
    TileLayer,
    Marker
} from 'react-leaflet'
import 'Leaflet/dist/leaflet.css'
import { useCountries } from '@/app/utils/useCountries'
const Map = ({
    location
}:{location:string}) => {
    const {getCountryByValue} = useCountries();
    const latLang = getCountryByValue(location)?.latLang
    return (
        <MapContainer
            className='h-[50vh] rounded-lg relative z-0'
            center={ latLang ?? [52.505, -0.09]}
            scrollWheelZoom={false}
            zoom={8}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default Map