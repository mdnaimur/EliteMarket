import './Products.scss'

import List from "../../components/List/List"
import useFetch from '../../../hooks/useFetch'
import { useParams } from "react-router-dom"
import { useState } from "react"

function Products() {

  const catId  = parseInt(useParams().id)
  const [maxPrice,setMaxPrice] = useState(1000)
  const [sort,setSort] = useState(null)

  const {data} = useFetch('/categories')
  console.log(data)

  return (
    <div className="products">
      <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
            {data?.map(item=>(
                 <div className="inputItem" key={item.id}>
                 <input type="checkbox" name="" id="1" value ={1}/>
                 <label htmlFor="1">{item.title}</label>
               </div>

            ))}

          </div>
          <div className="filterItem">
            <h2>Filter By Price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" min={0} max = {1000} onChange={(e)=>setMaxPrice(e.target.value)} />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort By</h2>
            <div className="inputItem">
              <input type="radio" name="price" id="asc" onChange={()=>setSort('asc')} />
              <label htmlFor="asc">Price (Lowest )</label>
            </div>
            <div className="inputItem">
              <input type="radio" name="price" id="desc" onChange={()=>setSort('desc')}/>
              <label htmlFor="desc">Price (Highest )</label>
            </div>
          </div>

      </div>
      <div className="right">
      <img
          className="catImg"
          src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      <List catId ={catId} maxPrice ={maxPrice} sort={sort} />

      </div>
    </div>
  )
}

export default Products
