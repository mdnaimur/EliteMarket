import './Cart.scss';

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

  const data = [
    {
      "id": 1,
      "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      "img2": "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      "title": "Product 1",
      "isNew": true,
      "oldPrice": 29.99,
      "price": 19.99,
      "desc":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, sint molestias laborum et magni reprehenderit voluptate ut, laboriosam quae accusantium repudiandae similique consectetur molestiae at architecto nostrum delectus aliquid praesentium!"
  },
  {
      "id": 2,
      "img": "https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      "img2": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
      "title": "Product 2",
      "isNew": false,
      "oldPrice": 49.99,
      "price": 39.99,
      "desc":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, sint molestias laborum et magni reprehenderit voluptate ut, laboriosam quae accusantium repudiandae similique consectetur molestiae at architecto nostrum delectus aliquid praesentium!"
  },
  ]

  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item)=>(
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
          <h1>{item.title}</h1>
          <p>{item.desc?.substring(0,100)}</p>
          <div className="price"> 1*{item.price} </div>
          </div>
          <DeleteOutlinedIcon className='delete'/>
        </div>

      ))}
    <div className="total">
      <span>subtotal</span>
      <span>600/-</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart
