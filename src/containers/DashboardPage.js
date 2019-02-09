import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
  <div className="dashboard">
    <div className="content-container">
      <h1 className="dashboard__title">Pick Court</h1>
      <Link className="dashboard__court" to="/SupremePost">
        <div>Ohio Supreme Court</div> 
        <div>May 1, 2002 and After</div>
      </Link>
      <Link className="dashboard__court" to="/AppealPostPrint">
        <div>Ohio Appeals Court (Print)</div>
        <div>May 1, 2002 and After</div>
      </Link>
      <Link className="dashboard__court" to="/AppealPostNonPrint">
        <div>Ohio Appeals Court (Non-Print)</div> 
        <div>May 1, 2002 and After</div>
      </Link>
      <Link className="dashboard__court" to="/SupremePre">
        <div>Ohio Supreme Court</div> 
        <div>Before May 1, 2012</div>
      </Link>
      <Link className="dashboard__court" to="/AppealPrePrint">
        <div>Ohio Appeals Court (Print)</div>
        <div>Before May 1, 2002</div>
      </Link>
      <Link className="dashboard__court" to="/AppealPreNonPrint">
        <div>Ohio Appeals Court (Non-Print)</div>
        <div>Before May 1, 2002</div>
      </Link>
      <Link className="dashboard__court" to="/CustomCitation">
        <div>Custom Citation</div>
      </Link>  
      <Link className="dashboard__court" to="/AbbreviateTerm">
        <div>Abbreviate Term</div>
      </Link> 
    </div>
  </div>
);

export default DashboardPage;