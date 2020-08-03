import React, {useState} from "react"

import "./Experience.css"
import { setSyntheticLeadingComments, isTaggedTemplateExpression } from "typescript"

function Experience() {

  const [show, setShow] = useState(-1)

  const handleItem = (item) => {
    console.log("Item: ", item)
    setShow(item)
  }

  return (
    <div className="Experience Container">
      <h1> Experience </h1>
      <div className = "Work">  
      <h3> Where I have worked ?</h3>
      <div> 
        <div className = "ExList"> 
          <div className="List scrolling-wrapper">
            <div className="Item" onClick={()=>{handleItem(1)}}>Middlebury </div> 
            <div className="Item" onClick={()=>{handleItem(2)}}>Team4Tech </div> 
            <div className="Item" onClick={()=>{handleItem(1)}}>Int </div> 
            <div className="Item" onClick={()=>{handleItem(2)}}>Abs </div> 
            <div className="Item" onClick={()=>{handleItem(1)}}>B  </div> 
            <div className="Item" onClick={()=>{handleItem(2)}}>Casdfawsfda </div> 
          </div>
          <div className="Content">
            {show === 1 && <div> Some Middlebury content </div>} 
            {show === 2 && <div> Some Team4Tech content </div> }
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Experience;