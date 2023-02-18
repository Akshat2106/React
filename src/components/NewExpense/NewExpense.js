import React from 'react';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const {isEditing, SetIsEditing}=useState(false);

  const startEditingHandler=()=>{
    SetIsEditing(true);
  }

  const stopEditingHandler=()=>{
    SetIsEditing(false);
  }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && (<ExpenseForm onCancel={stopEditingHandler}/>)}
    </div>
  );
};

export default NewExpense;