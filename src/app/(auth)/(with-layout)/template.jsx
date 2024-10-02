"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function Layout({ children }) {

    const [input, setinput] = useState("");

    const pathname = usePathname();
    console.log(pathname);
    const links = [
        {name:"login", href: "/login"},
        {name:"Register", href: "/register"},
    ]


    return (
     <>
     <input className="border-2 outline-black" value={input} onChange={(e) => setinput(e.target.value)}></input>
     <div className="my-10">
        {links.map(link => (
            <Link key={link.name} className={ `${pathname === link.href && "text-blue-500 " } text-lg mr-5 font-medium `} href={link.href}>{link.name}</Link>
     ))}
     </div>
    
         {children}

         <h2 className="mt-10">Hey this is a layout only for selected routes</h2>
     </>
         
         
        
    )
  }
  