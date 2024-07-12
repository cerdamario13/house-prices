import * as React from 'react';
import { IChartProps, LineChart } from '@fluentui/react-charting';

interface CustomLineChartProps {
  data: object[];
}

export const CustomLineChart: React.FunctionComponent<CustomLineChartProps> = (props) => {

  //Prepare the data to fit IChartProps
  const chartData: IChartProps = {};


  return (
    <div style={{ width: '100%', height: 300 }}>
      <LineChart
        key={`1234`}
        data={chartData}
        xAxisTickCount={3}
        enablePerfOptimization={true}
        yAxisTitle={'PI Ratio'}
        xAxisTitle={'Years'}
      />
    </div>
  )

};