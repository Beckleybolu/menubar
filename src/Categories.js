import React,{useState} from "react"


const Categories =({filterItems, itemCategories})=>{
    return(
     <div className="btn-container">
      {
        itemCategories.map((item)=>{
          return(
            <header>
              <button onClick={()=> filterItems(item)}>{item}</button>
            </header>
          )
        })
      }
     </div>
    )
  
}

export default Categories