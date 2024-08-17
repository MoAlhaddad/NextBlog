"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const links = [
    { name: 'home', path: "/" },
    { name: 'admin', path: "/admin" },
    { name: 'Add Blog', path: "/admin/addProduct" },
    { name: 'BlogList', path: "/admin/blogList" },
    { name: "Subscriptions", path: "/admin/subscriptions" }
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleMenu} className="flex justify-center items-center bg-black p-2 rounded">
                <CiMenuFries className="text-[32px] text-accent" />
            </button>

            {/* Slide-out Menu */}
            <div
                className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white z-50 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Close Button */}
                <button onClick={toggleMenu} className="absolute top-4 right-4 p-2 text-gray-600 hover:text-black">
                    <AiOutlineClose className="text-2xl" />
                </button>

                {/* Logo */}
                <div className="mt-16 mb-20 text-center text-2xl">
                    <Link href="/" onClick={toggleMenu}>
                        <h1 className="text-4xl font-semibold">
                            Blogger<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${
                                link.path === pathname ? "text-accent border-b-2 border-accent" : ""
                            } text-xl capitalize hover:text-accent transition-all`}
                            onClick={toggleMenu}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Background overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40"
                    onClick={toggleMenu}
                ></div>
            )}
        </div>
    );
};

export default MobileNav;
