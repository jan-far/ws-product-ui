import React, { createContext, useEffect, useState } from 'react';
import { getData } from '../../Services';

export const PoiContext = createContext({
  poi: [],
  isLoading: true,
  setIsLoading: () => {},
});

const PoiProvider = ({ children }) => {
  const [poi, setPoi] = useState([]),
    [isLoading, setIsLoading] = useState(true);

  const getPOI = async () => {
    try {
      const req = await getData('poi');
      const res = await req.json();

      if (req.status !== 429) {
        setPoi([...res]);
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPOI();
  }, []);

  return (
    <PoiContext.Provider
      value={{
        poi: poi,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
      }}
    >
      {children}
    </PoiContext.Provider>
  );
};

export default PoiProvider;
