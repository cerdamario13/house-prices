import { ILineChartPoints } from '@fluentui/react-charting';
import * as React from 'react';

interface ITileDataProps {
  lineChartData: ILineChartPoints[] | undefined;
};

const TileData = ({lineChartData}: ITileDataProps) => {

  console.log(lineChartData);

  return (
    <>
    </>
  );
};

export default TileData;