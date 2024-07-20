import { blog_data, assets } from '@/Assets/assets'
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import Link from 'next/link'
import React from 'react'

const BlogItem = ({title, description, image, category, id }) => {
  return (
    <div >
       <Card shadow="md"  isPressable onPress={() => console.log("item pressed")}>
        <CardHeader>{title}</CardHeader>
      <CardBody  height={240}
              width={180}>
     <Link href={`/blogs/${id}`}>
     <Image
              shadow="sm"
              radius="sm"
              height={240}
              width={240}
              alt={title}
              className="w-full object-cover h-[140px]"
              src={image}
            />
      </Link>
    

     </CardBody>
    
   
    </Card>
  
    </div>
   
  
  )
}

export default BlogItem
