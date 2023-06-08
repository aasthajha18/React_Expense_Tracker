import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./NewExpenseItem.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const NewExpenseItem = (props) => {
  const [year, setYear] = useState("2020");

  console.log(props);
  const onFilterChangeHandler = (selectedYear) => {
    //console.log(selectedYear);
    setYear(selectedYear);
  };

  const filteredYear = props.expenses.filter((exp) => {
    return exp.date.getFullYear().toString() === year;
  });

  console.log("FilteredYear" + filteredYear);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onTwoWayBinding={year}
          onFilterChange={onFilterChangeHandler}
        />
        {filteredYear.length === 0 ? (
          <p style={{ color: "white" }}>Add the first Item for the Year</p>
        ) : (
          filteredYear.map((expense) => (
            <ExpenseItem
              key={expense.id}
              amount={expense.amount}
              title={expense.title}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};
export default NewExpenseItem;
