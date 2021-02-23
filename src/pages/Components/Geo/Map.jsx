import React from 'react';
import GoogleMapReact, {} from 'google-map-react';
import LocationPin from './LocationPin';

const MapSection = ({ position }) => {
  const defaultProps = {
    center: {
      lat: 43.95,
      lng: -79.33,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ background: 'aliceblue', height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDYy8S1OCE_L66qM3oQp_NDBZUSsmkFBXM' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {position.map((pos, i) => (
          <LocationPin key={i} lat={pos.lat} lng={pos.lon} text={pos.name} />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default MapSection;
