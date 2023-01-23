import './index.css'
import ExpenseItem from './components/ExpenseItem'
import './components/Expenses.css'
import Card from './components/Card'

const  App = () => {
    const expenses = [
        { id : 'e1' , name : 'New Expense 1' , date : new Date(2021 ,5 ,21) , amount : 100},
        { id : 'e2' , name : 'New Expense 2' , date : new Date(2022 ,5 ,21) , amount : 200},
    ]
    return( 
    <div>
        <h1>Hi there!</h1>
        <Card className='expenses'>
        <ExpenseItem 
          title = { expenses[0].name}
          amount = { expenses[0].amount}
          date = { expenses[0].date}
        />
        <ExpenseItem 
          title = { expenses[1].name}
          amount = { expenses[1].amount}
          date = { expenses[1].date}
        />
        </Card>
    </div>
    );
}

  
  export default App;