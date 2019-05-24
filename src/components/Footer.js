import React from 'react';

const date = new Date();

const Footer = () => {
  return (
    <div style={styles}>
      <p> All rights reserved {date.getFullYear()} </p>{' '}
    </div>
  );
};

const styles = {
  textAlign: 'center',
  marginTop: '6rem',
  marginBottom: '1rem',
};

export default Footer;
