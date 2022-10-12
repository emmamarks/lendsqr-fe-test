import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


interface inputValue {
    email: string
}


const Login = () => {
    
    let history = useHistory();


    const [input, setInput] = useState<inputValue>({
        email: ''
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,
		name: string) => {
        const{value} = event.target;

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name]: value
            }
        })
    }
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {

        const registered = {
            email:input.email
        }
        try {
            const response =  axios.post(`${process.env.REACT_APP_BACKEND_URL}`, registered)
            
            //localStorage.setItem('userDetails', response);

            console.log (response)

            history.push('/dashboard')

        } catch (error) {

        }
    }

    return (
        <div>
        <h4>Welcome</h4>
        Enter details to login <br /><br /><br />
        <input type="email" placeholder='Email' value={input.email} 
        onChange={(e) => handleChange(e, "email")}/><br /><br />
        <input type="password" placeholder='Password'/><br /><br />
        <label htmlFor="">FORGOT PASSWORD?</label><br /><br />
        <button onClick = {handleClick}>LOG IN</button>
        </div>
    )     
    
}

export default Login