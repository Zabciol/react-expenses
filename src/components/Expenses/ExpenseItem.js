import './ExpenseDate.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

    const changeTitle = () => {

        console.log("Kliknieto");
    }



    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'> {props.amount}</div>
            </div>
            <button onClick={changeTitle}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;