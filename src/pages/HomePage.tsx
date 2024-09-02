import * as React from 'react';
import { IChartProps, DataVizPalette } from '@fluentui/react-charting';
import Tile from '../elements/Tile';
import { tempData } from '../elements/Data';

const HomePage = () => {

  return (
    <>
      <Tile
        title="Price Index Ratio"
        chartTitle="Chart 1"
        //@ts-ignore
        lineChartData={tempData}
      />
    </>
  );
}

export default HomePage;