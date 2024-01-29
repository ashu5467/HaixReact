// Companies.js

import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Companies = ({ onCompanyClick }) => {
  const badgeStyle = {
    fontSize: '1.2rem',
  };

  const companies = ['TCS', 'Infosys', 'Capgemini', 'Cognizant', 'Accenture'];

  return (
    <div style={styles.container}>
      {companies.map((company, index) => (
        <Badge
          key={index}
          variant="secondary"
          style={badgeStyle}
          onClick={() => onCompanyClick(company)}
        >
          {company}
        </Badge>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '20px',
  },
};

export default Companies;
