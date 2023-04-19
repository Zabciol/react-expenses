import React, { useState } from 'react';
import './CSS/ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function ExpenseItem(props) {

    const deleteSelf = () => {
        props.onRemoveExpense(props.id)
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <FontAwesomeIcon
                    icon={faTrash} size="2xl" beat
                    style={{ color: "#ececec", padding: "0 10 0 0", cursor: 'pointer' }} onClick={deleteSelf} />

            </div>
        </Card>
    )
}

export default ExpenseItem;