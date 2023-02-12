import React from "react"
import './index.css'
const Menu =({item})=>{
    return(
      <article className="supes">
       {
        item.map((item)=>{
            const{id,title,price,img,desc} = item
            return(
            <article key={id} className="flex-container">
                   <div className="item-image">
                    <img src={img} alt={title} />
                </div>
                <div className="item-info">
                    <div className="info-text">
                        <h4>{title}</h4>
                        <h4 className="price">${price}</h4>
                    </div>
                    <div className="text">
                        <p>{desc}</p>
                    </div>
                </div>
            </article>
            
            )
        })
       }
      </article>
    )
}

export default Menu