import "./ExpenseDate.css";
function ExpenseDate(props :any)
{
    
    
    try{
        console.log("expenseDate",props.date);
    const month=props.date.toLocaleString('en-US', { month: 'long' })
        const year=props.date.getFullYear();
        const day=props.date.toLocaleString('en-US', { day: '2-digit' })
        return (
                <div className="expense-date">
                    <div className="expense-date__month">{month}</div>
                    <div className="expense-date__year">{year}</div>
                    <div className="expense-date__day">{day}</div>
                </div>
               
               
        )

    }
    catch(e)
    {
        console.log(e)
    }
}
export default ExpenseDate;