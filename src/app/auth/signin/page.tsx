
"use client";
import React, {useState} from 'react';
import {signIn} from "next-auth/react";
import { encode as base64_encode } from "base-64";
import { useRouter } from 'next/navigation';

const Signin = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isRecover, setIsRecover] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");



  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });


  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    console.log({userInfo})
    const res = await signIn("credentials", {
      email: userInfo.email,
      password: base64_encode(base64_encode(base64_encode(userInfo.password))),
      redirect: false,
    });
    if (res.ok && res.error === null) {
      setIsInvalid(false);
      router.replace("/");
    } else {
      setIsInvalid(true);
      setIsLoading(false);
    }
    console.log({res})
  };


  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',height:'100vh'}}>
      <form  onSubmit={handleEmailSubmit}>
        <input value={userInfo.email}
               onChange={({ target }) =>
                 setUserInfo({ ...userInfo, email: target.value })
               }  type="email" name="email" id="email" placeholder={'Enter your Email'}/>

        <input  value={userInfo.password}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, password: target.value })
                } type="password" name="password" id="" placeholder={'Enter Password'}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signin;