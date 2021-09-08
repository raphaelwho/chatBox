import React from 'react';
import './pageHeader.css';


const PageHeader = ({title}) => {
  return (
    <div className="page-header">{title.toUpperCase()}<hr className="page-header-hr" /></div>
  );
}

export default PageHeader;