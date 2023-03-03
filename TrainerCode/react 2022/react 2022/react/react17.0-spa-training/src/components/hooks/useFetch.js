// custom hook  : name : useFetch    (data from REST)
import {useState,useEffect} from 'react';

const useFetch = (url=' ',options=null)=>{

     const [data,setData]=useState(null)
     const [error,setError]=useState(null)
     const [loading,setLoading] = useState(false)
     
     useEffect( ()=>{
         setLoading(true)
         fetch(url,options)
                .then(res =>res.json())
                .then (data =>{
                    setData(data)
                    setError(null)
                })
                .catch(error=>{
                    setError(error)
                    setData(null)
                })
                .finally ( ()=>setLoading(false))

                
     },[url,options])
     return {loading,error,data}
};
export default useFetch

