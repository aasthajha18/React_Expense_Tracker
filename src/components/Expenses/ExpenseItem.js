import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import "../UI/Card.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //   const ExpenseDate = new Date(2023, 6, 1);
  //   const Cost = 2465;
  //   const Item = "book";

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          <div>{props.amount}</div>
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
