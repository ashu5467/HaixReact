// FollowersDisplay.js

import React from "react";
import Badge from "react-bootstrap/Badge";

const formatNumber = (number) => {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(1) + "B";
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(1) + "M";
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(1) + "K";
  } else {
    return number;
  }
};

const FollowersDisplay = ({ company, followersData }) => {
  return (
    <div style={styles.container}>
      <h2>{company}</h2>
      <div style={styles.badgesContainer}>
        {Object.keys(followersData[company]).map((platform, index) => (
          <Badge key={index} variant="secondary" style={styles.badge}>
            {platform}: {formatNumber(followersData[company][platform])}
          </Badge>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: "20px",
    textAlign: "center", // Center text horizontally
  },
  badgesContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  badge: {
    marginRight: '8px',
  },
};

export default FollowersDisplay;
