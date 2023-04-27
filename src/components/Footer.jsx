import React from "react";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaTiktok, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="text-sm py-2">Help Center</li>
              <li className="text-sm py-2">Contact Us</li>
              <li className="text-sm py-2">API Status</li>
              <li className="text-sm py-2">Documentations</li>
            </ul>
          </div>
          <div>
            <h2  className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">About Us</li>
              <li className="text-sm py-2">Careers</li>
              <li className="text-sm py-2">Invest</li>
              <li className="text-sm py-2">Legal</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-4 relative">
              <div  className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                <ThemeToggle />
              </div>
              <p className="text-clip md:text-right text-center">Sign Up for Crypto News</p>
              <div className="py-4">
                <form >
                    <input className="bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto" type="email" placeholder="Enter your email"/>
                    <button className="bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2">Sign Up</button>
                </form>
              </div>
              <div className="flex py-4 justify-around text-accent">
                <AiOutlineInstagram className='cursor-pointer' />
                <FaTwitter className='cursor-pointer' />
                <FaFacebookF className='cursor-pointer' />
                <FaGithub className='cursor-pointer'/>
                <FaTiktok className='cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center pt-4">Powered By Coin Gecko</p>
      <div className="text-center my-2 text-sm flex justify-center items-center"><a className="cursor-pointer hover:text-blue-500 shadow-xl border-b w-32 hover:border-blue-400" href="https://github.com/ayushsgithub">© Ayush, 2023</a></div>
    </div>
  );
};

export default Footer;
