"use client"
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import Link from 'next/link';
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

import Nav from "./Nav";

const Header = () => {

    const [email, setEmail] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        const response = await axios.post('/api/email', formData);
        if(response.data.success){
            toast.success(response.data.msg);
            setEmail("")
        }
        else{
            toast.error("Error")
        }
    }

  return (
    <header className="py-8 xl:py-12">
    <div className="container mx-auto flex justify-between items-center">
        
        <Link href="/">
        <h1 className="text-4xl font-semibold">
            Blogger<span className="text-accent">.</span>
        </h1>
       </Link>
       {/* desktop nav */}

       <div className="hidden xl:flex items-center gap-8">

       <Nav />
       <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_9px_#000000'>
                <Image src={assets.arrow} alt='' />
                <Link  href='/admin'>
                Admin
                </Link>
            </button>
       </div>
{/* mobile nav */}
<div className="xl:hidden">
<MobileNav/>

</div>


       </div>
</header>
    
   
  )
}

export default Header
