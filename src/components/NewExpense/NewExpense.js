import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setFormVisibility(true);
  }

  const onHideFormAction = () => {
    setFormVisibility(false);
  }
  if (formVisibility) {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onHideFormAction={onHideFormAction}/>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <form onSubmit={submitHandler}>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </form>
      </div>
    );
  }
};

export default NewExpense;
