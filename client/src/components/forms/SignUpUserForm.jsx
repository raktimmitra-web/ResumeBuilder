import React from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Label } from "../ui/label";
import { signUpSchema } from "@/validation/authSchema";
import { signUp } from "@/api/authRoutes";
import authStore from "@/store/authStore";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";

const SignUpUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode:"onChange",resolver: yupResolver(signUpSchema) });

  const { setUserAuth } = authStore();
  const navigate = useNavigate();
  //Sign up form submit handler
  const onSubmit = async (data) => {
    try {
      const response = await signUp(data);
      const userData = response.data;
      setUserAuth(
        {
          userId: userData.newUser._id,
          email: userData.newUser.email,
          firstName: userData.newUser.firstName,
          lastName: userData.newUser.lastName,
        },
        userData.accessToken
      );
      navigate("/");
      toast.success("User Signed In", {
        duration: 4000,
      });
    } catch (error) {
      toast.error("Error during Sign In", {
        duration: 4000,
      });
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center px-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="firstName">First Name</Label>
            <input
              id="firstName"
              {...register("firstName")}
              type="text"
              className="border rounded px-3 py-2 text-sm text-gray-700 focus:outline-none"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="lastName">Last Name</Label>
            <input
              id="lastName"
              {...register("lastName")}
              type="text"
              className="border rounded px-3 py-2 text-sm text-gray-700 focus:outline-none"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
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
              autocomplete="off"
              className="border rounded px-3 py-2 text-sm text-gray-700 focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
        </div>

        <Button type="submit" className="w-full mt-6">
          Sign Up
        </Button>
        <div className="mt-2">
          Already Have an account ?{" "}
          <span className="text-blue-500 underline">
            <Link to={"/login"}>Login</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUpUserForm;
