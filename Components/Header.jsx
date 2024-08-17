"use client"
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import Link from 'next/link';
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
    const [email, setEmail] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("email", email);
            const response = await axios.post('/api/email', formData);

            if(response.data.success){
                toast.success(response.data.msg);
                setEmail("");
            } else {
                toast.error("Error");
            }
        } catch (error) {
            toast.error("An unexpected error occurred");
        }
    }

    return (
        <header className="py-4 sm:py-6 lg:py-8 xl:py-12">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                        Blogger<span className="text-accent">.</span>
                    </h1>
                </Link>
                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center gap-4 lg:gap-8">
                    <Nav />
                    <Link href='/admin'>
                        <button className='flex items-center gap-2 font-medium py-2 px-4 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_9px_#000000] hover:shadow-[-5px_5px_7px_#000000] transition-shadow'>
                            <Image src={assets.arrow} alt='Arrow Icon' width={20} height={20} />
                            Admin
                        </button>
                    </Link>
                </div>
                {/* Mobile Navigation */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header;
