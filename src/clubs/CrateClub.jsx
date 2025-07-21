import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection,getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";



function ClubList(){
    const [all,setall]=useState([])

    useEffect(()=>{
        async function FetchClubs() {
            let clubref=collection(db,"clubs")
            let res=await getDocs(clubref)
            let list= res.docs.map(doc=>({
                id:doc.id,
                ...doc.data()
            }))
            setall(list)
        }
        FetchClubs()
    },[])

    return(
        <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📚 All Book Clubs</h2>
      {all.length === 0 ? (
        <p>No clubs found.</p>
      ) : (
        <ul className="space-y-3">
          {all.map(club => (
            <li key={club.id} className="p-3 border rounded bg-gray-100 hover:bg-gray-200">
              <Link to={`/clubs/${club.id}`} className="text-blue-600 font-semibold hover:underline">
                {club.name}
              </Link>
              <p className="text-sm text-gray-600">Created by: {club.createdBy}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    )
}

export default ClubList