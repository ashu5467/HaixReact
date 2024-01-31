// Import necessary components
import Scatter3DPlot from "./components/Scatter3DPlot";
import Line3DChart from "./components/Line3DChart";
import { useState } from "react";
import data from "./components/data";
import SocialMediaComparisonChart from "./components/SocialMediaComparisonChart";
import AverageSentimentTimelineChart from "./components/AverageSentimentTimelineChart";
import averageSentimentData from "./components/averageSentimentData";
import Companies from "./components/Companies";
import Header from "./components/Header";
import FollowersDisplay from "./components/FollowersDisplay ";
import BubbleChart3D from "./components/BubbleChart3D";

// ...

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Companies onCompanyClick={handleCompanyClick} />
      {selectedCompany && (
        <FollowersDisplay company={selectedCompany} followersData={data} />
      )}
      {selectedCompany && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <SocialMediaComparisonChart
            company={selectedCompany}
            followersData={data}
          />
          <AverageSentimentTimelineChart
            company={selectedCompany}
            followersData={averageSentimentData}
          />
        </div>
      )}
      {selectedCompany && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Scatter3DPlot />
          <Line3DChart company={selectedCompany} data={data} />
        </div>
      )}
      {selectedCompany && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Your other components */}
          <BubbleChart3D data={data[selectedCompany]} />
        </div>
      )}
    </div>
  );
};

export default App;
