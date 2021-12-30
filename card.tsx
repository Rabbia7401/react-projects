import './card.css'
function Card(props :any): JSX.Element | undefined 
{
    let title="Card()::"
    try{
        console.log("card",props.className)
        const classes='card '+ props.className;
      return (<div className={classes}>{props.children}</div>);
    }
    catch(e)
    {
        console.log("Error in "+title,e)
    }
}
export default Card;