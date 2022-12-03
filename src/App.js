import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const expenses = [
  { date: new Date(), price: (Math.random() * 100).toFixed(2), title: "abcd1" },
  { date: new Date(), price: (Math.random() * 100).toFixed(2), title: "abcd2" },
  { date: new Date(), price: (Math.random() * 100).toFixed(2), title: "abcd3" },
  { date: new Date(), price: (Math.random() * 100).toFixed(2), title: "abcd4" },
];
function App() {
  return (
    <div>
      <NewExpense/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}
export default App;
