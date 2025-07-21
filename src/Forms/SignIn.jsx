import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";


function SignIn(){
    const [mail,setmail]=useState("")
    const [pass,setpass]=useState("")
    const navigate=useNavigate()

    async function CheckSignin(){
       try{
        await signInWithEmailAndPassword(auth,mail,pass)
        navigate('/')
       }
       catch(err){
        alert(err.message)
       }
    }

    return(
        <div className="" >
            <div className=" h-screen flex flex-col justify-center items-center text-center gap-10 ">
               <div className="border rounded-2xl flex flex-col justify-center items-center text-center gap-10 p-20  shadow-xl shadow-cyan-500/50 ...">
                 <h3 className="font-mono text-3xl">SIGN-IN</h3>
                <input className="border rounded text-center w-80" type="text" placeholder="Enter Your Email"   onChange={(e) => setmail(e.target.value)} />
                <input className="border rounded text-center w-80" type="text" placeholder="Enter Your Password"   onChange={(e) => setpass(e.target.value)}/>
                <button onClick={CheckSignin} className="border w-40 rounded-2xl font-mono bg-white text-black shadow-lg shadow-cyan-500/50">SIGN-IN</button>
                <p>I Don't have  Account? <small className="underline" onClick={()=>navigate("/signup")}> Sign Up</small></p>
               </div>
            </div>
        </div>
    )
}
export default SignIn