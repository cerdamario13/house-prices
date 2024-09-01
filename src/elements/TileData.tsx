import * as React from 'react';
import {
  DataSheetGrid,
  checkboxColumn,
  textColumn,
  keyColumn,
} from 'react-datasheet-grid'
import { ILineChartPoints } from '@fluentui/react-charting';

interface ITileDataProps {
  lineChartData: ILineChartPoints[] | undefined;
};

const TileData = ({lineChartData}: ITileDataProps) => {

  const [ data, setData ] = React.useState<any>([
    { firstName: 'Elon', lastName: 'Musk' },
    { firstName: 'Jeff', lastName: 'Bezos' },
  ]);

  const columns = [
    {
      ...keyColumn('firstName', textColumn),
      title: 'First name',
    },
    {
      ...keyColumn('lastName', textColumn),
      title: 'Last name',
    },
  ];

  console.log(lineChartData);

  return (
    <DataSheetGrid
      value={data}
      onChange={setData}
      columns={columns}
    />
  );
};

export default TileData;