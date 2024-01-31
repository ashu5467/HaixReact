import React from 'react';
import Plot from 'react-plotly.js';
import data from './data';

const Scatter3DPlot = () => {
  // Extract company names and social media platforms from the data
  const companies = Object.keys(data);
  const socialMediaPlatforms = Object.keys(data[companies[0]]);

  // Create data for the 3D scatter plot
  const scatterData = companies.map((company) => ({
    x: socialMediaPlatforms,
    y: socialMediaPlatforms.map((platform) => data[company][platform]),
    z: socialMediaPlatforms.map(() => company),
    type: 'scatter3d',
    mode: 'markers',
    name: company,
    marker: {
      size: 12,
    },
  }));

  // Layout for the 3D scatter plot
  const layout = {
    title: '3D Scatter Plot - Social Media Followers',
    scene: {
      xaxis: { title: 'Social Media Platforms' },
      yaxis: { title: 'Number of Followers' },
      zaxis: { title: 'Companies' },
    },
  };
  const chartStyle = {
    boxShadow: '0 4px 8px rgba(0.5, 0.5, 0.5, 0.5)',
    borderRadius: '8px',
    padding: '16px',
    margin: '20px',
    backgroundColor: '#fff',
  };

  return (
    <div style={chartStyle}>
      <Plot data={scatterData} layout={layout} config={{ responsive: true }} />
    </div>
  );
};

export default Scatter3DPlot;
