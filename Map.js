import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 80vw;
  height: 80vh;
`;

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <MapContainer>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        />
      </MapContainer>
    </LoadScript>
  );
}

export default Map;
