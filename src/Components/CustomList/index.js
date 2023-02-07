//CustomList
import React from "react"

function CustomList(props){
    return(
        <ul>
          {
            props.listItems.map((item, index)=>{
              return <li key={index}>{item}</li>
            })
          }
        </ul>
    )
}

export default CustomList