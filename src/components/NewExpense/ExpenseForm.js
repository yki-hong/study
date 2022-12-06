import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredPrice, setPrice] = useState("");
  const [enteredDate, setDate] = useState("");

  // alternative way by using object (multiple variables with one state)
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredPrice: "",
  //   enteredDate: "",
  // });
  const titleChangeHandler = (event) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    setTitle(event.target.value);
    console.log(event.target.value);
  };

  const priceChangeHandler = (event) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredPrice: event.target.value };
    // });
    setPrice(event.target.value);
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
    setDate(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };
    
    props.onSaveExpenseData(expenseData);
    props.onHideFormAction();
    // console.log(expenseData);
    setTitle("");
    setPrice("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onHideFormAction}>Cancle</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
