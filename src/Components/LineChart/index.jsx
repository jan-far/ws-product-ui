import React, { useContext } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from 'recharts';
import { DropdownContext } from '../../Context/Dropdown';
import { SwitchContext } from '../../Context/Switches';
import { LineWord } from './Elements';

const DataFormater = (number) => {
  if (number > 1000000000) {
    return (number / 1000000000).toString() + 'B';
  } else if (number > 1000000) {
    return (number / 1000000).toString() + 'M';
  } else if (number > 1000) {
    return (number / 1000).toString() + 'K';
  } else {
    return number.toString();
  }
};

const LineCharts = ({ key1, key2, key3, key4, key5 }) => {
  const { selectedData, selectedIndex } = useContext(DropdownContext);
  const { values } = useContext(SwitchContext);
  const { impression, revenue, clicks, events, hour } = values;

  const datas = [];
  selectedData.filter((data) => {
    return datas.push({ ...data, date: new Date(data.date).toDateString() });
  });

  const name = selectedIndex >= 2 ? 'Stats' : 'Events';

  return (
    <ResponsiveContainer width="100%" height={350}>
      {selectedData.length === 0 ? (
        <>
          <LineWord>SELECT A DURATION TO VISUALIZE</LineWord>
        </>
      ) : (
        <LineChart
          data={datas}
          margin={{ top: 15, right: 30, left: 10, bottom: 5 }}
          style={{
            marginTop: 10,
            backgroundColor: 'aliceblue',
            paddingBottom: 20,
          }}
        >
          <CartesianGrid stroke="#b9c6d3" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            stroke="#829db8"
            tick={{ fontSize: 12, fontWeight: 700 }}
          >
            <Label
              value={`Date of ${name}`}
              offset={-5}
              position="insideBottom"
            />
          </XAxis>
          <YAxis
            tickFormatter={DataFormater}
            tickCount={10}
            stroke="#829db8"
            tick={{ fontSize: 12, fontWeight: 700 }}
            label={{
              value: `${name} Count`,
              angle: -90,
              offset: 0,
              position: 'insideLeft',
            }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: 'aliceblue' }}
            cursor={{ stroke: 'blue', strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey={impression ? (key1 ? key1 : '') : ''}
            stroke="#4562ec"
            strokeWidth="2"
          />
          <Line
            type="step"
            dataKey={revenue ? (key2 ? key2 : '') : ''}
            stroke="purple"
            strokeWidth="1"
          />
          <Line
            type="step"
            dataKey={clicks ? (key3 ? key3 : '') : ''}
            stroke="#c0751f"
            strokeWidth="2"
          />
          <Line
            type="monotoneX"
            dataKey={events ? (key4 ? key4 : '') : ''}
            stroke="brown"
            strokeWidth="2"
          />

          <Line
            type="monotoneY"
            dataKey={hour ? (key5 ? key5 : '') : ''}
            stroke="darkgreen"
            strokeWidth="2"
          />
        </LineChart>
      )}
    </ResponsiveContainer>
  );
};

export default LineCharts;
