import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate'
import ExpenseAmount from './ExpenseDetails'
import './ExpenseItem.css'

const ExpenseItem=(props)=>{
    const [title,setTitle]=useState(props.title);
  const [expense,setExpense]=useState(props.amount);

    const click = () => {
        setTitle("updated");
        console.log(title);
    };
    const clickUpdate=()=>{
        setExpense("100");
    }
    return (
    
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h2>{props.location}</h2>
                <div>
                <ExpenseAmount amount={props.amount}/>
            </div>
            <button onClick={clickUpdate}>update Expense</button>
            <button onClick={click}>update title</button>

            </div>
        </div>

    )
}
export default ExpenseItem