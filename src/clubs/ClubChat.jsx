import React, { use, useEffect, useState } from "react";
import { auth,db } from "../firebase";
import { addDoc,collection,onSnapshot,orderBy,query,serverTimestamp } from "firebase/firestore";


function ClubChat({bookId}){
    const [chats,setchats]=useState([])
    const [input,setinput]=useState("")

    useEffect(()=>{
        if(!bookId) return

        const a=query(collection(db,"clubs",bookId,"chats"),orderBy("createdAt"))
        let b=onSnapshot(a,(snapshot)=>{
            setchats(snapshot.docs.map(doc=>doc.data()).filter(chat=>chat.createdAt!==undefined && chat.createdAt!==null))
        })
        return ()=> b()
    },[bookId])


    async function SendChat(){
        if(!input)return
        if(!auth.currentUser)return alert("Need To login send Message")

       try{
            await addDoc(collection(db, "clubs", bookId, "chats"), {
      text: input,
      sender: auth.currentUser.email,
      createdAt: serverTimestamp(),
    });
    setinput("")
    }

catch(err){
  console.log(err)
}
}


    return(
        <div>
            <div>
                {chats.map((x,idx)=>(
                     <p key={idx}><small>{x.sender}:</small>{x.text}</p>
                ))}
            </div>

            <input type="text" value={input} placeholder="Write some text" onChange={e => setinput(e.target.value)}  />
             <button onClick={SendChat}>Send</button>
        </div>
    )
}

export default ClubChat