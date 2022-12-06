import "./ExpenseItem.css";
import Card from "../Card/Card";
import ExpenseDate from "./ExpenseDate";
// import {useState} from "react";

function ExpenseItem(props) {
  // const expenseDate = props.date;
  // const [expenseTitle, setTitle] = useState(props.title);

  // let expenseTitle = props.title;
  // const expensePrice = props.price;
  // const clickHandler = () => {
  //   setTitle("updated!");
  //   console.log("clicked!", expenseTitle);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
