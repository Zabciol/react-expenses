import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {

    const saveExpenseData = (newExpenseData) => {
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
            <ExpenseForm toNewExpenseComponent={saveExpenseData} />
        </div>
    )
}

export default NewExpense;