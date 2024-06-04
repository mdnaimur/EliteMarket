import './List.scss'

import Card from '../Card/Card'

const List = () => {


  const data = [
    {
        "id": 1,
        "img": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHww",
        "img2": "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3RzfGVufDB8fDB8fHww",
        "title": "Product 1",
        "isNew": true,
        "oldPrice": 29.99,
        "price": 19.99
    },
    {
        "id": 2,
        "img": "https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
        "img2": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
        "title": "Product 2",
        "isNew": false,
        "oldPrice": 49.99,
        "price": 39.99
    },
    {
        "id": 3,
        "img": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fHww",
        "img2": "https://plus.unsplash.com/premium_photo-1676717962720-d9a812c8f8c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3RzfGVufDB8fDB8fHww",
        "title": "Product 3",
        "isNew": true,
        "oldPrice": 14.99,
        "price": 9.99
    },
    {
        "id": 4,
        "img": "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fHww",
        "img2": "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
        "title": "Product 4",
        "isNew": true,
        "oldPrice": 24.99,
        "price": 19.99
    }
]


  return (
    <div className="list">
     {data?.map(item=>(
      <Card item ={item} key ={item.id} />
     ))}
    </div>
  )
}

export default List
