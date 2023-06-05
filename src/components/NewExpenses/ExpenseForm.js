import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
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
  return (
    <form>
      <div className="new-expense__controls">
        <div className=".new-expense__control">
          <label>Title</label>
          <input type="text" onChange={onChangeTitleHandler} />
        </div>

        <div className=".new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            onChange={onChangeAmountHandler}
          />
        </div>

        <div className=".new-expense__control ">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            onChange={onChangeDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
