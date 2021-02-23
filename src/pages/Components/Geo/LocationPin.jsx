import React from 'react';
import { Place } from '@material-ui/icons';

const LocationPin = ({ text }) => {
  return (
    <>
      <Place style={{ color: 'red', fontSize: '24px' }} />
      <p
        style={{
          color: 'white',
          background: 'grey',
          padding: '10px 5px',
          display: 'inline-flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {text}
      </p>
    </>
  );
};

export default LocationPin;
