import "./ExpenseItem.css";
function ExpenseItem(props) {
  //   const ExpenseDate = new Date(2023, 6, 1);
  //   const Cost = 2465;
  //   const Item = "book";
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  console.log("aastha", props.date.getFullYear);
  const year = new Date(props.date).getFullYear();
  console.log(props);
  return (
    <div>
      <div className="expense-item">
        <div>
          <div>{month}</div>
          <div>{day}</div>
          <div>{year}</div>
        </div>
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
