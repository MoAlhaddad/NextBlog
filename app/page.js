'use client'
import Header from "@/Components/Header";
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    
        <section className="h-full">
            <ToastContainer theme="dark"/>
            <Header/>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24"></div>

   <BlogList/>
   <Footer />
   
   </div>
   </section>
    
  );
}
