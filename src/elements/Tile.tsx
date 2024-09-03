import * as React from 'react';
import { ComboBox, IComboBoxOption, IComboBoxStyles, IconButton, Stack, Text } from '@fluentui/react';
import { ILineChartPoints } from '@fluentui/react-charting';
import TileChart from './TileChart';
import { useBoolean } from '@fluentui/react-hooks';
import TileData from './TileData';
import { locations } from './Data';

interface ITileProps {
  title: string;
  chartTitle: string;
  lineChartData: ILineChartPoints[] | undefined;
};

const Tile = ({ title, chartTitle, lineChartData }: ITileProps) => {

  const [showData, { toggle: toggleShowData }] = useBoolean(false);
  const [selectedItem, setSelectedItem] = React.useState<IComboBoxOption>();

  const comboBoxStyles: Partial<IComboBoxStyles> = { root: { maxWidth: 300 } };

  return (
    <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
      <div style={{ padding: "10px", border: "1px solid black" }}>
        <Stack>
          <Stack horizontal tokens={{ childrenGap: 5 }} verticalAlign='center' >
            <Text variant='xxLarge'>{title}</Text>
            <IconButton
              iconProps={{ iconName: showData ? 'LineChart' : 'Table' }}
              title={showData ? "Show Chart" : "Show Data"}
              styles={{
                icon: { fontSize: 20 }
              }}
              onClick={toggleShowData}
            />
          </Stack>
          <ComboBox
            label="Location"
            selectedKey={selectedItem ? selectedItem.key : undefined}
            onChange={(_, item) => setSelectedItem(item)}
            placeholder="Select an option"
            options={locations}
            styles={comboBoxStyles}
            allowFreeform
            autoComplete='on'
          />
          {
            showData ? (
              <TileData
                lineChartData={lineChartData}
              />
            ) : (
              <TileChart
                lineChartData={lineChartData}
                chartTitle={chartTitle}
              />
            )
          }
        </Stack>

      </div>

    </div>
  )
};

export default Tile;