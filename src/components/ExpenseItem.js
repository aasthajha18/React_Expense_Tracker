import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  //   const ExpenseDate = new Date(2023, 6, 1);
  //   const Cost = 2465;
  //   const Item = "book";

  return (
    <div>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">
            <div>{props.amount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
