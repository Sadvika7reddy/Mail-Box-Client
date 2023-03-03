import { useState } from 'react';

import axios from "axios";
const About=()=>{
    const [mail,setMail]=useState('')
    const [text,setText]=useState('')
    const [title,setTitle]=useState('')
    const ExecuteEmail=(event)=>{
        event.preventDefault();
        setMail(event.target.value)
    }
    const ExecuteText=(event)=>{
        event.preventDefault();
        setText(event.target.value)
    }
    const ExecuteTitle=(event)=>{
        event.preventDefault();
        setTitle(event.target.value);
    }
    const SubmitHandler=(event)=>{
        event.preventDefault();
        
        
        const user=mail.replace('.','q');
       
        const users=user.replace('@','s')
        const expenceData={
            text:text,
            title:title,
            id:Math.random().toString()
        }
        axios.post(`https://mailbox-31eb0-default-rtdb.firebaseio.com/${users}.json`,expenceData)
        .then((res)=>{
            
        }) 
        const userEmail=localStorage.getItem('email');
    const usere=userEmail.replace('.','e');
    const userse=usere.replace('@','r')
    axios.post(`https://mailbox-31eb0-default-rtdb.firebaseio.com/${userse}.json`,expenceData)          

    }
    
    return(
       
        <form onSubmit={SubmitHandler}>
            <label>to</label>
            <input type='mail' onChange={ExecuteEmail} value={mail}/>
            
            <hr style={{height:'5px'}}/>
            <input type='text' onChange={ExecuteTitle} value={title}/>  
            <hr/> 
            <textarea rows='25'cols='150' onChange={ExecuteText} value={text}/> 
            <hr/>
            <button>Send</button>      
        </form>
        
    )
}
export default About;