import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpenseFilter'
import "./Expenses.css"
import Card from '../UI/Card'

const Expenses = (props) => {

    const [year, setYear] = useState('2023')

    const getSelectedYear = (selectedYear) => {
        console.log(selectedYear)
        setYear(selectedYear)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={year} toExpenses={getSelectedYear} />
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}>
            </ExpenseItem>
        </Card>
    )
}

export default Expenses