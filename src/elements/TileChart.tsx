import * as React from 'react';
import CustomChart from './CustomChart';
import { ILineChartDataPoint } from '@fluentui/react-charting';


interface ITileChartProps {
  lineChartData: {legend: string, data: ILineChartDataPoint[]}[];
  chartTitle: string;
};

const TileChart = ({ lineChartData, chartTitle }: ITileChartProps) => {

  return (
    <>
      {
        (lineChartData.length > 0 && lineChartData[0]['data'].length > 0) ? (
          <CustomChart
            chartTitle={chartTitle}
            lineChartData={lineChartData}
          />
        ) : (
          <div>
            No data to display
          </div>
        )
      }
    </>
  );
};

export default TileChart;