import * as React from 'react';
import { IChartProps, ILineChartPoints } from '@fluentui/react-charting';
import { LineChart } from '@fluentui/react-charting';

interface ICustomChartProps {
  chartTitle: string;
  lineChartData: ILineChartPoints[] | undefined;
};

const CustomChart = ({chartTitle, lineChartData}: ICustomChartProps) => {

  const data: IChartProps = {
    chartTitle: chartTitle,
    lineChartData: lineChartData
  };
  
  return (
    <LineChart
      culture={window.navigator.language}
      data={data}
      legendsOverflowText={'Overflow Items'}
      yMinValue={200}
      yMaxValue={301}
      xAxisTickCount={10}
      enablePerfOptimization={true}
      yAxisTitle='Different categories of mail flow'
      xAxisTitle='Values of each category'
    />
  );
}

export default CustomChart;