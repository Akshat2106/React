import { useState } from 'react'


const ExpenseForm=()=>{
      //All the states to update the title ,amount and date
      const [enteredtitle, setEnteredtitle] = useState('');
      const [enteredamount, setEnteredAmount] = useState('');
      const [entereddate, setEnteredDate] = useState('');
  
      //handle functions 
      const titleChangeHandler = (e) => {
          console.log(enteredtitle);
          setEnteredtitle(e.target.value);
      }
      const amountChangedHandler = (e) => {
          console.log(enteredamount);
          setEnteredAmount(e.target.value);
      }
      const dateChangedHandler = (e) => {
          console.log(entereddate);
          setEnteredDate(e.target.value);
      }
     
     
    return( <form>
        <div className="new-expense__control">
            <div className="new-expense__control"></div>
            <label>Title</label>
            <input type='text' onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <div className="new-expense__control"></div>
            <label>Amount</label>
            <input type='number' min="0.01" step="0.01" onChange={amountChangedHandler}/>
        </div>
        <div className="new-expense__control">
            <div className="new-expense__control"></div>
            <label>Date</label>
            <input type='date' min="2019-01-01" max="2022-12-31" onChange={ dateChangedHandler}/>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>

        </div>
    </form>
    )
};


export default ExpenseForm;