// BubbleChart3D.js

import React from 'react';
import Plot from 'react-plotly.js';
import data from './data';

const BubbleChart3D = ({ data }) => {
  // Extracting company names
  const companies = Object.keys(data);

  // Extracting social media platforms
  const platforms = Object.keys(data[companies[0]]);

  // Creating data array for the 3D Bubble Chart
  const chartData = companies.map((company) => ({
    x: platforms.map((platform) => platform),
    y: platforms.map(() => company),
    z: platforms.map((platform) => data[company][platform]),
    mode: 'markers',
    marker: {
      size: 12,
    },
    type: 'scatter3d',
    name: company,
  }));

  // Layout configuration
  const layout = {
    title: '3D Bubble Chart',
    scene: {
      xaxis: { title: 'Social Media Platform' },
      yaxis: { title: 'Company' },
      zaxis: { title: 'Number of Followers' },
    },
  };

  return (
    <div>
      <Plot data={chartData} layout={layout} config={{ responsive: true }} />
    </div>
  );
};

export default BubbleChart3D;
