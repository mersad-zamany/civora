import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
    return (
        <div className="bg-[#F7F7F7] w-full flex justify-center mt-60 lg:p-20 p-10" >
            <div className="lg:w-9/12 ">
                <div className=" grid lg:grid-cols-4 grid-cols-1 gap-10" >
                    <div>
                        <p className="Gilroy-Bold text-3xl">Panto</p>
                        <p className="text-[#1E1E1E] text-sm mt-6">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    </div>
                    <div className="flex lg:justify-center">
                        <ul className="flex flex-col gap-3">
                            <li className="text-[#F6973F] text-lg" >Services</li>
                            <li className="text-[#1E1E1E] text-sm cursor-pointer" >Email Marketing</li>
                            <li className="text-[#1E1E1E] text-sm cursor-pointer" >Campaigns</li>
                            <li className="text-[#1E1E1E] text-sm cursor-pointer" >Branding</li>
                        </ul>
                    </div>
                    <div className="flex lg:justify-center">
                        <ul className="flex flex-col gap-3">
                            <li className="text-[#F6973F] text-lg " >Furniture</li>
                            <li className="text-[#1E1E1E] text-sm cursor-pointer " >Beds</li>
                            <li className="text-[#1E1E1E] text-sm cursor-pointer " >Chairs</li>
                            <li className="text-[#1E1E1E] text-sm cursor-pointer " >All</li>
                        </ul>
                    </div>
                    <div className="flex lg:justify-center">
                        <ul className="flex flex-col gap-3">
                            <li className="text-[#F6973F] text-lg " >Follow Us</li>
                            <li className="items-center text-[#1E1E1E] text-sm flex gap-2 cursor-pointer" >
                                <Facebook color="#1E2833" fill="#1E2833" />
                                Facebook
                            </li>
                            <li className="items-center text-[#1E1E1E] text-sm flex gap-2 cursor-pointer" >
                                <Twitter color="#1E2833" fill="#1E2833" />
                                Twitter
                            </li><li className="items-center text-[#1E1E1E] text-sm flex gap-2 cursor-pointer" >
                                <Instagram color="#1E2833" />
                                Instagram
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full flex lg:flex-row flex-col  justify-between items-center mt-10 " >
                    <div className="text-[#1E2833] order-2 lg:order-1 lg:mt-0 mt-2 text-sm opacity-50">Copyright © 2021</div>
                    <div className="flex items-center order-1 lg:order-2 lg:justify-end justify-between lg:w-fit w-full lg:gap-10" >
                        <p className="text-[#1E1E1E] cursor-pointer" >Terms & Conditions</p>
                        <p className="text-[#1E1E1E] cursor-pointer" >Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;