'use client'
import {
    MapContainer,
    TileLayer,
    Marker
} from 'react-leaflet'
import 'Leaflet/dist/leaflet.css'
const Map = () => {
    return (
        <MapContainer
            className='h-[50vh] rounded-lg relative z-0'
            center={[52.505, -0.09]}
            scrollWheelZoom={false}
            zoom={13}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default Map