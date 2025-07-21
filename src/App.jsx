import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SignIn from "./Forms/SignIn"
import SignUp from "./Forms/SignUp"
import Clubs from "./components/clubs"
import FindBook from "./components/FindBook"
import Profile from "./components/profile"
import { Routes,Route } from "react-router-dom"
import ClubList from "./clubs/CrateClub"


function App() {

  return (
    <div className="bg-black text-white min-h-screen p-6">
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/clubs/:bookId" element={<Clubs />} />
        <Route path="/clubList" element={<ClubList />} />
        <Route path="/books" element={<FindBook />} />
        <Route path="/profile" element={<Profile />} />
       </Routes>
       {/* <SignIn/> */}
    </div>
  )
}

export default App
