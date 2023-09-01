import React, { useState, useContext } from 'react'
import { GoogleMap, LoadScript, StandaloneSearchBox, Marker } from '@react-google-maps/api';
import { AppContext } from '../../Context/AppProvider';
const containerStyle = {
    width: '400px',
    height: '400px'
};

function GoogleMapsBox() {
    const { center, setCenter } = useContext(AppContext);
    const [searchBox, setSearchBox] = useState(null);

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
                <StandaloneSearchBox
                    onLoad={(ref) => {
                        setSearchBox(ref);
                    }}
                    onPlacesChanged={() => {
                        console.log(searchBox.getPlaces());
                        setCenter({
                            lat: searchBox.getPlaces()[0].geometry.location.lat(),
                            lng: searchBox.getPlaces()[0].geometry.location.lng()
                        })
                    }}

                >
                    <input
                        type="text"
                        placeholder="Customized your placeholder"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            position: "absolute",
                            left: "50%",
                            marginLeft: "-120px"
                        }}
                    />
                </StandaloneSearchBox>
                <Marker
                    position={center}
                />
            </GoogleMap>
        </LoadScript >
    )
}

export default React.memo(GoogleMapsBox)