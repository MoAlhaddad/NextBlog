import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogItem from './BlogItem'
import {Tabs, Tab, Button} from "@nextui-org/react";


const BlogList = () => {
    const [menu, setMenu] = useState("All");
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async() => {
        const response = await axios.get('/api/blog');
        setBlogs(response.data.blogs);
        console.log(response.data.blogs);
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

  return (
   <div className="gap-4 grid grid-cols-4 sm:grid-cols-6">
      <div>
      <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
<Tab>

<Button onClick={()=> setMenu('All')} >All</Button>
</Tab>
<Tab>
   <Button onClick={()=> setMenu('Technology')} >Technology</Button>
   </Tab>
     
    </Tabs>
    </div>
      </div>
      
      
        {blogs.filter((item) => menu==='All'? true: item.category===menu).map((item, index) => {
            return     <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
        })}
     
    </div>
    
  )
}

export default BlogList
