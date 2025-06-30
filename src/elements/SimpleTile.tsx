import React from 'react';

interface SimpleTileProps {
  data: any
}

export const SimpleTile: React.FC<SimpleTileProps> = ({
  data
}) => {
  return (
    <div style={{ padding: "10px", border: "1px solid black" }}>

    </div>
  );
};