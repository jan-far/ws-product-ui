import React, { createContext, useState } from 'react';

export const DropdownContext = createContext({
  anchorEl: null,
  selectedIndex: null,
  selectedData: [],
  isLoading: true,
  setSelectedData: () => {},
  handleClickListItem: () => {},
  handleMenuItemClick: () => {},
  handleClose: () => {},
  setIsLoading: () => {},
});

const DropdownProvider = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null),
    [selectedIndex, setSelectedIndex] = useState(null),
    [selectedData, setSelectedData] = useState([]),
    [isLoading, setIsLoading] = useState(true);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  return (
    <DropdownContext.Provider
      value={{
        anchorEl: anchorEl,
        selectedIndex: selectedIndex,
        selectedData: selectedData,
        isLoading:isLoading,
        setSelectedData: setSelectedData,
        handleClickListItem: handleClickListItem,
        handleMenuItemClick: handleMenuItemClick,
        handleClose: handleClose,
        setIsLoading: setIsLoading,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

export default DropdownProvider;
