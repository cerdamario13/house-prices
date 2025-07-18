import * as React from 'react';
import { IChartProps } from '@fluentui/react-charting';
import { LineChart } from '@fluentui/react-charting';

interface ICustomChartProps {
  chartTitle: string;
  lineChartData: any;
};

const CustomChart = ({chartTitle, lineChartData}: ICustomChartProps) => {

  const data: IChartProps = {
    chartTitle: chartTitle,
    lineChartData: [{
      legend: 'Price Index',
      data: lineChartData
    }]
  };
  
  return (
    <LineChart
      culture={window.navigator.language}
      data={data}
      legendsOverflowText={'Overflow Items'}
      enablePerfOptimization={true}
      yAxisTitle='Price Index'
      xAxisTitle='Year'
    />
  );
}

export default CustomChart;