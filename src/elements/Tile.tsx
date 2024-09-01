import * as React from 'react';
import { IconButton, Stack, Text } from '@fluentui/react';
import { ILineChartPoints } from '@fluentui/react-charting';
import TileChart from './TileChart';


interface ITileProps {
  title: string;
  chartTitle: string;
  lineChartData: ILineChartPoints[] | undefined;
};

const Tile = ({ title, chartTitle, lineChartData }: ITileProps) => {


  return (
    <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
      <div style={{ padding: "10px", border: "1px solid black" }}>
        <Stack>
          <Stack horizontal tokens={{childrenGap: 5}} verticalAlign='center' >
            <Text variant='xxLarge'>{title}</Text>
            <IconButton
              iconProps={{ iconName: 'Table' }}
              title="Show Data"
              styles={{
                icon: { fontSize: 20 }
              }}
            />
          </Stack>
          <TileChart
            lineChartData={lineChartData}
            chartTitle={chartTitle}
          />
        </Stack>

      </div>

    </div>
  )
};

export default Tile;