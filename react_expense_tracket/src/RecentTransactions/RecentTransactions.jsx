import React, { useEffect, useState } from "react";
import "./RecentTransactions.css";

const RecentTransactions = ({ state, dispatch }) => {


  const [transactionList, SettransactionList] = useState(state.title);

  useEffect(() => {
    SettransactionList(state.title);
  }, [state]);

  function DeleteTransaction(id,amount,deletedtransactiontype){

   let deletedAmount = parseInt(amount)



    const updatedList  =  transactionList.filter((ele)=>{
          if(id !== ele.id){
            return ele;
          }
    })
      SettransactionList(updatedList)
    

      UdpatetheMainList(updatedList,deletedAmount,deletedtransactiontype)


  }

  function UdpatetheMainList(updatedList,deletedAmount,deletedtransactiontype){

    console.log(deletedtransactiontype);


      if(deletedtransactiontype === "Income"){

        dispatch({
          type:"updateList",
          updateddata:updatedList,
          deletedAmount:deletedAmount,
          deletedIncome:deletedtransactiontype,
          deletedExpense:""
          
        })

      }else{


        dispatch({
          type:"updateList",
          updateddata:updatedList,
          deletedAmount:deletedAmount,
          deletedIncome:"",
          deletedExpense:deletedtransactiontype
          
        })

      }

  }

  return (
    <div className="recent-transactions">
      <h2>Recent Transactions</h2>
      <ul>
        {transactionList.map((ele) => {
          // console.log(ele);
          if (ele.transaction === "Income") {
           return(
            <li key={ele.id}>
            <span className="transaction-name">{ele.discription}</span>
         <div className="deletediv">
         <span className="transaction-amount green">{ele.amount}</span>
         <span className="transaction-amount green" title="Delete"  onClick={()=>DeleteTransaction(ele.id,ele.amount,ele.transaction)}>🗑️</span>
         </div>
          </li>
           )
          } else {
            return(
              <li key={ele.id}>
              <span className="transaction-name">{ele.discription }</span>
             <div className="deletediv">
             <span className="transaction-amount red">{ele.amount}</span>
              <span className="transaction-amount red" title="Delete" onClick={()=>DeleteTransaction(ele.id,ele.amount,ele.transaction)}>🗑️</span>
             </div>
            </li>
            )
          }
        })}
      </ul>
    </div>
  );
};

export default RecentTransactions;
