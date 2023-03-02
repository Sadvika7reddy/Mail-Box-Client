import {useState} from 'react'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { formAction } from './store/context';
import axios from 'axios';
const Inbox=()=>{
    const[value,setValue]=useState([]);
    const userLoggin=useSelector(state=>state.for.isForm)
    const dispatch=useDispatch();
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
      const changeHandler=(id)=>{

        dispatch(formAction.close(id))

      }
      const deleteHandler=async (id)=>{
        const userEmail=localStorage.getItem('email');
        const user=userEmail.replace('.','q');
        const users=user.replace('@','s')
        
      let res=await axios.delete(`https://mailbox-31eb0-default-rtdb.firebaseio.com/${users}/${id}.json`) 
    }

    return( 
        <div>
            <ul>
                {value.map((user)=>(
                    <li>
                        <h2>
                        {userLoggin&&<p>w</p>}
                            <Link to={`/inbox/${user.id}`}>
                                <button onClick={()=>changeHandler(user.id)}>{user.title}</button>
                                </Link></h2>
                                <button type='submit' style={{background: "Tomato"}} onClick={()=>{deleteHandler(user.id)}}>Delete</button>
        
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Inbox;