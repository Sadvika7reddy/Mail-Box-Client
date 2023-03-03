import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const SentDetails=()=>{
    const params=useParams();
    const[value,setValue]=useState([]);
    const userEmail=localStorage.getItem('email');
    const user=userEmail.replace('.','e');
    const users=user.replace('@','r')
   
      axios.get(`https://mailbox-31eb0-default-rtdb.firebaseio.com/${users}.json`)
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
    return(
        <div>
          {value.filter(person => person.id===params.productId).map(item=> (
            <li>
               <p>{item.text}</p>
            </li>
            ))}  
        </div>
    )
}
export default SentDetails;