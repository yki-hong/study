import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      date: new Date(2021,9,5),
      price: Number((Math.random() * 100).toFixed(1)),
      title: "a",
    },
    {
      date: new Date(2021,10,5),
      price: Number((Math.random() * 100).toFixed(2)),
      title: "b",
    },
    {
      date: new Date(2021,11,5),
      price: Number((Math.random() * 100).toFixed(3)),
      title: "c",
    },
    {
      date: new Date(2020,1,5),
      price: Number((Math.random() * 100).toFixed(4)),
      title: "d",
    },
  ]);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
}
export default App;
