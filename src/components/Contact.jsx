import React from "react";

const Contact = () => {
  return (
    <div name='contact' className="w-full h-full py-9 text-white bg-gradient-to-b from-black  to-gray-800">
      <div className="flex flex-col justify-center p-4 max-w-screen-lg mx-auto h-full">
        <div>
          <p className="inline text-2xl px-2 border-b-4 border-gray-500 font-bold hover:border-white duration-300 md:text-4xl">Contact</p>
          <p className="py-5">Submit the form below to get in touch with me </p>
        </div>
        <div className="flex justify-center items-center py-7">
          <form action="https://getform.io/f/e6a263d8-5e12-425c-aa01-07c417f28dc2" method="POST" className="flex flex-col w-full md:w-3/4">
            <input type="text" name='name' placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md  text-white focus:outline-none" />

            <input type="mail" name='email' placeholder="Enter your email" className="p-2 bg-transparent border-2 rounded-md  text-white my-6 focus:outline-none" />
            <textarea name="message"placeholder="Enter your message"  rows="10" className="  text-white p-2 bg-transparent border-2 border-white rounded-sm focus:outline-none"></
            textarea>
            <button  className=" text-white flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer px-6 my-8  mx-auto py-2 rounded-md  hover:scale-110 duration-500">Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
