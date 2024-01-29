// Header.js

import React from 'react';

const Header = () => {
  return (
    <div style={styles.Header}>
      <h1 style={styles.title}>Haix</h1>
    </div>
  );
};

const styles = {
    Header: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    margin: '0',
  },
};

export default Header;
