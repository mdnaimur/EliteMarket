import "./Product.scss";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

export const Product = () => {

const [selectImg,setSelectImg] = useState(0);
const [quantity,setQuantity] = useState(1)
// const {data} = useFetch('/categories')
// console.log(data)

const image = [
         "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHww",
         "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8fDB8fHww",

]

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={image[0]} alt="" onClick={()=>setSelectImg(0)} />
          <img src={image[1]} alt="" onClick={()=>setSelectImg(1)} />
        </div>
        <div className="mainImg">
          <img src={image[selectImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">	&#2547; 960</span>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsa est expedita pariatur sunt impedit reiciendis porro blanditiis quos. Dolores, nostrum modi omnis consequuntur distinctio ab ad eveniet voluptatem. Nostrum! </p>
        <div className="quantity">
              <button onClick={()=>setQuantity((prev)=> prev === 1 ? 1: prev-1)}>-</button>
              {quantity}
              <button onClick={()=>setQuantity((prev)=>prev+1)} >+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
              <BalanceIcon /> ADD TO COMPARE
          </div>
          <div className="item">
               <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
        </div>

        <div className="info">
          <span>Watch: ROLEX</span>
          <span>Product Type: Clock</span>
          <span>Tag: watch,men,Women</span>
        </div>
        <hr />
        <div className="details">
          <span>Description</span>
          <hr />
          <span>Additional Information</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}
