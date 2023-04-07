import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {


    const [enteredTittle, setEnteredTittle] = useState('')
    const tittleChangeHandler = (event) => {
        setEnteredTittle(event.target.value)
    }

    const [enteredAmount, setEnteredAmount] = useState('')
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const [enteredDate, setEnteredDate] = useState('')
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();//pomija przeładowanie strony po wysłaniu formularza

        const expenseDate = {
            title: enteredTittle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        //Wysyłamy dane do rodzica:
        props.toNewExpenseComponent(expenseDate);
        console.log('Sent to NewExpense Component')
        //Zerowanie danych w formularzu:
        setEnteredTittle('')
        setEnteredAmount('')
        setEnteredDate('')
    }


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'
                        value={enteredTittle}
                        onChange={tittleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number'
                        min="0.01" step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date'
                        min="2020-01-01" max="2023-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm