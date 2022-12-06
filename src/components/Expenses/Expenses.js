import ExpensesList from "./ExpensesList";
import Card from "../Card/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterExpensesHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterExpenses={filterExpensesHandler}
        filteredYear={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
