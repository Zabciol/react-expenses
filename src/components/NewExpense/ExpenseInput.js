import React, { useState } from 'react'

const ExpenseInput = (props) => {

    const [enteredData, setEnteredData] = useState('')
    const ChangeHandler = (event) => {
        setEnteredData(event.target.value)

    }
    props.onSave(props.title.toLowerCase(), enteredData)

    return (
        <div className='new-expense__control'>
            <label>{props.title}</label>
            <input type={props.type}
                onChange={ChangeHandler} />
        </div>
    )
}

export default ExpenseInput