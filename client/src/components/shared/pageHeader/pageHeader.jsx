import React from 'react';
import './pageHeader.css';


const PageHeader = ({ title, isVisible = true }) => {

  if (isVisible) {
    return (<div className="page-header">{title.toUpperCase()}<hr className="page-header-hr" /></div>);
  } else {
    return (<div></div>);
  }

}

export default PageHeader;