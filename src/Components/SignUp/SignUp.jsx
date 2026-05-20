import axios from 'axios';
import React from 'react';
import { useState } from 'react';
function SignUp(){
    const[fullname,setfullname]=useState("");
    const[email,setEmail]=useState("");
    const[panCard,setPanCard]=useState("");
    const[number,setNumber]=useState("");
    const[password,setPassword]=useState("");

    async function handleSignUp(){
        try {
            const res= await axios.post("http://localhost:9000/signUP",{
                fullname,
                email,
                panCard,
                number,
                password
            });
            console.log("respanse",res.data);
            
        } catch (error) {
            console.log("error",error.message);
            
        }

    }
    return(
        <>
        <div className='main container'>
            <div className='head1-container'>
                <h1>Open a free demat and trading account online</h1>

            </div>
            <div className='head2-container'>
                <h1>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h1>

            </div>

            <div className='signup-container'>
                <input value={fullname} onChange={(e)=>{setfullname(e.target.value)}} type='text' placeholder='Fullname'></input>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='text' placeholder='Email'></input>
                <input value={panCard} onChange={(e)=>{setPanCard(e.target.value)}} type='text' placeholder='PanCard'></input>
                <input value={number} onChange={(e)=>{setNumber(e.target.value)}}  type="tel" placeholder='Number'></input>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}}  type="password" placeholder='Password'></input>
                <button onClick={handleSignUp}>SIGN UP</button>

            </div>
                

        </div>
        </>
    )
}
export default SignUp;