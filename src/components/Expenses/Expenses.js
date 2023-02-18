import React from 'react';
import {useState} from 'react';
import ExpensesFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
const Expenses = (props) => {
  const [filteredYear,setFilteredYear]=useState('2020');
  const handleYear= (year)=>{
    setFilteredYear(year);
  }
  const filterExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })

  const handleFilter=(year)=>{
    return year;
  }
   let expenseContent=<p className='expense-item' style={{background:"orange",color:"black"}}>Expense not Found.</p>
  if(filterExpenses.length>0){
    expenseContent=filterExpenses.map((ele)=>{
        return <ExpenseItem key={ele.id} exptitle={ele.title} expamount={ele.amount} expdate={ele.date}/>
      })
  }
  if(filterExpenses.length===1){
    expenseContent=filterExpenses.map((ele)=>{
        return (<>
      <ExpenseItem key={ele.id} exptitle={ele.title} expamount={ele.amount} expdate={ele.date}/>
      <p className='expense-item' style={{background:"green",color:"white"}}>Only single Expense here. Please add more...</p>
        </>
        )
      })
  }
  return (
    
    <div>
    <ExpensesFilter handleFilter={handleFilter} currentYear={filteredYear} selectYear={handleYear} />
    {filterExpenses.map((ele)=>{
     return(
    <Card className="expenses">

      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
       )
     }
       )}

</div>
  );
    };
export default Expenses;