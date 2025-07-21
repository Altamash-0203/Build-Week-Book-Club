import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="border-2 rounded-2xl shadow-[-6px_7px_17px_1px_rgba(68,_22,_157,_0.70)] m-4 px-4 py-2">
      <div className="flex justify-between items-center text-center text-lg text-gray-300 font-body">
        <img src="/images/club-logo.png" alt="Club Logo" width="100" height="100" />

        <Link to="/" className="hover:underline hover:text-blue-400 transition-all">
          Home
        </Link>

         <Link to="/clubList" className="hover:underline hover:text-blue-400 transition-all">
  Clubs
</Link>

        <Link to="/books" className="hover:underline hover:text-blue-400 transition-all">
          Find Book
        </Link>

        <Link to="/profile" className="hover:underline hover:text-blue-400 transition-all">
        <img
          src="/images/male-user.png"
          alt="User"
          className="w-8 h-8 border rounded-full cursor-pointer"
        />
         </Link>
      </div>
    </div>
  );
}

export default Navbar;
