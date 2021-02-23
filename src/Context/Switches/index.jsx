import React, { createContext, useState } from 'react';

export const SwitchContext = createContext({
  values: {},
  handleToggleChange: () => {},
});

const SwitchProvider = ({ children }) => {
  const [values, setVal] = useState({
      impression: true,
      revenue: true,
      clicks: true,
      events: true,
      hour: true,
    });

  const handleToggleChange = (e) => {
    const { name, checked } = e.target;
    setVal({
      ...values,
      [name]: checked,
    });
  };

  return (
    <SwitchContext.Provider
      value={{
        values: values,
        handleToggleChange: handleToggleChange,
      }}
    >
      {children}
    </SwitchContext.Provider>
  );
};

export default SwitchProvider;
