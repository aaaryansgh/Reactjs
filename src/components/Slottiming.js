const Slottiming=(props)=>{
    const {timeData}=props; 
    return(
        <div>
            <h3>{timeData.slot_start_time}</h3>
            <p>{timeData.subtitle}</p>
        </div>
    )
}
export default Slottiming;