import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axiosInstance from "./api/axiosInstance";
import { Outlet, useNavigate } from "react-router";
import authStore from "./store/authStore";
import { Toaster } from "react-hot-toast";

function App() {
  const { setUserAuth, clearAuth } = authStore();
  const navigate = useNavigate();
  useEffect(() => {
    const refreshAccessToken = async () => {
      try {
        const response = await axiosInstance.get("/auth/refresh");
        console.log(response);
        const userData = response.data;
        setUserAuth(
          {
            userId: userData.user._id,
            email: userData.user.email,
            firstName: userData.user.firstName,
            lastName: userData.user.lastName,
          },
          userData.accessToken
        );
      } catch (error) {
        clearAuth();
        navigate("/");
      }
    };
    refreshAccessToken();
  }, []);
  return (
    <>
      <Outlet />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
