import { useEffect, useState } from "react";

import api from "../src/auth/axiosConfigAPI";

const useFetch =(url) => {

  const [data,setData] = useState(null)
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false)

  useEffect(()=>{

    const fetchData = async () =>{
      try {
        setLoading(true)
        const res = await api.get(url);
       //console.log('I am inside useFetch',res)
        setData(res.data)
      }

      catch(e){
        setError(true)
        console.log('Fetching has been occured some error', e)
      }

      finally{
        setLoading(false)
      }
      setLoading(false)
    }

fetchData();

  },[url])

  return {data,loading,error}

}



export default useFetch;
