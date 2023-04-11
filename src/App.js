import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const SOME_DATE = [
  { id: 'e1', title: 'Birthday present', amount: 39.99, date: new Date(2023, 3, 16) },
  { id: 'e2', title: 'Birthday present', amount: 39.99, date: new Date(2023, 2, 7) },
  { id: 'e3', title: 'Birthday present', amount: 39.99, date: new Date(2023, 4, 27) },
  { id: 'e4', title: 'Birthday present', amount: 39.99, date: new Date(2023, 8, 30) }
];


function App() {

  const [expenses, setExpenses] = useState(SOME_DATE)
  const saveExpenseData = (newExpenseData) => {

    setExpenses([newExpenseData, ...expenses]);

    const expenseDate = {
      ...newExpenseData
    }

    console.log('Dodano:')
    console.log(expenseDate)
  }


  return (
    <div className="App">
      <NewExpense onSaveExpenseData={saveExpenseData} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
