import React from "react";

import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Label } from "../ui/label";
import { loginSchema } from "@/validation/authSchema";
import { login } from "@/api/authRoutes";
import authStore from "@/store/authStore";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const LoginUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode:"onChange",resolver: yupResolver(loginSchema) });

  const { setUserAuth } = authStore();
  const navigate = useNavigate();
  //login form submit handler
  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      console.log(response.data);
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
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Error during login", {
        duration: 3000,
      });
    }
  };
  return (
    <div className="w-full h-full flex flex-col justify-center px-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <input
              id="email"
              {...register("email")}
              type="email"
              className="border rounded px-3 py-2 text-sm text-gray-700 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Password</Label>
            <input
              id="password"
              {...register("password")}
              type="password"
              className="border rounded px-3 py-2 text-sm text-gray-700 focus:outline-none"
              autocomplete="off"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
        </div>
        <Button type="submit" className="w-full mt-6">
          Login
        </Button>
        <div className="mt-2">
          Don't Have an account ?{" "}
          <span className="text-blue-500 underline">
            <Link to={"/signup"}>Sign Up</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginUserForm;
