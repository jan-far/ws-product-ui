import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { SwitchContext } from '../../Context/Switches';
import { DropdownContext } from '../../Context/Dropdown';

const Switches = () => {
  const { values, handleToggleChange } = useContext(SwitchContext);
  const { impression, revenue, clicks, events, hour } = values;
  const { selectedIndex } = useContext(DropdownContext);

  const Stats = selectedIndex >= 2 ? false : true;
  const Events = selectedIndex >= 2 ? true : false;
  const hours =
    selectedIndex >= 2
      ? selectedIndex === 2
        ? true
        : false
      : selectedIndex === 1
      ? false
      : true;

  return (
    <div
      style={{
        marginTop: 5,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'aliceblue',
      }}
    >
      <FormControlLabel
        control={
          <Switch
            color="primary"
            size="small"
            name="impression"
            checked={impression}
            disabled={Stats}
            onChange={handleToggleChange}
          />
        }
        label="impression"
      />
      <FormControlLabel
        control={
          <Switch
            color="primary"
            size="small"
            name="revenue"
            checked={revenue}
            disabled={Stats}
            onChange={handleToggleChange}
          />
        }
        label="revenue"
      />
      <FormControlLabel
        control={
          <Switch
            color="primary"
            size="small"
            name="clicks"
            checked={clicks}
            disabled={Stats}
            onChange={handleToggleChange}
          />
        }
        label="clicks"
      />
      <FormControlLabel
        control={
          <Switch
            color="primary"
            size="small"
            name="events"
            checked={events}
            disabled={Events}
            onChange={handleToggleChange}
          />
        }
        label="events"
      />
      <FormControlLabel
        control={
          <Switch
            color="primary"
            size="small"
            name="hour"
            checked={hour}
            disabled={hours}
            onChange={handleToggleChange}
          />
        }
        label="hour"
      />
    </div>
  );
};

export default Switches;
