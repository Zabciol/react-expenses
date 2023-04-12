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

    const [respond, setRespond] = useState('')


    const cancelForm = () => {
        setEnteredTittle('')
        setEnteredAmount('')
        setEnteredDate('')

        props.hideForm()
    }

    const isFilledCorrect = (expenseData) => {
        if (expenseData.title != '' &&
            expenseData.date.toString() != 'Invalid Date' &&
            expenseData.amount != '') {
            console.log("poprawne dane")
            return true;
        }
        else {
            console.log("błędne dane")
            return false
        }
    }


    const submitHandler = (event) => {
        event.preventDefault();//pomija przeładowanie strony po wysłaniu formularza

        const expenseData = {
            title: enteredTittle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        if (isFilledCorrect(expenseData)) {
            //Wysyłamy dane do rodzica:
            props.onSaveExpenseData(expenseData);
            console.log('Sent to NewExpense Component')
            cancelForm()
        }
        else {
            setRespond('Complete form')
        }
        //Zerowanie danych w formularzu:

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
                <div className='new-expense__control'>
                    <div>
                        <h2>{respond}</h2>
                    </div>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={cancelForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm