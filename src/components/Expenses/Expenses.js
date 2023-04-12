import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import "./CSS/Expenses.css"
import Card from '../UI/Card'

const Expenses = (props) => {

    const [year, setYear] = useState('2023')

    const saveSelectedYear = (selectedYear) => {
        console.log(selectedYear)
        setYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() == year)

    return (
        <Card className='expenses'>
            <ExpensesFilter
                selected={year}
                saveSelectedYear={saveSelectedYear} />

            <ExpensesList items={filteredExpenses} />


        </Card>
    )
}

export default Expenses