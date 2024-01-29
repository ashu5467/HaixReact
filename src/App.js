// App.js

import React, { useState } from "react";
import Companies from "./components/Companies";
import SocialMediaComparisonChart from "./components/SocialMediaComparisonChart";
import FollowersDisplay from "./components/FollowersDisplay ";
import data from "./components/data";
import Header from "./components/Header";

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  return (
    <div>
      <Header/>
      <Companies onCompanyClick={handleCompanyClick} />
      {selectedCompany && (
        <FollowersDisplay company={selectedCompany} followersData={data} />
      )}
      
      {selectedCompany && (
        <SocialMediaComparisonChart
          company={selectedCompany}
          followersData={data}
        />
      )}
    </div>
  );
};

export default App;
