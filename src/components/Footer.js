import React from 'react';
const date = new Date()

const Footer = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem'}}>
      <p>All rights reserved {date.getFullYear()}</p>
    </div>
  )
}

export default Footer
