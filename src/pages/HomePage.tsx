import * as React from 'react';
import { IChartProps, DataVizPalette } from '@fluentui/react-charting';
import Tile from '../elements/Tile';

const HomePage = () => {

    const data: IChartProps = {
      chartTitle: 'Line Chart',
      lineChartData: [
        {
          legend: 'Legend 1',
          data: [
            {
              x: new Date('2020-03-03T00:00:00.000Z'),
              y: 216000,
              onDataPointClick: () => alert('click on 217000'),
            },
            {
              x: new Date('2020-03-03T10:00:00.000Z'),
              y: 218123,
              onDataPointClick: () => alert('click on 217123'),
            },
            {
              x: new Date('2020-03-03T11:00:00.000Z'),
              y: 217124,
              onDataPointClick: () => alert('click on 217124'),
            },
            {
              x: new Date('2020-03-04T00:00:00.000Z'),
              y: 248000,
              onDataPointClick: () => alert('click on 248000'),
            },
            {
              x: new Date('2020-03-05T00:00:00.000Z'),
              y: 252000,
              onDataPointClick: () => alert('click on 252000'),
            },
            {
              x: new Date('2020-03-06T00:00:00.000Z'),
              y: 274000,
              onDataPointClick: () => alert('click on 274000'),
            },
            {
              x: new Date('2020-03-07T00:00:00.000Z'),
              y: 260000,
              onDataPointClick: () => alert('click on 260000'),
            },
            {
              x: new Date('2020-03-08T00:00:00.000Z'),
              y: 304000,
              onDataPointClick: () => alert('click on 300000'),
            },
            {
              x: new Date('2020-03-09T00:00:00.000Z'),
              y: 218000,
              onDataPointClick: () => alert('click on 218000'),
            },
          ],
          color: DataVizPalette.color3,
          lineOptions: {
            lineBorderWidth: '4',
          },
          onLineClick: () => console.log('From_Legacy_to_O365'),
        },
      ],
    };

  return (
    <>
      <Tile
        title="Price Index Ratio"
        chartTitle="Chart 1"
        lineChartData={data.lineChartData}
      />
    </>
  );
}

export default HomePage;