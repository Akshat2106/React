import './ExpenseItem.css';
function ExpenseItem(props){
return (
        <div className="expense-item">
        
         <div><h1>{props.title}</h1></div>
        <h4>{props.Location}</h4>
       
        <h4>{props.title}</h4>
        <div className='expense-item__price'>{props.amount}</div>
        
        </div>
       
    )
};
export default ExpenseItem;