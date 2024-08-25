import * as React from 'react';
import { IChartProps, ILineChartProps, LineChart, DataVizPalette } from '@fluentui/react-charting';
import { Stack } from '@fluentui/react';

const HomePage = () => {

    const data: IChartProps = {
      chartTitle: 'Line Chart',
      lineChartData: [
        {
          legend: 'From_Legacy_to_O365',
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
        {
          legend: 'All',
          data: [
            {
              x: new Date('2020-03-03T00:00:00.000Z'),
              y: 297000,
            },
            {
              x: new Date('2020-03-04T00:00:00.000Z'),
              y: 284000,
            },
            {
              x: new Date('2020-03-05T00:00:00.000Z'),
              y: 282000,
            },
            {
              x: new Date('2020-03-06T00:00:00.000Z'),
              y: 294000,
            },
            {
              x: new Date('2020-03-07T00:00:00.000Z'),
              y: 224000,
            },
            {
              x: new Date('2020-03-08T00:00:00.000Z'),
              y: 300000,
            },
            {
              x: new Date('2020-03-09T00:00:00.000Z'),
              y: 298000,
            },
          ],
          color: DataVizPalette.color4,
          lineOptions: {
            lineBorderWidth: '4',
          },
        },
        {
          legend: 'single point',
          data: [
            {
              x: new Date('2020-03-05T12:00:00.000Z'),
              y: 232000,
            },
          ],
          color: DataVizPalette.color5,
        },
      ],
    };

  return (
    <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
      <div style={{padding: "10px", border: "1px solid black" }}>
        <Stack>
          <h5>Price Index Ratio</h5>
          <LineChart
            culture={window.navigator.language}
            data={data}
            legendsOverflowText={'Overflow Items'}
            yMinValue={200}
            yMaxValue={301}
            // height={500}
            // width={300}
            xAxisTickCount={10}
            enablePerfOptimization={true}
            yAxisTitle='Different categories of mail flow'
            xAxisTitle='Values of each category'
          />
        </Stack>
      </div>
    </div>
  );
}

export default HomePage;