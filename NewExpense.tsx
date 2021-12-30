
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';
function NewExpense(props:any): JSX.Element | undefined
{
    
        const saveEventHandler=(newExpenseItem:any)=>{
           const expenseDate={
               ...newExpenseItem,
               id:"e"+Math.random().toString()
           }
           console.log(expenseDate)
           props.onSaveNewExpense(expenseDate)
           
        }
        // let title="NewExpense()::";
        return (
            <div className="new-expense">
                <NewExpenseForm onSaveNewExpenseItem={saveEventHandler}></NewExpenseForm>
            </div>
        );
    }

export default NewExpense;