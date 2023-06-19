import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const containerStyle = {
    width: '100%',
    height: '400px'
};

function Maps({center}) {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCKDbVq1BfGP_LvM1URDCwnph8njULizoA"
            libraries={["places"]}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <Marker
                    position={center}
                />
            </GoogleMap>
        </LoadScript >
    )
}

export default React.memo(Maps)