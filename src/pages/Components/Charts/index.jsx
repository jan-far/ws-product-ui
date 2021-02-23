import React, { useContext } from 'react';
import DropDownList from '../../../Components/Dropdown';
import LineCharts from '../../../Components/LineChart';
import DropdownProvider from '../../../Context/Dropdown';
import { ApiContext } from '../../../Context/Api';
import Container from '@material-ui/core/Container';
import withSpinner from '../../../Components/withSpinner';
import DataTable from '../../../Components/Table';
import Switches from '../../../Components/Switch';

const LineChartsWithSpinner = withSpinner(LineCharts);
const options = [
  'Daily Events',
  'Hourly Events',
  'Daily Stats',
  'Hourly Stats',
];
const columns = {
  0: {
    0: [
      { field: 'id', headerName: 'ID', width: 70 },
      {
        field: 'date',
        headerName: 'Date',
        width: 150,
        valueFormatter: (params) => params.value.toDateString(),
      },
      {
        field: 'events',
        headerName: 'Events',
        width: 130,
        hide: { field: 'events' } ? false : false,
      },
    ],
    1: [
      { field: 'id', headerName: 'ID', width: 70 },
      {
        field: 'date',
        headerName: 'Date',
        width: 150,
        valueFormatter: (params) => params.value.toDateString(),
      },
      { field: 'hour', headerName: 'Hour', width: 100 },
      {
        field: 'events',
        headerName: 'Events',
        width: 130,
        hide: { field: 'events' } ? false : false,
      },
    ],
  },
  1: {
    0: [
      { field: 'id', headerName: 'ID', width: 70 },
      {
        field: 'date',
        headerName: 'Date',
        width: 150,
        valueFormatter: (params) => params.value.toDateString(),
      },
      { field: 'revenue', headerName: 'Revenue', width: 160 },
      { field: 'impressions', headerName: 'Impressions', width: 150 },
      { field: 'clicks', headerName: 'Clicks', width: 100 },
    ],
    1: [
      { field: 'id', headerName: 'ID', width: 70 },
      {
        field: 'date',
        headerName: 'Date',
        width: 150,
        valueFormatter: (params) => params.value.toDateString(),
      },
      { field: 'revenue', headerName: 'Revenue', width: 160 },
      { field: 'hour', headerName: 'Hour', width: 100 },
      { field: 'impressions', headerName: 'Impressions', width: 150 },
      { field: 'clicks', headerName: 'Clicks', width: 100 },
    ],
  },
};

const EventCharts = () => {
  const { dailyEvents, hourlyEvents, dailyStats, hourlyStats } = useContext(
    ApiContext
  );

  const dataset = [dailyEvents, hourlyEvents, dailyStats, hourlyStats];

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: -10 }}>
        <DropdownProvider>
          <div>
            <div>
              <DropDownList name="Data" datas={dataset} options={options} />
            </div>
            <Switches />
            <LineChartsWithSpinner
              key1="impressions"
              key2="revenue"
              key3="clicks"
              key4="events"
              key5="hour"
            />
            <DataTable columns={columns} />
          </div>
        </DropdownProvider>
      </Container>
    </>
  );
};

export default EventCharts;
