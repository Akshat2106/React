import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props){
   
return (
        <div className="expense-item">
       <div><h1>{props.title}</h1></div>
       <div>{props.date.toISOString()}</div>
            <ExpenseDate date={props.date}/>
    <h4>{props.Location}</h4>
    <div className='expense-item__price'>${props.amount}</div>
     </div>
    )
};
export default ExpenseItem;