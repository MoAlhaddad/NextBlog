"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from '@/Assets/assets';
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            {/* Mobile Hamburger Button */}
            <button
                onClick={toggleSidebar}
                className="flex xl:hidden justify-center items-center bg-black p-2 rounded"
            >
                <CiMenuFries className="text-[32px] text-accent" />
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } xl:relative xl:translate-x-0 xl:flex xl:flex-col xl:w-64 xl:shadow-none`}
            >
                {/* Close Button for Mobile */}
                <button
                    onClick={toggleSidebar}
                    className="absolute top-4 right-4 p-2 text-gray-600 hover:text-black xl:hidden"
                >
                    <AiOutlineClose className="text-2xl" />
                </button>

                {/* Sidebar Links */}
                <div className="flex flex-col p-6">
                    <Link
                        href='/admin/addProduct'
                        className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
                        <Image src={assets.add_icon} alt='' width={28} height={28} />
                        <p>Add Blogs</p>
                    </Link>
                    <Link
                        href='/admin/blogList'
                        className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
                        <Image src={assets.blog_icon} alt='' width={28} height={28} />
                        <p>Blog lists</p>
                    </Link>
                    <Link
                        href='/admin/subscriptions'
                        className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
                        <Image src={assets.email_icon} alt='' width={28} height={28} />
                        <p>Subscriptions</p>
                    </Link>
                </div>
            </div>

            {/* Background Overlay for Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40 xl:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
};

export default Sidebar;