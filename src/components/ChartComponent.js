// ChartComponent.js

import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

const ChartComponent = ({ selectedCompany, selectedSocialMedia }) => {
  // Sample data (replace with actual data)
  const companyData = {
    TCS: [100, 150, 120, 200, 180],
    Infosys: [80, 110, 90, 120, 100],
    // Add data for other companies
  };

  const socialMediaData = {
    Facebook: [500, 550, 600, 650, 700],
    Twitter: [200, 250, 300, 350, 400],
    // Add data for other social media
  };

  const [chartData, setChartData] = useState({
    x: [],
    y: [],
    type: 'scatter',
  });

  useEffect(() => {
    // Update chartData based on the selectedCompany or selectedSocialMedia
    if (selectedCompany) {
      setChartData({
        x: [1, 2, 3, 4, 5],
        y: companyData[selectedCompany],
        type: 'scatter',
        name: `${selectedCompany} Followers`,
      });
    } else if (selectedSocialMedia) {
      setChartData({
        x: [1, 2, 3, 4, 5],
        y: socialMediaData[selectedSocialMedia],
        type: 'scatter',
        name: `${selectedSocialMedia} Followers`,
      });
    }
  }, [selectedCompany, selectedSocialMedia]);

  return (
    <div>
      <h2>Followers Data Chart</h2>
      <Plot
        data={[chartData]}
        layout={{ title: 'Followers Data' }}
      />
    </div>
  );
};

export default ChartComponent;
