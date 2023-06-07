import React from "react";
import NewExpenseItem from "./components/Expenses/NewExpenseItem";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  //CHILD TO PARENT PROPS
  const onReceivingExpenseDataHandler = (expectsExpenseDataFromNewExpense) => {
    console.log(expectsExpenseDataFromNewExpense);
  };
  return (
    <div>
      <NewExpense onReceivingExpenseData={onReceivingExpenseDataHandler} />
      <NewExpenseItem expenses={expenses} />
    </div>
  );
};

export default App;
