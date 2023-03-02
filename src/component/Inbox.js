import {useState} from 'react'
import axios from 'axios';
const Inbox=()=>{
    const[value,setValue]=useState([]);
    const userEmail=localStorage.getItem('email');
    const user=userEmail.replace('.','q');
    const users=user.replace('@','s')
   
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
            <ul>
                {value.map((user)=>(
                    <li>
                        <h1>{user.title}</h1>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Inbox;