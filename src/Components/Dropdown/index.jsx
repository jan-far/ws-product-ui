import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { DropdownContext } from '../../Context/Dropdown';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#6d8eac',
    marginTop: 12,
  },
}));

export default function DropDownList({name, datas, options }) {
  const classes = useStyles();
  const {
    handleClickListItem,
    handleClose,
    handleMenuItemClick,
    selectedIndex,
    setSelectedData,
    setIsLoading,
    anchorEl,
  } = useContext(DropdownContext);
  
  const label = `Select ${name} duration`;

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label={label}
          onClick={handleClickListItem}
        >
          <ListItemText primary={label} secondary={options[selectedIndex]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === selectedIndex}
            selected={index === selectedIndex}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              setSelectedData(datas[index]);
              setIsLoading(false);
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
