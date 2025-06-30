import * as React from 'react';
import { ComboBox, IComboBoxOption, IComboBoxStyles, IconButton, MessageBar, MessageBarType, Stack, Text } from '@fluentui/react';
import { ILineChartPoints } from '@fluentui/react-charting';
import TileChart from './TileChart';
import { useBoolean } from '@fluentui/react-hooks';
import TileData from './TileData';
import { locations } from './Data';
import { getAffordability, getPriceIndexRatio } from '../api';
import { SimpleTile } from './SimpleTile';

interface ITileProps {
  title: string;
  chartTitle: string;
};

const Tile = ({ title, chartTitle }: ITileProps) => {

  const [showData, { toggle: toggleShowData }] = useBoolean(false);
  const [selectedItem, setSelectedItem] = React.useState<string | number | undefined>("Austin-Round Rock, TX");
  const [simpleTileData, setSimpleTileData] = React.useState({});
  const [lineChartData, setLineChartData] = React.useState<any>([]);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const comboBoxStyles: Partial<IComboBoxStyles> = { root: { maxWidth: 300 } };

  React.useEffect(() => {
    getLocation(selectedItem);
  }, [selectedItem]);

  const getLocation = async (location: string | number | undefined): Promise<any> => {

    let piDataResponse = await getPriceIndexRatio(location);
    let affordabilityData = await getAffordability(location);
    
    try {
      if (Array.isArray(piDataResponse)) {
        setLineChartData(piDataResponse);
      } else {
        // Set Error Message
        setErrorMessage(piDataResponse['Error']);
        setLineChartData([]);
        
      }
    } catch (error) {
      console.error('There was a problem with the pi fetch');
      return;
    }
    
    try {
      setSimpleTileData(affordabilityData);
    } catch (e) {
      console.error('There was a problem with the affordability fetch');
      return;
    }

  };

  const dismissError = () => {
    setErrorMessage("");
  }

  const onChange = (_: any, item: IComboBoxOption | undefined) => {
    setSelectedItem(item ? item.text : "");
  };

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
          {errorMessage && <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            onDismiss={dismissError}
            dismissButtonAriaLabel="Close"
            styles={{
              root: {
                display: "inline-block",
                width: "fit-content",
                maxWidth: "100%",
              }
            }}
          >
            {errorMessage}
          </MessageBar>}
          <ComboBox
            label="Location"
            selectedKey={selectedItem}
            onChange={onChange}
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
      {
        simpleTileData && Object.keys(simpleTileData).length > 0 ? (
          <SimpleTile data={simpleTileData} />
        ) : null
      }
    </div>
  )
};

export default Tile;