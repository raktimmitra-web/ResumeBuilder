import LoginUserForm from "@/components/forms/LoginUserForm";
import React from "react";

const Login = () => {
  return (
    <div className="w-full h-full px-8">
      <div className="flex max-w-6xl mx-auto rounded-2xl my-24 shadow-2xl">
        <div className="flex-1 hidden md:block w-full p-10">
          <img
            className="h-full rounded-xl"
            src="https://www.loginradius.com/assets/blog/identity/what-is-authentication/what-is-authentication.webp"
            alt="leftSideImage"
          />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center py-12">
          <h1 className="text-2xl font-bold">Login</h1>
          <LoginUserForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
