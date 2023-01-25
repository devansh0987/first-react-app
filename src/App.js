import React, { useState } from 'react'
import './index.css'
import NewExpense from './components/NewExpense/NewExpense'
import './components/Expenses.css'
import Card from './components/Card'
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import ExpensesList from './components/Expenses/ExpensesList'
import ExpensesChart from './components/Expenses/ExpensesChart'

const App = () => {
  const DUMMY_EXPENSES = [
    { id: 'e1', name: 'New Expense 1', date: new Date(2021, 5, 21), amount: 100 },
    { id: 'e2', name: 'New Expense 2', date: new Date(2022, 5, 21), amount: 200 },
  ]
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

 
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}


export default App;