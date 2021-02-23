import React, { createContext, useEffect, useState } from 'react';
import NotificationToast from '../../Components/Toast';
import { getData } from '../../Services';

(async () => {
  try {
    const req = await getData('events/hourly');
    const res = await req.json();

    if (req.status === 500 || req === undefined) {
      return NotificationToast.error(
        'Failed to get data! Check that your are connnected to the internet'
      );
    }

    if (req.status === 429) {
      return NotificationToast.error(res.message);
    }
  } catch (error) {
    console.log('this is the error' ,error)
  }
})();

export const ApiContext = createContext({
  dailyEvents: [],
  hourlyEvents: [],
  dailyStats: [],
  hourlyStats: [],
  isLoading: true,
  setIsLoading: () => {},
});

const ApiProvider = ({ children }) => {
  const [dailyEvents, setDailyEvents] = useState([]),
    [hourlyEvents, setHourlyEvents] = useState([]),
    [dailyStats, setDailyStats] = useState([]),
    [hourlyStats, setHourlyStats] = useState([]),
    [isLoading, setIsLoading] = useState(true);

  const dEvent = async () => {
    try {
      const req = await getData('events/daily');
      const res = await req.json();

      if (req.status !== 429) {
        setDailyEvents([...res]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hEvent = async () => {
    try {
      const req = await getData('events/hourly');
      const res = await req.json();

      if (req.status !== 429) {
        setHourlyEvents([...res]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dStats = async () => {
    try {
      const req = await getData('stats/daily');
      const res = await req.json();

      if (req.status !== 429) {
        setDailyStats([...res]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hStats = async () => {
    try {
      const req = await getData('stats/hourly');
      const res = await req.json();

      if (req.status !== 429) {
        setHourlyStats([...res]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dStats();
    hStats();
    dEvent();
    hEvent();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        dailyEvents: dailyEvents,
        hourlyEvents: hourlyEvents,
        dailyStats: dailyStats,
        hourlyStats: hourlyStats,
        isLoading: isLoading,
        setIsLoading: setIsLoading,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;
