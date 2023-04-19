import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import "./CSS/Expenses.css"
import Card from '../UI/Card'

const Expenses = (props) => {

    const [year, setYear] = useState('2023')

    const saveSelectedYear = (selectedYear) => {
        console.log(selectedYear)
        setYear(selectedYear)
    }


    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() == year)

    return (
        <Card className='expenses'>
            <ExpensesFilter
                selected={year}
                saveSelectedYear={saveSelectedYear} />

            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} onRemoveExpense={props.onRemoveExpense} />


        </Card>
    )
}

export default Expenses