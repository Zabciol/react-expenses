import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {


    const [form, setForm] = useState(false)

    const showForm = () => {
        setForm(true)
    }

    const hideForm = () => {
        setForm(false)
    }

    const saveExpenseData = (newExpenseData) => {
        const expenseDate = {
            ...newExpenseData,
            id: Math.random().toString()
        };
        //Wysyłamy dane do rodzica:
        props.onSaveExpenseData(expenseDate);
        console.log('Sent to App Component')
    };

    return (
        <div className='new-expense'>

            {form === false ?
                (<button onClick={showForm}>Add Expense</button>) :
                (<ExpenseForm
                    onSaveExpenseData={saveExpenseData}
                    hideForm={hideForm}
                />)}

        </div>
    )
}

export default NewExpense;