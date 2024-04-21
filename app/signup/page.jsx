import React from "react";
import Link from "next/link";
import Image from "next/image";
import Google from "@/public/google.png";
import Rightimg from "@/public/logistics.svg"

function Signup() {
  return (
    <>
      <div className="md:grid grid-cols-6 items-center ">
        <div className="text-cente p-4 m-3 col-span-3">
          <div className="signSec md:w-[70%] mx-auto border border-[#343547] shadow-md shadow-[#0d1016] rounded-md py-3 pb-6 px-2">
            <div className="py-5">
              <h1 className="text-4xl font-bold">Sign Up</h1>
            </div>
            <h1 className="flex gap-1">
              <p className="text-gray-300">Already have an account?</p>{" "}
              <Link className="text-blue-500 font-semibold" href={"/login"}>
                Click to Log in
              </Link>
            </h1>
            <div className="glogin ">
              <Link
                href={"#"}
                className="flex my-3  hover:bg-blue-500 hover:text-white  border-[#343547]  p-2 border"
              >
                <div className="w-[70%] flex mx-auto ">
                  <div>
                    <Image
                      className="mx-auto"
                      src={Google}
                      width={40}
                      height={40}
                    ></Image>
                  </div>
                  <div className="text-sm font-semibold">
                    <p>SIGN UP WITH GOOGLE</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-12 items-center gap-3">
              <p className="border-t border-[#343547]  col-span-5"></p>
              <p className="col-span-1 text-center">
                <b>OR</b>
              </p>
              <p className="border-t border-[#343547]  col-span-6"></p>
            </div>

            <form action="#" method="post" className="signupForm">
              <div className="input-field my-3">
                <input
                  type="text"
                  placeholder="Name*"
                  className=" w-full rounded-sm text-gray-300 py-2 px-3 bg-[#222832]  outline-none hover:border-black"
                  name="name"
                  id="name"
                />
              </div>
           
              <div className="input-field my-3">
                <input
                  type="email"
                  placeholder=" Email*"
                  className=" w-full p-3 rounded-sm text-gray-300 py-2 px-3 bg-[#222832]  outline-none hover:border-black"
                  name="name"
                  id="name"
                />
              </div>
              <div className="input-field my-3">
                <input
                  type="text"
                  placeholder="Address *"
                  className=" w-full p-3 rounded-sm text-gray-300 py-2 px-3 bg-[#222832]   outline-none hover:border-black"
                  name="name"
                  id="name"
                />
              </div>


              <div className="input-field my-3">
                <input
                  type="password"
                  placeholder="Password*"
                  className=" w-full p-3 rounded-sm text-gray-300 py-2 px-3 bg-[#222832] outline-none hover:border-black"
                  name="name"
                  id="name"
                />
              </div>

              <div className="input-field">
              <input
                  type="submit"
                  className="bg-blue-700 cursor-pointer w-full text-white py-2  rounded-sm shadow-md  hover:bg-blue-800 hover:border-blue-800"
                  value={"SIGN UP "}
                />
              </div>
            </form>
            <small className="p-2 my-3">
              <p> By signing up, you’re agreeing with UserGuiding’s</p>
              <Link className="text-blue-400" href={"#"}>
           
                Terms and Conditions Agreement and Privacy Policy.
              </Link>

              <small>©2023 All Rights Reserved.</small>
            </small>
          </div>
        </div>
        <div className="right col-span-3 ">
     <Image src={Rightimg} className="w-[70%] rounded-lg mx-auto h-full" ></Image>
        </div>
      </div>
    </>
  );
}

export default Signup;
