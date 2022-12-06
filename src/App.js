import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      date: new Date(),
      price: (Math.random() * 100).toFixed(1),
      title: "a",
    },
    {
      date: new Date(),
      price: (Math.random() * 100).toFixed(2),
      title: "b",
    },
    {
      date: new Date(),
      price: (Math.random() * 100).toFixed(3),
      title: "c",
    },
    {
      date: new Date(2020,1,5),
      price: (Math.random() * 100).toFixed(4),
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
