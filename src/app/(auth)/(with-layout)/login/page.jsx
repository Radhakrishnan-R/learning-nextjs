"use client";
import { useRouter } from "next/navigation";



const Login = () => {
  const router = useRouter();
  function handleClick() {
    console.log("I got Clicked");
    router.forward();
  }
  
  return (
    <>
       <h1>Login</h1>
       <button onClick={handleClick}>Forgot password?</button>
    </>
   
  )
}

export default Login;