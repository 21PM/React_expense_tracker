import React, { useEffect } from 'react';
import './Overview.css';

const Overview = ({state,dispatch}) => {

  console.log(state);

  useEffect(()=>{

  },[state])

  return (
    <div className="overview">
      <h2>OverView</h2>
      <div className="stats">
        <div className="stat-item">
          <span className="stat-value" style={{color:"green"}}>{state.income}</span>
          <span className="stat-label">Total Income</span>
        </div>
        <div className="stat-item">
          <span className="stat-value" style={{color:"red"}}>{state.expense}</span>
          <span className="stat-label">Total Expenses</span>
        </div>
        <div className="stat-item">
          <span className="stat-value" style={{color:"yellow"}}>{state.balance}</span>
          <span className="stat-label">Balance Amount</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;
