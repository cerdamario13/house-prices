import * as React from 'react';
import {
  DataSheetGrid,
  textColumn,
  keyColumn,
} from 'react-datasheet-grid';

interface ITileDataProps {
  lineChartData: any;
};

const TileData = ({lineChartData}: ITileDataProps) => {

  const [ data, setData ] = React.useState<any>([]);

  React.useEffect(() => {
    setData(lineChartData ? lineChartData[0]['years'] : []);
  }, [lineChartData]);

  const columns = [
    {
      ...keyColumn('x', textColumn),
      title: 'Year',
    },
    {
      ...keyColumn('y', textColumn),
      title: 'Price Index Ratio',
    },
  ];

  return (
    <DataSheetGrid
      value={data}
      onChange={setData}
      columns={columns}
    />
  );
};

export default TileData;