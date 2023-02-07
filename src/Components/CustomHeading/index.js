//CustomHeading
import React from "react"

function CustomHeading(props){
    return(
        <h1 className={props.customClasses.join(" ")}>{props.text}</h1>
    )
}

export default CustomHeading