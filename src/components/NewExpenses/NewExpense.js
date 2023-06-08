import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.random() * 1000).toString(),
    };
    console.log(Math.random.toString());
    console.log(enteredExpenseData);

    props.onReceivingExpenseData(expenseData);
  };
  return (
    <div className="new-expense ">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};
export default NewExpense;
