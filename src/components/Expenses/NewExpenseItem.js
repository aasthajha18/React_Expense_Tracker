import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./NewExpenseItem.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const NewExpenseItem = (props) => {
  const [year, setYear] = useState("2020");

  const onFilterChangeHandler = (selectedYear) => {
    //console.log(selectedYear);
    setYear(selectedYear);
  };
  console.log(props);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onTwoWayBinding={year}
          onFilterChange={onFilterChangeHandler}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            amount={expense.amount}
            title={expense.title}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default NewExpenseItem;
