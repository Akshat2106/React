import './ExpenseItem.css';
function ExpenseItem(){
    const expenseDate= new Date(2023,2,6);
    const LocationOfExpenditure= 'jaipur';
    return(
        <div className="expense-item">
            <div><h1>Expense Items</h1></div>
        <div className="expense-item__descriptio">
        Food Rs 10
     <br></br>
        Petrol Rs 100
<br></br>
Movies Rs 200
<div>{LocationOfExpenditure}</div>
        </div>
        </div>
    )
};

export default ExpenseItem;