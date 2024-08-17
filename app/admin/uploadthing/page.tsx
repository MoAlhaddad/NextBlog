"use client";
import React from "react";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";

export default function Home() {
  const [imageData, setImageData] = React.useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    e.productImage = imageData;
  };
  return (
    <main className="h-fit flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:max-w-lg w-full p-5 bg-white rounded-xl">
        <div className="text-center">
          <h2 className="mt-5 text-2xl font-bold text-gray-900">
            UploadThing File Upload!
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Lorem ipsum is placeholder text.
          </p>
        </div>
        <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 space-y-2">
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
                  width="1000"
                  height="100"
                  className="object-cover w-full h-[250px]"
                />
              </div>
            ) : (
              <UploadDropzone
                endpoint={"productImage"}
                onClientUploadComplete={(url: any) => {
                  console.log("files", url);
                  setImageData(url?.[0].url);
                  window.alert("Upload completed");
                }}
                onUploadError={(error) => {
                  window.alert(`${error?.message}`);
                }}
              />
            )}
          </div>
          <button
            type="submit"
            className="p-2 w-full flex justify-center bg-blue-500 text-gray-100 rounded-full tracking-wide
                        font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
          >
            Upload
          </button>
        </form>
      </div>
    </main>
  );
}