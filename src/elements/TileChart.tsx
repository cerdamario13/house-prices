import * as React from 'react';
import CustomChart from './CustomChart';
import { ILineChartPoints } from '@fluentui/react-charting';


interface ITileChartProps {
  lineChartData: ILineChartPoints[] | undefined;
  chartTitle: string;
};

const TileChart = ({ lineChartData, chartTitle }: ITileChartProps) => {
  return (
    <>
      {
        lineChartData ? (
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