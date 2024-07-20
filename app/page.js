'use client'
import Header from "@/Components/Header";
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Sidebar } from "@/Components/sidebar";
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <>
    <NextUIProvider>
    <main className="dark text-foreground bg-background">
    <ToastContainer theme="dark"/>
    <Header/>
   <BlogList/>
   <Sidebar/>
   <Footer />
   </main>
   </NextUIProvider>
    </>
  );
}
