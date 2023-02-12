import React,{useState} from "react"
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";
import './index.css'

function App() {
const newArray = ['all',...new Set(data.map((arrItem)=>arrItem.category))]

  const filterItems = (category)=>{
    if(category === 'all'){
     return setItems(data)
    }
  const filteredItems = data.filter((newItem)=>newItem.category === category)
  setItems(filteredItems);
  }
   
   
  
  const [item,setItems] = useState(data)
  const [itemCategories,setItemCategories] = useState(newArray)
  return(
    <main>
      <div className="main-container">
      <header>
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </header>
      <section className="components">
       <Categories filterItems={filterItems} itemCategories={itemCategories}/>
        <Menu item={item}/>
      </section>
      </div>
     
    </main>
  )
 
}

export default App;
