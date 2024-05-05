import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";
import React from "react";

function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Contact Form */}
      <div className="w-full md:w-1/2 p-4 flex items-stretch justify-center flex-col">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          تواصل معنا
          <EnvelopeIcon className="w-8 h-8 mx-2"/>
          </h2>
        <form className="flex flex-col space-y-4">
        <Input color="blue" label="أدخل إسمك" />
        <Input type="email" color="blue" label="أدخل البريد الإلكتروني" />
          <textarea placeholder="إكتب رسالتك" rows="4" className="border border-gray-300 rounded-md p-2"></textarea>
          <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">Send</button>
        </form>
      </div>
      {/* Image */}
      <div className="w-full md:w-1/2 p-4 flex items-center justify-center">
        <img src="./contact.png" alt="Contact Us" className="w-4/5 h-auto" />/
      </div>
    </div>
  );
}

export default ContactUs;
