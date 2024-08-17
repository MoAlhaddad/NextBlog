import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";

const LoadDB  = async () => {
    await ConnectDB();
}

LoadDB();

// API endpoint for getting all Blogs 
export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get("id");

    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);
    } else {
        const blogs = await BlogModel.find({});
        return NextResponse.json({ blogs });
    }
}

// API Endpoint for uploading blogs 
export async function POST(request) {
  try {
    const formData = await request.formData();

    const blogData = {
      title: formData.get('title'),
      description: formData.get('description'),
      category: formData.get('category'),
      author: formData.get('author'),
      image: formData.get('image'), // Use the image URL directly
      authorImg: formData.get('authorImg'),
    };

    await BlogModel.create(blogData);

    console.log("Blog Saved");
    return NextResponse.json({ success: true, msg: "Blog Added" });
  } catch (error) {
    console.error("Error saving blog:", error);
    return NextResponse.json({ success: false, msg: "Error saving blog" });
  }
}
//Creating Api Endpoint to delete blog

export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`, ()=>{})
    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({msg:"Blog Deleted"});

}