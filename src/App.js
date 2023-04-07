import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: 'Birthday present', amount: 39.99, date: new Date(2023, 3, 16) },
    { title: 'Birthday present', amount: 39.99, date: new Date(2023, 2, 7) },
    { title: 'Birthday present', amount: 39.99, date: new Date(2023, 4, 27) },
    { title: 'Birthday present', amount: 39.99, date: new Date(2023, 8, 30) }
  ];




  return (
    <div className="App">
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
