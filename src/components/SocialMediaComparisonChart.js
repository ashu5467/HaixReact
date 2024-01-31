// SocialMediaComparisonChart.js

import React from 'react';
import Plot from 'react-plotly.js';

const SocialMediaComparisonChart = ({ company, followersData }) => {
  const socialMediaNames = Object.keys(followersData[company]);

  const data = socialMediaNames.map((socialMedia) => ({
    x: [socialMedia],
    y: [followersData[company][socialMedia]],
    type: 'bar',
    name: socialMedia,
  }));

  const layout = {
    title: 'Social Media Followers Comparison',
    xaxis: { title: 'Social Media Platform' },
    yaxis: { title: 'Number of Followers' },
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
      <Plot
        data={data}
        layout={layout}
        config={{ responsive: true }}
      />
    </div>
  );
};

export default SocialMediaComparisonChart;
