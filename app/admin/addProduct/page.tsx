'use client';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { UploadDropzone } from "@/utils/uploadthing";

const Page = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Derek Jeter",
    authorImg: "/author_img.png",
    imageUrl: "" // Field to store the image URL
  });

  const [imageData, setImageData] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Ensure image URL is available
    if (!imageData) {
      toast.error("Please upload an image.");
      return;
    }

    // Prepare form data for submission
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);
    formData.append('image', imageData); // Append image URL to the form data

    try {
      const response = await axios.post('/api/blog', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for form-data
        },
      });

      if (response.data.success) {
        toast.success(response.data.msg);
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "Derek Jeter",
          authorImg: "/author_img.png",
          imageUrl: "" // Reset image URL after successful submission
        });
        setImageData("");
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error");
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-gray-500 tracking-wide">
            Attach Image
          </label>
          {imageData && (
            <button
              type="button"
              onClick={() => setImageData("")}
              className="py-1 px-3 focus:outline-none hover:bg-gray-200"
            >
              + edit image
            </button>
          )}
        </div>
        {imageData ? (
          <div className="col-span-6 sm:col-span-4 shadow">
            <Image
              src={imageData}
              alt="productImage"
              width="300"
              height="100"
            />
          </div>
        ) : (
          <UploadDropzone
            endpoint={"productImage"}
            onClientUploadComplete={(url: any) => {
              console.log("files", url);
              setImageData(url?.[0].url); // Store image URL in state
              window.alert("Upload completed");
            }}
            onUploadError={(error) => {
              window.alert(`${error?.message}`);
            }}
          />
        )}

        <button
          type="submit"
          className="p-2 w-full flex justify-center bg-blue-500 text-gray-100 rounded-full tracking-wide
                      font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
        >
          Upload
        </button>

        <p className='text-xl mt-4'>Blog title</p>
        <input
          name='title'
          onChange={onChangeHandler}
          value={data.title}
          className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
          type="text"
          placeholder='Type Here'
          required
        />

        <p className='text-xl mt-4'>Blog Description</p>
        <textarea
          name='description'
          onChange={onChangeHandler}
          value={data.description}
          className='w-full sm:w-[500px] mt-4 px-4 py-3 border'
          placeholder='Write content here'
          required
        />

        <p className='text-xl mt-4'>Blog Category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className='w-40 mt-4 px-4 py-3 border text-gray-500'
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        
        <br />
        <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Add</button>
      </form>
    </>
  );
};

export default Page;
