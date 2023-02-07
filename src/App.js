import ExpenseItem from './components/ExpenseItem';
function App(){
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'indore'
    },
    { 
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: 'Venkatagiri'
     },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'jaipur'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'kota'
    },
  ];
  return (
  <div>
  <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} dateof={expenses[0].date} Location={expenses[0].location}></ExpenseItem>
  <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} dateof={expenses[1].date} Location={expenses[1].location}></ExpenseItem>
  <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} dateof={expenses[2].date} Location={expenses[2].location}></ExpenseItem>
  <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} dateof={expenses[3].date} Location={expenses[3].location}></ExpenseItem>
  <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} dateof={expenses[4].date} Location={expenses[4].location}></ExpenseItem>
  </div>
  );
}
export default App;
