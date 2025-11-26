import {
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../provider/AuthProvider";
import auth from "../firebase/firebase.config";



const Register = () => {
  const [show, setShow] = useState(false);

  const { registerUserwithPass, user, setUser,handleGoogleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    //console.log(name, email, password);

    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!pwdRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters and include both uppercase and lowercase letters."
      );
      return;
    }

    registerUserwithPass(email, password)
      .then((result) => {
        const user = result.user;
        

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser(user);
            navigate('/');
            console.log(user);
          })
          .catch((error) => {
            console.log(`${error} occured`);
          });
        toast.success("Register Successful");
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/email-already-in-use") {
          toast.error(
            "Duplicate Email Detected. Please use a different email."
          );
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please enter a valid email.");
        } else if (error.code === "auth/weak-password") {
          toast.error("Password too weak. Use at least 6 characters.");
        } else if (error.code === "auth/missing-password") {
          toast.error("Password is required.");
        } else if (error.code === "auth/missing-email") {
          toast.error("Email is required.");
        } else if (error.code === "auth/network-request-failed") {
          toast.error("Network error! Please check your connection.");
        } else if (error.code === "auth/operation-not-allowed") {
          toast.error("Registration is disabled. Contact support.");
        } else if (error.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Try again later.");
        } else {
          toast.error("Unexpected error occurred. Please try again.");
        }

        // ..
      });
  };

  const googleSignup = () => {
    handleGoogleSignIn()
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast.success("Sign in successfull");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <title>Register</title>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col w-full">
          <h1 className="text-5xl font-bold">Register</h1>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Your Name"
                  required
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Photo Url"
                  name="photo"
                  required
                />
                <div className="relative">
                  <label className="label">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-6 top-8 cursor-pointer"
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span>
                </div>

                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
                <button
                  onClick={googleSignup}
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </fieldset>
              <h1 className="text-center text-lg mt-4 text-gray-600">
                Already Registered?{" "}
                <Link
                  to="/auth/login"
                  className="text-blue-600 font-semibold hover:underline hover:text-blue-800 transition"
                >
                  Login
                </Link>{" "}
              </h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
