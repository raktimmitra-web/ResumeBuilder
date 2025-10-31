import React from "react";
import { footerOptions } from "../dummyData/data";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-foreground ">
      <div className=" flex items-center justify-center py-10 gap-x-8">
        {footerOptions.map((option) => (
          <p className="text-lg text-slate-200 font-semibold">{option}</p>
        ))}
      </div>
        <div className="w-full flex justify-center items-center py-4 gap-x-8 text-white">
            <a href="https://facebook.com"><Facebook /></a>
            <a href="https://twitter.com"><Twitter/></a>
            <a href="https://linkedin.com"><Linkedin/></a>
        </div>

      <div className="px-12 py-4 border-b-2 border-slate-100 text-white">
        © 2025 Works Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
