import React from 'react';
import Tile from '../elements/Tile';

const HomePage = () => {

  return (
    <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
      <Tile
        title="Price Index Ratio"
        chartTitle="Chart 1"
      />
    </div>
  );
}

export default HomePage;