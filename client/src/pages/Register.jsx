// rafce
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import zxcvbn from "zxcvbn";
import { useForm } from "react-hook-form";
import { register } from "../api/auth";
import useAppStore from "../store/AppStore";

const registerAPI = register;

const registerSchema = z
  .object({
    name: z.string().min(1, { message: "Please enter your name" }), // Added name
    email: z.string().email({ message: "Invalid email!!!" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const Register = () => {

  // Javascript
  const setLoading = useAppStore((state) => state.setLoading);
  
  const [passwordScore, setPasswordScore] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset, 
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const validatePassword = () => {
    let password = watch().password;
    return zxcvbn(password ? password : "").score;
  };
  useEffect(() => {
    setLoading(true);
    setPasswordScore(validatePassword());
    setLoading(false);
  }, [watch("password")]);

  const onSubmit = async (data) => {

    try { 
      // console.log(data);
      const res = await registerAPI(data);
      toast.success(res.data.message);
      reset(); // Clear form after success
    } catch (err) {
      const errMsg = err.response?.data?.message;
      toast.error(errMsg);
      //console.log(err);
    }
  };


  return (
    <div
      className="min-h-screen flex 
    items-center justify-center bg-gray-100"
    >
      <div className="w-full shadow-md bg-white p-8 max-w-md">
        <h1 className="text-2xl text-center my-4 font-bold">Register</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <input
                {...register("name")}
                placeholder="Name"
                className={`border w-full px-3 py-2 rounded
                focus:outline-none focus:ring-2 focus:ring-blue-500
                focus:border-transparent
                ${errors.name && "border-red-500"}`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                {...register("email")}
                placeholder="Email"
                className={`border w-full px-3 py-2 rounded
            focus:outline-none focus:ring-2 focus:ring-blue-500
            focus:border-transparent
            ${errors.email && "border-red-500"}`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("password")}
                placeholder="Password"
                type="password"
                className={`border w-full px-3 py-2 rounded
              focus:outline-none focus:ring-2 focus:ring-blue-500
              focus:border-transparent
              ${errors.password && "border-red-500"}`}
              />

              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
              {watch().password?.length > 0 && (
                <div className="flex mt-2">
                  {Array.from(Array(5).keys()).map((item, index) => (
                    <span className="w-1/5 px-1" key={index}>
                      <div
                        className={`rounded h-2 ${
                          passwordScore <= 2
                            ? "bg-red-500"
                            : passwordScore < 4
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                      ></div>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div>
              <input {...register("confirmPassword")} 
              type="password"
               placeholder="Confirm Password"
              className={`border w-full px-3 py-2 rounded
                focus:outline-none focus:ring-2 focus:ring-blue-500
                focus:border-transparent
                ${errors.confirmPassword && "border-red-500"}`}
                />


              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
              )}
            </div>

            <button 
            className="bg-blue-500 rounded-md
             w-full text-white font-bold py-2 shadow
             hover:bg-blue-700"
            >
              Register
              </button>


          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
