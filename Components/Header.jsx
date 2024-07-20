import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { cn } from "@/lib/utils";
import axios from 'axios';


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
   
       <Navbar>
      <NavbarBrand>
       
        <p className="font-bold text-inherit">ACME</p>
     
     
        <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="/admin" >
           
          <Image src={assets.arrow} alt='' />
             
                Admin
                </Button>
        </NavbarItem>
     
      
        
          
      </NavbarContent>
      </NavbarBrand>
    </Navbar>
  )
}

export default Header
