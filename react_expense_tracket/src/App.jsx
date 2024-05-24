import { useReducer, useState } from "react";

import "./App.css";
import {v4 as generateID} from "uuid"

import Overview from "./Overview/overview";
import Chart from "./Chart/Chart";
import AddTransaction from "./AddTransaction/AddTransaction";
import RecentTransactions from "./RecentTransactions/RecentTransactions";
import Charts from "./newchart";

function App() {
  const [state, dispatch] = useReducer(reducer, {
   
    income: 0,
    expense: 0,
    balance:0,
    title:[
      // {discription:"salary",transaction:"Income"},
      // {discription:"world tour",transaction:"Expense"}
    ]
  });

  function reducer(state, action) {
    // console.log();

    switch (action.type) {
      case "Income":
        state = { ...state, income: parseInt(state.income) + parseInt(action.amount),balance:parseInt(action.amount) + (state.income) - parseInt(state.expense),title:[...state.title,{discription:action.desc,transaction:"Income",amount:action.amount, id:generateID(),}] };
        return state;

      case "Expense":
        state = { ...state, expense: parseInt(state.expense) + parseInt(action.amount),balance:parseInt(state.income) - (parseInt(action.amount)+(state.expense)),title:[...state.title,{discription:action.desc,transaction:"Expense",amount:action.amount, id:generateID(),}]  };
        return state;
       
      case "updateList":
        const newstate = {...state,title:[...action.updateddata],
          income:action.deletedIncome?state.income-action.deletedAmount:state.income,
          expense:action.deletedExpense?state.expense-action.deletedAmount:state.expense,
          
        } 

        return state = {
          ...newstate,balance:newstate.income-newstate.expense
        } 

      
        return state;

      default:
        return state;
    }
  }

  
  return (
    <>
      <div className="UpperDIv">
        <div className="upperLeft">
          <Overview state={state} dispatch={dispatch} />
          <AddTransaction state={state} dispatch={dispatch} />
        </div>
        <div className="upperRight">
          <RecentTransactions state={state} dispatch={dispatch}/>
        </div>
      </div>

      <div className="LowerDiv">
        <div className="lowerLeft">
        <Charts state={state}/>
        </div>
      </div>
    </>
  );
}

export default App;
