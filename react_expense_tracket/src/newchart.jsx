import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const Charts = ({state}) => {
    console.log(state.income);
    console.log(state.expense);
    console.log(state.balance);

    const [income,Setincome] = useState(state.income)
    const [expense,Setexpense] = useState(state.expense)
    const [balance,Setbalance] = useState(state.balance)

    useEffect(()=>{

        Setincome(state.income)
        Setexpense(state.expense)
        Setbalance(state.balance)

    },[state])

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Income","Expense","Balance"],
    },
  };

  const series = [
    {
      name: "series-1",
      data: [income,expense,balance],
    },
  ];

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart options={options} series={series} type="bar" width="500" />
        </div>
      </div>
    </div>
  );
};

export default Charts;
