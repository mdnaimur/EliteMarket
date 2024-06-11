import "./FeaturedProducts.scss";

import { useEffect, useState } from "react";

import axios from "axios";
import PropTypes from 'prop-types';
import useFetch from "../../../hooks/useFetch";
import Card from '../Card/Card';

const FeaturedProducts = ({ type } ) => {
  const [products,setProducts] = useState([])

  const {data } = useFetch('/products')

  // console.log('i am useFetch Hook data', products)



  useEffect (()=>{

    const fetchData = async()=>{
        try {

          // const apiUrl = import.meta.env.VITE_API_URL
          //console.log('API URL:', apiUrl);

          // const res = await fetch(`${import.meta.env.VITE_API_URL}/products`)
          // if(!res.ok){
          //   throw new Error('Network response was not working')
          // }
          //  const apiToken = import.meta.env.VITE_API_TOKEN;

          // console.log('API URL:', apiUrl);
          // console.log('API Token:', apiToken);

          const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`,{
           headers:{
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
           }
          })

         //const result = await res.json()
          //console.log('Full response:', result);
          setProducts(res.data)
          // console.log('i am your data',res.data)

        }
        catch (error) {
          console.log('Error to fetching data ',error)

        }
    };
    fetchData()
  },[])

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:8000/api/v1/products/');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Fetch error:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, []); // Add an empty dependency array to run the effect only once

  // useEffect(() => {
  //   console.log('This is Product Data', products);
  // }, [products]); // Log products whenever it changes



  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> {type} Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatum at unde, laborum, ex eligendi ut inventore animi aliquam odio ipsam deleniti laudantium facere, totam impedit excepturi ipsa sit nihil.</p>
      </div>
      <div className="bottom">
        {data?.map((item)=> <Card item={item} key= {item.id} /> )}
      </div>
    </div>
  )
}


FeaturedProducts.propTypes = {
  type: PropTypes.object.isRequired
};


export default FeaturedProducts;
