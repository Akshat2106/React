import './ExpenseItem.css'

const ExpenseAmount=(props) => (
    <div className="expense-item__price">${props.amount}</div>
)

export default ExpenseAmount;