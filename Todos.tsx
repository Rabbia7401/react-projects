import React from 'react';
const Todos: React.FC<{items:string[]}>=(props)=>{
return (
    <ul>
 {props.items.map(items=>{
    return <li>{items}</li>
 })}
    </ul>
 
);
};
export default Todos