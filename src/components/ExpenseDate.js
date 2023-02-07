import './ExpenseItem.css';

function ExpenseDate(props){
    const month= props.dateof.toLocalString('en-US', {month:'long'});
    const day= props.dateof.toLocalString('en-US',{day:'2-digit'});
     const year= props.dateof.getFullYear();
return (
    <div className='expense-item__description'>
    <div><h1>{month}</h1></div>
    <div><h1>{day}</h1></div>
    <div><h1>{year}</h1></div>  
    </div>
);
}
export default ExpenseDate;