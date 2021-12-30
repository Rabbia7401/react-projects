
import './NewExpenseForm.css';
import React ,{useState} from 'react';
function NewExpenseForm(props)
{
        const [enteredTitle,setEnteredTitle]=useState('')
        //the first element of returned array always keeps immediate previous state 
        //while an argument passed to usestate always have initial state 
        //second element of returned array always keeps final state because its a function where we pass value.
        const [enteredAmount,setEnteredAmount]=useState('')
        const [enteredDate,setEnteredDate]=useState('')
        // const [userInput,setUserInput]=useState({
        //     enteredTitle:'',
        //     enteredAmount:'',
        //     enteredDate:''
        // })
        const submitHandler=(event)=>{
event.preventDefault();
const expenseData={
    title:enteredTitle,
    amount:enteredAmount,
    date:new Date(enteredDate)

}

props.onSaveNewExpenseItem(expenseData)
setEnteredDate('');
setEnteredTitle('');
setEnteredAmount('');

        }
        const titleChangeHandler=(event)=>{
            console.log("enteredTitle before part",enteredTitle)
            setEnteredTitle(event.target.value)
            console.log("enteredTitle after part",enteredTitle)
    };
        // const amountChangeHandler=(event)=>{
        //     setUserInput({
        //         ...userInput,
        //         enteredAmount:event.target.value
          
        //           });
      
        //       }
        const amountChangeHandler=(event)=>{
            setEnteredAmount(event.target.value)
    };
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
};
            
        return (
            <form>
                  <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type="number" min ="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type="date" min ="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
                </div>
                <div className='new-expense__actions'>
                    <button type="Submit" onClick={submitHandler}>Add Expense</button>
                </div>
            </form>

        );
 
}
export default NewExpenseForm;