import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { serverUrl } from "../main";
function Sign() {
  let navigate = useNavigate();
  let [show, setshow] = useState(false);
  let [loading,setLoading] = useState(false)
      let [err,setErr]=useState("")
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      let result = await axios.post(
        `${serverUrl}/api/auth/signup`,
        {
          userName,
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(result);
      setEmail("");
      setPassword("");
      setLoading(false)
      setErr("")
    } catch (error) {
      console.log(error);
       setLoading(false)
       setErr(error?.response?.data?.message)
    }
  };
  return (
    <div className="bg-[#0e0c1f] w-screen h-screen flex items-center justify-center ">
      <div className="w-full max-w-[400px] h-[480px] rounded-xl bg-[#1c1a2b] flex flex-col items-center">
        <div className="mt-10">
          <h1 className="text-[#9463ca] font-bold text-2xl">
            Welcome to chatly
          </h1>
        </div>
        <form
          className="w-[80%] flex flex-col text-white gap-6 mt-5"
          onSubmit={handleSignUp}
        >
          <div className="flex flex-col gap-2">
            <p>Name</p>
            <input
              type="text"
              placeholder="type here"
              className="w-full h-10 rounded-sm px-2 bg-[#0e0c1f] outline-[#9463ca]"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Email</p>
            <input
              type="email"
              placeholder="type here"
              className="w-full h-10 rounded-sm px-2 bg-[#0e0c1f] outline-[#9463ca]"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <p>Password</p>
            <input
              type={`${show ? "text" : "password"}`}
              placeholder="type here"
              className="w-full h-10 rounded-sm px-2 bg-[#0e0c1f] outline-[#9463ca]"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />{" "}
            <span
              className="absolute right-4 bottom-2.5 cursor-pointer"
              onClick={() => setshow((prev) => !prev)}
            >
              {show ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
                  {err && <p className='text-red-500 mt-[30px]'>*{err}</p>}

          <div
            className="text-white flex flex-col items-center gap-5"
            onSubmit={handleSignUp}
          >
            <p>
              Already have account?{" "}
              <span
                className="text-[#9463ca] cursor-pointer"
                onClick={() => navigate("/login")}
              >
                click here
              </span>
            </p>
            <button className="bg-[#0e0c1f] w-[180px] h-[45px] text-white rounded-md" disabled={loading}>
              {loading?"Loading...":"Create Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sign;
