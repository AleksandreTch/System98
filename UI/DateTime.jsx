import  React, { useState , useEffect } from 'react'
import classes from './DateTime.module.css';

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div className={classes.dateTimeContainer}>
            <p> {date.toLocaleDateString()}</p>
            <p> {date.toLocaleTimeString()}</p>
        </div>
    )
}

export default DateTime