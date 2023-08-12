import React from 'react';
import ExpenseDate from './ExspenseDate';
import './ExpenseItem.css';
function ExpenseItem(props){
  
    return(<div className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item_description"><h2>{props.title}</h2></div>
        <div className="expense-item_description"><h2>{props.location}</h2></div>

        <div className="expense-item_price">${props.amount}</div>
        <button onClick={props.onDelete}>Delete</button>
    </div>
   )
      
}
export default ExpenseItem;