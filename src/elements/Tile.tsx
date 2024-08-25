import * as React from 'react';
import { Stack } from '@fluentui/react';

interface ITileProps {
  title: string;
};

const Tile = ({title}: ITileProps) => {
  return (
    <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
      <div style={{padding: "10px", border: "1px solid black" }}>
        <Stack>
          <h3>{title}</h3>
        </Stack>

      </div>

    </div>
  )
};

export default Tile;