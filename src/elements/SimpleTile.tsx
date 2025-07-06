import { Stack, Text, TextField } from '@fluentui/react';
import React from 'react';

interface SimpleTileProps {
  data: any
}

export const SimpleTile: React.FC<SimpleTileProps> = ({
  data
}) => {

  // Create a NumberFormat instance for US dollars
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div style={{ padding: "10px", border: "1px solid black" }}>
      <Stack>
        <Text variant='xLarge'>Affordability</Text>
        <TextField
          label='Annual Income Needed to Afford'
          value={formatter.format(data['Annual Income Needed to Afford'])}
          borderless
          onChange={() => {}}
        />
        <TextField
          label='Monthly Mortgage Payment '
          value={formatter.format(data['Monthly Mortgage Payment '])}
          borderless
          onChange={() => {}}
        />
        <TextField
          label='Total Monthly Owner Costs '
          value={formatter.format(data['Total Monthly Owner Costs '])}
          borderless
          onChange={() => {}}
        />
        <TextField
          label='Typical Home Value'
          value={formatter.format(data['Typical Home Value'])}
          borderless
          onChange={() => {}}
        />
      </Stack>
    </div>
  );
};