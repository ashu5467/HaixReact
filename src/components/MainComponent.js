// MainComponent.js

import React, { useState } from "react";
import Chips from "./Companies";
import ChartComponent from "./ChartComponent";

const MainComponent = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedSocialMedia, setSelectedSocialMedia] = useState(null);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    setSelectedSocialMedia(null);
  };

  const handleSocialMediaClick = (socialMedia) => {
    setSelectedSocialMedia(socialMedia);
    setSelectedCompany(null);
  };

  return (
    <div style={styles.container}>
      <h1>Data Analysis</h1>
      <div style={styles.chipsContainer}>
        <Chips
          onCompanyClick={handleCompanyClick}
          onSocialMediaClick={handleSocialMediaClick}
        />
      </div>
      <div style={styles.chartContainer}>
        <ChartComponent
          selectedCompany={selectedCompany}
          selectedSocialMedia={selectedSocialMedia}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  chipsContainer: {
    margin: "20px 0",
  },
  chartContainer: {
    marginTop: "20px",
  },
};

export default MainComponent;
