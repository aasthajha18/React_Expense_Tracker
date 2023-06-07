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
        {/* <ExpenseItem
          amount={props.expenses[0].amount}
          title={props.expenses[0].title}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          amount={props.expenses[1].amount}
          title={props.expenses[1].title}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          amount={props.expenses[2].amount}
          title={props.expenses[2].title}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          amount={props.expenses[3].amount}
          title={props.expenses[3].title}
          date={props.expenses[3].date}
        /> */}
      </Card>
    </div>
  );
};
export default NewExpenseItem;
