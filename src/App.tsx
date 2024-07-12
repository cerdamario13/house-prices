import './App.css';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { IChartProps, LineChart } from '@fluentui/react-charting';

// Initialize icons in the app
initializeIcons();

function App() {


  const commandBarItems: ICommandBarItemProps[] = [
    {
      key: 'home',
      text: 'Home',
      iconProps: { iconName: 'Home' },
      onClick: () => console.log('Share'),
    },
  ];

  const data: IChartProps = {
    chartTitle: 'Line Chart',
    lineChartData: [
      {
        legend: 'Line 1',
        data: [
          {
            x: 1910,
            y: 2.4,
          },
          {
            x: 1920,
            y: 2.9,
          },
          {
            x: 1950,
            y: 3.5,
          },
        ]
      }
    ]
  }

  return (
    <>
      <CommandBar
        items={commandBarItems}
      />

      <LineChart
        // Force rerender when any of the following states change
        key={`1234`}
        // culture={window.navigator.language}
        data={data}
        // legendsOverflowText={'Overflow Items'}
        // yMinValue={200}
        // yMaxValue={301}
        height={200}
        width={100}
        xAxisTickCount={10}
        enablePerfOptimization={true}
        yAxisTitle={'y title'}
        xAxisTitle={'x title'}
      />
    </>
  );
}

export default App;
