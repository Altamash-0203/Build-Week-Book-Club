import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc,getDoc,setDoc } from "firebase/firestore";
import { auth,db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import ClubChat from "../clubs/ClubChat";




function Clubs(){
     
    const {bookId}=useParams()
    const [clubdata,setclubdata]=useState(null)
    const [user,setuser]=useState(null)
    const [show,setshow]=useState(false)
    const [cname,setcname]=useState(bookId)
      //  console.log(bookId)

    useEffect(()=>{
         let z=onAuthStateChanged(auth,curr=>{
        setuser(curr)
    })
       return ()=>z()
    },[])

useEffect(()=>{
  
    if(!user || !bookId) return
   
    async function checkClub(){
        let ref =doc(db,"clubs",bookId)
        let res=await getDoc(ref)

        if(res.exists()){
          setclubdata(res.data())
        }
        else {
            setshow(true)
        }
    }
    checkClub()
},[bookId,user])

async function CreateClub(e) {
    
    e.preventDefault();
    const ref = doc(db, "clubs", bookId);
    const newClub = {
      name: cname,
      createdBy: user.uid,
      members: [user.email],
    };
    await setDoc(ref, newClub);
    setclubdata(newClub);
    setshow(false);
}
if (!user) return <p>Checking login...</p>;
if (!clubdata && !show) return <p>Loading club...</p>;


    return(
        <div>
      {show ? (
        <form
          onSubmit={CreateClub}
          className="p-4 border rounded max-w-md mx-auto bg-gray-800 text-white"
        >
          <h2 className="text-xl mb-4">Create Club for this Book</h2>
          <label className="block mb-2">
            Club Name:
            <input
              type="text"
              value={cname}
              onChange={(e) => setcname(e.target.value)}
              className="w-full p-2 mt-1 text-black"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 mt-4 rounded hover:bg-blue-600"
          >
            Create Club
          </button>
        </form>
      ) : (
        <>
          <h1 className="text-2xl font-bold">{clubdata.name}</h1>
          <ClubChat bookId={bookId} />
        </>
      )}
    </div>
    )
}

export default Clubs