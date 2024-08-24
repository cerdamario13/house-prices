import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react';
import { useNavigate } from 'react-router-dom';

const CustomCommandBar = () => {

  const navigate = useNavigate();

  const commandBarItems: ICommandBarItemProps[] = [
    {
      key: 'home',
      text: 'Home',
      iconProps: { iconName: 'Home' },
      onClick: () => {
        navigate('/home');
      }
    },
    {
      key: 'pi_ratio',
      text: 'PI Ratio',
      iconProps: { iconName: 'LineChart' },
      onClick: () => {
        navigate('/pi-ratio');
      }
    }
  ];

  return (
    <CommandBar items={commandBarItems} />
  );
}

export default CustomCommandBar;