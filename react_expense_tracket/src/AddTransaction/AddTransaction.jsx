import React, { useState } from "react";
import "./AddTransaction.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTransaction = ({ state, dispatch }) => {
  const [selectedoption, Setselectedoption] = useState("Income");

  const [inputTitle, SetinputTitle] = useState("");

  const [inputAmount, SetinputAmount] = useState("");

  function AddTransactiondetails() {
    if (inputAmount === "" || inputTitle === "") {
      toast.error("Please enter Title & Amount");
      return;
    } else {


      if(selectedoption === "Income"){
        console.log("toast");
        toast.success("💵 Income has been added in recent transaction")
      }else if(selectedoption === "Expense"){
        toast.success("💳 Expense has been added in recent transaction")

      }

      dispatch({
        type: selectedoption,
        amount: inputAmount,
        desc: inputTitle,
      });



      SetinputTitle("");
      SetinputAmount("");
    }
  }

  function changeSelectedoption(e) {
    Setselectedoption(e.target.value);
    // console.log(e.target.value);
  }

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>

      <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="dark"
      />

      <div className="form-group">
        <label>Select Transaction Category:</label>
        <select onChange={changeSelectedoption}>
          <option defaultValue="" disabled>
            Please select an option
          </option>
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter Transaction Title"
          value={inputTitle}
          onChange={(e) => SetinputTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Amount:</label>
        <input
          type="number"
          placeholder="Enter Amount"
          value={inputAmount}
          onChange={(e) => SetinputAmount(e.target.value)}
        />
      </div>

      <button onClick={AddTransactiondetails}>Add</button>
    </div>
  );
};

export default AddTransaction;
