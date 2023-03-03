import { useEffect,useState } from "react";
import axios from "axios";
const useFetch=(url)=>{
    const[value,setValue]=useState([]);
    useEffect(()=>{
        axios.get(url)
          .then((res)=>{
               const fetch=[];
               for(let key in res.data){
                  fetch.unshift({
                      ...res.data[key],
                      id:key
                  })
               }
               setValue(fetch)
          })
    
       },[url])
    return [value]       
}
export default useFetch;