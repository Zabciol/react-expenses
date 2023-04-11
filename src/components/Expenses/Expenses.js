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

    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() == year)

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={year} toExpenses={getSelectedYear} />

            {filteredExpenses.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )}
        </Card>
    )
}

export default Expenses