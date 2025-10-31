import React from "react";

import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router";
import authStore from "@/store/authStore";
import { logout } from "@/api/authRoutes";
import { HashLink } from 'react-router-hash-link';
import toast from "react-hot-toast";


const Header = () => {
  const navigate = useNavigate();
  const { user } = authStore();
  const handleLogout = async () => {
    try {
      const response = await logout();
      const { clearAuth } = authStore.getState();
      clearAuth();
      toast.success("Succesfully logged out")
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="w-full flex justify-between px-8 md:px-36 py-4 items-center">
      <Link to={"/"} className="text-4xl font-bold">
        <span>Resu</span>
        <span className="text-blue-600">Mine</span>
      </Link>
      
      {!user ? (
        <div className="flex gap-x-4">
          <Button onClick={() => navigate("/login")}>Login</Button>
          <Button onClick={() => navigate("/signup")}>Sign Up</Button>
        </div>
      ) : (
        <div className="flex gap-x-4">
          <Button className="my-auto" onClick={handleLogout}>
            Logout
          </Button>
          <div className="bg-green-600 text-center px-5 py-3 rounded-full text-white">
            {user.firstName.slice(0, 1)}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
