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
    title: `Social Media Followers Comparison for ${company}`,
    xaxis: { title: 'Social Media Platform' },
    yaxis: { title: 'Number of Followers' },
  };

  const cardStyle = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '16px',
    margin: '20px',
    backgroundColor: '#fff',
  };

  return (
    <div style={cardStyle}>
      <h2>{company}</h2>
      <Plot
        data={data}
        layout={layout}
        config={{ responsive: true }}
      />
    </div>
  );
};

export default SocialMediaComparisonChart;
