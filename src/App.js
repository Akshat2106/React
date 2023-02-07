import ExpenseItem from './components/ExpenseItem';

function App(){
  const expenses=[
    {title:'car insurence', amount : 454545, LocationOfExpenditure:'jaipur'},
    {title:'food', amount:6325,  LocationOfExpenditure:'indore'},
    {title:'entertainment', amount: 5442, LocationOfExpenditure:'jaisalmer'},
    {title:'travelling', amount:25635,LocationOfExpenditure:'kota'},
    {title:'rent', amount:12154,  LocationOfExpenditure:'bundi'}
  ];
  return (
  <div>
    <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} Location={expenses[0].LocationOfExpenditure}></ExpenseItem>
  <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} Location={expenses[1].LocationOfExpenditure}></ExpenseItem>
  <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} Location={expenses[2].LocationOfExpenditure}></ExpenseItem>
  <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} Location={expenses[3].LocationOfExpenditure}></ExpenseItem>
  <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date} Location={expenses[4].LocationOfExpenditure}></ExpenseItem>
    

     </div>
  );
}
  

export default App;
