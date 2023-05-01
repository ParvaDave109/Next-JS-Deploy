import styles from "../meetups/MeetUpDetail.module.css";
const MeetUpDetail=(props)=>{
   console.log(props);
   return (
    <div className={styles.colAlignCenter}>
    <img src={props.image} 
    alt={"image"}></img>
    <h1>{props.title}</h1>
    <address>{props.address}</address>
    <p>{props.description}</p>
</div>
   );
}



export default MeetUpDetail;