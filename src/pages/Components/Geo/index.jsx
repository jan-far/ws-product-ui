import React, { useContext } from 'react';
import withSpinner from '../../../Components/withSpinner';
import { PoiContext } from '../../../Context/Poi';
import MapSection from './Map';

const MapSectionWithSpinner = withSpinner(MapSection);

const GeoMap = () => {
  const { poi, isLoading } = useContext(PoiContext);

  return (
    <>
      <MapSectionWithSpinner isLoading={isLoading} position={poi} />
    </>
  );
};

export default GeoMap;
