import React from 'react';
import Plot from 'react-plotly.js';

const Line3DChart = ({ company, data }) => {
  // Extracting three social media platforms for demonstration
  const platforms = ['Facebook', 'Twitter', 'Instagram'];
  const xData = platforms.map((platform) => platform);
  const yData = platforms.map((platform) => data[company][platform]);
  const zData = platforms.map(() => Math.random() * 1000000); // Random values for demonstration

  const trace = {
    type: 'scatter3d',
    mode: 'lines',
    x: xData,
    y: yData,
    z: zData,
    marker: {
      size: 12,
      color: zData,
      colorscale: 'Viridis',
    },
  };

  const layout = {
    title: `3D Line Chart for ${company}`,
    scene: {
      xaxis: { title: 'Social Media Platform' },
      yaxis: { title: 'Number of Followers' },
      zaxis: { title: 'Random Values (for demonstration)' },
    },
  };

  const cardStyle = {
    boxShadow: '0 4px 8px rgba(0.5, 0.5, 0.5, 0.5)',
    borderRadius: '8px',
    padding: '16px',
    margin: '20px',
    backgroundColor: '#fff',
  };

  return (
    <div style={cardStyle}>
      <Plot data={[trace]} layout={layout} config={{ responsive: true }} />
    </div>
  );
};

export default Line3DChart;
