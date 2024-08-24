import React from 'react';
import './App.css';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Pivot, PivotItem } from '@fluentui/react';
import HomePage from './pages/HomePage';
import PiRatio from './pages/PiRatio';

// Initialize icons in the app
initializeIcons();


function App() {
  const commandBarItems: ICommandBarItemProps[] = [
    {
      key: 'home',
      text: 'Home',
      iconProps: { iconName: 'Home' },
    },
    {
      key: 'pi_ratio',
      text: 'PI Ratio',
      iconProps: { iconName: 'LineChart' },
    }
  ];

  return (
    <BrowserRouter>
      <CommandBar items={commandBarItems} />
      <PivotNavigation />
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/pi-ratio" element={<PiRatio/>} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

const PivotNavigation = () => {
  const history = useHistory();

  const handleLinkClick = (item?: PivotItem) => {
    if (item) {
      history.push(item.props.itemKey!);
    }
  };

  return (
    <Pivot onLinkClick={handleLinkClick}>
      <PivotItem headerText="Home" itemKey="/home" />
      <PivotItem headerText="PI Ratio" itemKey="/pi-ratio" />
    </Pivot>
  );
};

export default App;