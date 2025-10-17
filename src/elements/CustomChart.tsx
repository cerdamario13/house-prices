import React from 'react';
import { IChartProps, ILineChartDataPoint } from '@fluentui/react-charting';
import { LineChart } from '@fluentui/react-charting';

interface ICustomChartProps {
  chartTitle: string;
  lineChartData: {
    legend: string;
    color?: string;
    data: ILineChartDataPoint[];
  }[];
};

const CustomChart: React.FC<ICustomChartProps> = ({
  chartTitle, 
  lineChartData
}) => {

  const data: IChartProps = {
    chartTitle: chartTitle,
    lineChartData: lineChartData,
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