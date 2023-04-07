import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {

    const saveExpenseDataHandler = (newExpenseData) => {
        const expenseDate = {
            ...newExpenseData,
            id: Math.random().toString()
        };
        //Wysyłamy dane do rodzica:
        props.toAppComponent(expenseDate);
        console.log('Sent to App Component')
    };

    return (
        <div className='new-expense'>
            <ExpenseForm toNewExpenseComponent={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;