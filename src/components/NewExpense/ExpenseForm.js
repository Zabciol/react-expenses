import React, { useState } from 'react'
import ExpenseInput from './ExpenseInput'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [respond, setRespond] = useState('')
    var isValid

    var expenseData = {
        title: '',
        amount: '',
        date: ''
    }

    const cancelForm = () => {
        props.hideForm()
    }

    const onSaveAll = (name, data) => {
        if (name == 'date') {
            expenseData = {
                ...expenseData,
                date: new Date(data)
            }
        } else {
            expenseData = {
                ...expenseData,
                [name]: data
            }
        }
    }

    const isCorrect = (name) => {
        if (expenseData[name] === '' || expenseData[name].toString() === 'Invalid Date') {
            document.getElementById(name).classList.add('incorrect')
            isValid = false;
        }
        else {
            document.getElementById(name).classList.remove('incorrect')
        }
    }



    const submitHandler = (event) => {
        event.preventDefault();//pomija przeładowanie strony po wysłaniu formularza
        isValid = true

        isCorrect('title');
        isCorrect('amount');
        isCorrect('date');

        if (isValid) {
            props.onSaveExpenseData(expenseData);
            console.log('Sent to NewExpense Component')
            cancelForm()
        }
        else {
            setRespond('Complete form')
        }


    }





    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <ExpenseInput type={'text'} title={'Title'} onSave={onSaveAll} />
                <ExpenseInput type={'number'} title={'Amount'} onSave={onSaveAll} />
                <ExpenseInput type={'date'} title={'Date'} onSave={onSaveAll} />
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