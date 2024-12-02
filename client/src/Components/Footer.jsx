import React from "react";
import logo2 from "../assets/LOGO2.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";
import storelogo from "../assets/app-store-badges-en 1.png";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-around p-2 pb-5 pt-5">
        <div className="flex flex-col gap-3">
          <img src={logo2} alt="logo" width="140px" />
          <div className="flex gap-1">
            <img src={storelogo} alt="apple_store" width="270px" />
          </div>
          <p className="inline-block mr-3 text-sm text-wrap leading-tight ">
            Company # 490039-455, Registered with <br /> House of companies
          </p>
        </div>
        <div className="flex flex-col ">
          <h2 className="font-bold text-base">
            Get Exclusive Deals in your Inbox
          </h2>
          <div className="flex mt-4 mb-1 h-9 ">
            <input
              placeholder="youremail@gmail.com"
              className="rounded-s-full px-3 pr-8 font-normal text-sm bg-[#c4c4c4] outline-none "
            />
            <button className=" rounded-full -left-5 relative px-5 leading-5  text-white font-medium bg-[#FC8A06]">
              Subscribe
            </button>
          </div>
          <p className="text-xs mb-3 ml-4">
            we wont spam, read our <a>email policy</a>
          </p>
          <div className="flex gap-3 ml-4 flex-icons">
            <FaFacebook size="24px" />
            <AiFillInstagram size="24px" />
            <AiFillTikTok size="24px" />
            <BsSnapchat size="24px" />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col mr-5 gap-2 text-sm">
            <h2 className="font-bold">Legal Pages</h2>
            <a>Terms and conditions</a>
            <a>Privacy</a>
            <a>Cookies</a>
            <a>Modern Slavery Statement</a>
          </div>
          <div className="flex flex-col gap-2 mr-5 text-sm">
            <h2 className="font-bold ">Important Links</h2>
            <a>Get help</a>
            <a>Add your resturant</a>
            <a>Sign up to deliver</a>
            <a>Create a business account</a>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-black text-xs text-[#FFFFFF] p-1 leading-5  px-12">
        <p>Order uk copyright 2024, All Rights Reserved.</p>
        <div className="flex gap-3">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Pricing</p>
          <p>Do not sell or share my personal information</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
