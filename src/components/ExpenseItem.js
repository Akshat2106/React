import ExpenseDate from './ExpenseDate'
import ExpenseAmount from './ExpenseDetails'
import './ExpenseItem.css'

const ExpenseItem=(props)=>{
    const deleteExpense = () => {
        document.getElementById('delete');
    };
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h2>{props.location}</h2>
                <div>
                <ExpenseAmount amount={props.amount}/>
            </div>
            <button onClick={deleteExpense}>Delete Expense</button>
            </div>
        </div>

    )
}
export default ExpenseItem