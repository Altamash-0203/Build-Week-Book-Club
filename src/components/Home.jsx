import React, { useEffect, useState } from "react";
import { ArrowRight,ArrowLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection,getDocs } from "firebase/firestore";



function Home(){
    const [num,setnum]=useState(5)
    const [top,settop]=useState([])
    const [limit,setlimit]=useState([])
    const [clubs, setClubs] = useState([]);

 useEffect(()=>{
    fetch(`https://www.googleapis.com/books/v1/volumes?q=top+rated+books&maxResults=${num}`)
    .then(res=>res.json())
    .then(data=>settop(data.items))
},[num])

useEffect(()=>{
     setlimit(top.slice(num-5,num))

},[top])


function plus5(){
    if(num>=40) return
    setnum(num+5)
}
function minus5(){
    if(num<=0)return setnum(5)
    setnum(num-5)
}


useEffect(() => {
    async function fetchClubs() {
      const ref = collection(db, "clubs");
      const res = await getDocs(ref);
      const data = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setClubs(data.slice(0, 5)); // show top 5 clubs
    }
    fetchClubs();
  }, []);


    return(
        < div className="mt-10">
     <div className="mt-10">
  <div className="flex font-bold align-center">
    <h3 className="ml-3 mb-5 font-mono text-xl font-extralight">Top Books</h3>
    <ArrowRight className="h-6 w-6 ml-5 mt-1 text-white" />
  </div>

  <div className="flex flex-wrap gap-4 p-5 border-2 cursor-pointer text-1xl align-center justify-between h-auto border-2 rounded-2xl justify-center items-center shadow-[-6px_7px_17px_1px_rgba(68,_22,_157,_0.70)]">
    <ArrowLeft onClick={minus5} className="h-6 w-10 ml-5" />
    
    {limit.map((x) => (
      <div
        key={x.id}
        className="border rounded text-center justify-center items-center flex-1/7 font-Bebas Neue p-5 shadow-indigo-800 hover:shadow-xl transition-shadow duration-300 w-100 h-auto"
      >
        <img
          className="w-50 h-50 mx-auto mb-2"
          src={x.volumeInfo.imageLinks?.smallThumbnail || "/images/club-logo.png"}
          alt={x.volumeInfo.title}
        />
        <p><strong>Title:</strong> {x.volumeInfo.title.length > 10 ? x.volumeInfo.title.slice(0, 10) + "..." : x.volumeInfo.title}</p>
        <Link to={`/clubs/${x.id}`}>
          <button className="mt-2 px-3 py-1 bg-blue-500 rounded text-white">
            Go to Club
          </button>
        </Link>
      </div>
    ))}

    <ArrowRight onClick={plus5} className="cursor-pointer h-6 w-10 ml-5" />
  </div>
</div>

<div className="mt-10">
  <div className="flex font-bold align-center">
    <h3 className="ml-3 mb-5 font-mono text-xl font-extralight">Top Clubs</h3>
    <ArrowRight className="h-6 w-6 ml-5 mt-1 text-white" />
  </div>

  <div className="flex flex-wrap gap-4 p-5 border-2 cursor-pointer text-1xl align-center justify-between h-auto border-2 rounded-2xl justify-center items-center shadow-[-6px_7px_17px_1px_rgba(68,_22,_157,_0.70)]">
    {clubs.length === 0 ? (
      <p className="text-center text-gray-400 w-full">No clubs found.</p>
    ) : (
      clubs.map((club) => (
        <div
          key={club.id}
          className="border rounded text-center justify-center items-center flex-1/7 font-Bebas Neue p-5 shadow-indigo-800 hover:shadow-xl transition-shadow duration-300 w-100 h-auto"
        >
          <img
            className="w-50 h-50 mx-auto mb-2"
            src="/images/club-logo.png"
            alt="Club Logo"
          />
          <p><strong>Name:</strong> {club.name.length > 10 ? club.name.slice(0, 10) + "..." : club.name}</p>
          <p><strong>By:</strong> {club.createdBy}</p>
          <Link to={`/clubs/${club.id}`}>
            <button className="mt-2 px-3 py-1 bg-blue-500 rounded text-white">
              Go to Club
            </button>
          </Link>
        </div>
      ))
    )}
  </div>
</div>
        </div>
    )
}

export default Home