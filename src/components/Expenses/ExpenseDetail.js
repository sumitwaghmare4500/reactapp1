import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import { useState } from "react";
function ExpenseDetail(){
const [expenses,setExpenses]=useState( [
  {
    id:1,
  title:'Gift',
  location:'Delhi',
  amount:70,
  date:new Date(2021,7,19),
  },
  {
    id:2,
  title:'Car Rent',
  location:'Jaipur',
  amount:50,
  date:new Date(2023,7,19),
  },
  {
    id:3,
  title:'Food',
  location:'Kolkata',
  amount:10,
  date:new Date(2022,5,10),
  },
  {
    id:4,
  title:'Car Insurance',
  location:'Mumbai',
  amount:90,
  date:new Date(2022,6,16),
  },
])
const deleteExpenseHandler = (expenseId) => {
  setExpenses(prevExpenses => prevExpenses.filter(e => e.id !== expenseId));
};
 
      return(
        <Card className='expense-item'>
        <h2>Let's get strated</h2>
      
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          location={expense.location}
          title={expense.title}
          amount={expense.amount}
          onDelete={() => deleteExpenseHandler(expense.id)}
        />
      ))}
   
     
      </Card>
      )
}
export default ExpenseDetail;