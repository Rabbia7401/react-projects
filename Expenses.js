import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from './card';
// import React,{useState} from 'react';
const Expenses=(props)=> {
        let filteredArray=[];
        filteredArray=props.items;
        const selectedYear=(year)=>{
            filteredArray=[];
            for(let i=0;i<props.items.length;i++){  
                console.log(props.items[i].date.getFullYear()===year);
            if( props.items[i].date.getFullYear()===year)
            { 
                filteredArray.push({
                    title:props.items[i].title,
                    amount:props.items[i].amount,
                    date:props.items[i].date
                });
            }
        }
       
        
    };
    return (
        <div>   
      <Card className="expenses">
      <ExpensesFilter  onSelection={selectedYear}> </ExpensesFilter>
      {filteredArray.map((obj)=>{
         return(  <ExpenseItem
           title={obj.title}
           amount={obj.amount}
           date={obj.date}
          />
         )

      })}
     
       
    
        
        
        
      </Card>
     
      </div>
    );
   
  }
  export default Expenses;