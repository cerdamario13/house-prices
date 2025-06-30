import { Stack, Text, TextField } from '@fluentui/react';
import React from 'react';

interface SimpleTileProps {
  data: any
}

export const SimpleTile: React.FC<SimpleTileProps> = ({
  data
}) => {
  return (
    <div style={{ padding: "10px", border: "1px solid black" }}>
      <Stack>
        <Text variant='xLarge'>Affordability</Text>
        <TextField
          label='Annual Income Needed to Afford'
          value={data['Annual Income Needed to Afford']}
          borderless
        />
        <TextField
          label='Monthly Mortgage Payment '
          value={data['Monthly Mortgage Payment ']}
          borderless
        />
        <TextField
          label='Total Monthly Owner Costs '
          value={data['Total Monthly Owner Costs ']}
          borderless
        />
        <TextField
          label='Typical Home Value'
          value={data['Typical Home Value']}
          borderless
        />
      </Stack>
    </div>
  );
};