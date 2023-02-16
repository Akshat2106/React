import "./App.css";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import ExpenseItem from "./components/ExpenseItem";
const App=()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpensehandler=expense=>{
    console.log('In App.js');
    console.log(expense);

    expense.push({
      id:expense.id,
      title: expense.title,
      amount:expense.amount,
      date: expense.date
    })
  }
  return (
    <div style={{backgroundColor:"greenyellow"}} className='new-expense'>
      <h1>Lets get started!!</h1>
     <ExpenseForm onSaveExpenseData={addExpensehandler} />
      {expenses.map((ele)=>{
      return <ExpenseItem key={ele.id} exptitle={ele.title} expamount={ele.amount} expdate={ele.date}/>
      })}
    </div>
  );
}
export default App;
