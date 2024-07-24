import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { assets } from '@/Assets/assets';
import { Sheet,SheetTrigger,SheetContent } from "../ui/sheet";
import {CiMenuFries} from "react-icons/ci";


const Sidebar = ({ collapsed, setCollapsed }) => {
    // 👇 use the correct icon depending on the state.
    
    return (
      <Sheet>
    <SheetTrigger className="flex justify-center items-center bg-black">
        <CiMenuFries className="text-[32px] text-accent" />
        <p className="text-white">Open</p>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
            
            
            <Link href='/admin/addProduct' className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
                <Image src={assets.add_icon} alt='' width={28}/>
                <p>Add Blogs</p>
            </Link>
            <Link  href='/admin/blogList'className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
                <Image src={assets.blog_icon} alt='' width={28}/>
                <p>Blog lists </p>
            </Link>
            <Link href='/admin/subscriptions'className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
                <Image src={assets.email_icon} alt='' width={28}/>
                <p>Subscriptions</p>
            </Link>
            
            
        </SheetContent>
     
      </Sheet>
    );
  };
  export default Sidebar;