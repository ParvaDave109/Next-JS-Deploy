import classes from "./MeetDetails.module.css"
function MeetUpDetail(props){
   console.log(props);
   return (
    <div className={classes.colAlignCenter}>
    <img src={props.image} 
    alt={"image"}></img>
    <h1>{props.title}</h1>
    <address>{props.address}</address>
    <p>{props.description}</p>
</div>
   );
}



export default MeetUpDetail;