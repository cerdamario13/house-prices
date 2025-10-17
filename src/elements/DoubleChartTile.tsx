import React from 'react';
import CustomChart from './CustomChart';


interface DoubleChartTitleProps {
  data: {[key: string]: any};
};

export const DoubleChartTile: React.FC<DoubleChartTitleProps> = ({
  data
}) => {

  return (
    <>
      <CustomChart
        chartTitle={'House Data'}
        lineChartData={[
          {
            legend: 'House Data',
            data: data['house_data']
          },
          {
            legend: 'Rent Data',
            data: data['rent_data']
          }
        ]}
      />
    </>
  );

};