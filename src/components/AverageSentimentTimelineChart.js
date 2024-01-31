// AverageSentimentTimelineChart.js

import React from "react";
import Plot from "react-plotly.js";
import averageSentimentData from "./averageSentimentData";

const AverageSentimentTimelineChart = ({ company }) => {
  const data = averageSentimentData[company];

  const trace = {
    x: data.map((entry) => entry.date),
    y: data.map((entry) => entry.averageSentiment),
    type: "scatter",
    mode: "lines+markers",
    marker: { color: "blue" },
  };

  const layout = {
    title: `Average Sentiment Timeline for ${company}`,
    xaxis: {
      title: "Date",
      tickvals: data.map((entry) => entry.date),
      ticktext: data.map((entry) =>
        new Date(entry.date).toLocaleDateString()
      ),
    },
    yaxis: { title: "Average Sentiment" },
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

export default AverageSentimentTimelineChart;
