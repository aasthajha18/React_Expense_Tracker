import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const onChangeAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  const onChangeDateHandler = (event) => {
    setDate(event.target.value);
  };
  const onFormSubmitButton = (event) => {
    event.preventDefault();

    const ExpenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    console.log("aastha1" + ExpenseData);
    props.onSaveExpenseData(ExpenseData);
    console.log("aastha1=2" + ExpenseData);
    //Two way binding : setting blank value after the form gets submitted.
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={onFormSubmitButton}>
      <div className="new-expense__controls">
        <div className=".new-expense__control">
          <label>Title</label>
          <input type="text" onChange={onChangeTitleHandler} value={title} />
        </div>

        <div className=".new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={onChangeAmountHandler}
          />
        </div>

        <div className=".new-expense__control ">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={date}
            onChange={onChangeDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
