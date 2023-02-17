import './ExpenseItem.css'
import React from 'react'

const ExpenseDetail=(props)=> {
  return (
    <>
      <div className="expense-item__description">
          <h2>{props.exptitle}</h2>
          <div className="expense-item__price">${props.expamount}</div>
        </div>
    </>
  )
}
export default ExpenseDetail