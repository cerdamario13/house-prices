import React from 'react';
import CustomChart from './CustomChart';


interface DoubleChartTitleProps {
  data: any;
};

export const DoubleChartTitle: React.FC<DoubleChartTitleProps> = ({
  data
}) => {

  console.log(data)

  return (
    <>
      <CustomChart
        chartTitle={'Hello'}
        lineChartData={data['house_data']}
      />
    </>
  );

};