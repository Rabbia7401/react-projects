//naming function component same as file name is react  convention
//the function must returned with single parent tag 
import './ExpenseItem.css';
import React ,{useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './card';
function ExpenseItem(props) {
    try{
        const [title,setTitle]=useState(props.title);
          //setTimeout(()=>{
           // setTitle("updated after 5")
          //},798);
        const clickHandler=()=>{
            console.log("button clicked for ",title);
            setTitle("Updated")
        }
        console.log(props)
        return ( 
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
               <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price"> ${props.amount} </div>
            </div >
            <button onClick={clickHandler}>Change Title</button>
            </Card> );
    } catch (e) {
        console.log(e)
    }
}
export default ExpenseItem;