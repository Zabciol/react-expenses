import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./CSS/ExpensesList.css"

const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return (<h2 className='expenses-list__fallback'>No results</h2>)
    }


    return (
        <ul className='expenses-list'>
            {props.items.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    id={expense.id}
                    onRemoveExpense={props.onRemoveExpense}
                />
            )}
        </ul>
    )
}

export default ExpensesList