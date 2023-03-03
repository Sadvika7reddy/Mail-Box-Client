import {useState} from 'react'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { formAction } from './store/context';
import axios from 'axios';
import useFetch from './useFetch';
const Sent=()=>{
    
    const userLoggin=useSelector(state=>state.for.isForm)
    const dispatch=useDispatch();
    const userEmail=localStorage.getItem('email');
    const user=userEmail.replace('.','e');
    const users=user.replace('@','r')
   const [value]=useFetch(`https://mailbox-31eb0-default-rtdb.firebaseio.com/${users}.json`)
      
      const changeHandler=(id)=>{

        dispatch(formAction.close(id))

      }
      const deleteHandler=async (id)=>{
        const userEmail=localStorage.getItem('email');
        const user=userEmail.replace('.','e');
        const users=user.replace('@','r')
        
      let res=await axios.delete(`https://mailbox-31eb0-default-rtdb.firebaseio.com/${users}/${id}.json`) 
      
    }

    return( 
        <div>
            <ul>
                {value.map((user)=>(
                    <li>
                        <h2>
                        {userLoggin&&<p>w</p>}
                            <Link to={`/sent/${user.id}`}>
                                <button onClick={()=>changeHandler(user.id)}>{user.title}</button>
                                </Link></h2>
                                <button type='submit' style={{background: "Tomato"}} onClick={()=>{deleteHandler(user.id)}}>X</button>
        
                    </li>
                ))}
            </ul> 
        </div>
    )
}
export default Sent;