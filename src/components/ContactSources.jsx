import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const ContactSources = () => {
  return (
    <div className="w-full bg-[#080F20] px-4 sm:px-6 lg:px-20">
      <div className="container max-w-7xl mx-auto py-12 border-t border-[#1C2338]">
      
        <div className="flex items-center gap-4">
          <h6 className="text-[20px] text-[#E3E9FB]">Share this post:</h6>

          <div className="flex gap-4 mt-1">
            <a className="h-9 w-9 rounded-full bg-[#49FBDF] flex items-center justify-center cursor-pointer">
              <FaFacebook className="text-[#080F20] text-[18px]" />
            </a>

            <a className="h-9 w-9 rounded-full bg-[#49FBDF] flex items-center justify-center cursor-pointer">
              <FaXTwitter className="text-[#080F20] text-[18px]" />
            </a>

            <a className="h-9 w-9 rounded-full bg-[#49FBDF] flex items-center justify-center cursor-pointer">
              <IoLogoYoutube className="text-[#080F20] text-[18px]" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactSources;
