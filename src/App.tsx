import './App.css';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

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

  return (
    <>
      <CommandBar
        items={commandBarItems}
      />
    </>
  );
}

export default App;
