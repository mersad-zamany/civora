"use client"
import Sidebar from "@/ui/Sidebar/Sidebar";
import { ChevronDown, Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";

function HeaderLayout() {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <div className="py-10 absolute z-40 w-full text-white md:px-20 px-10 flex justify-between items-center" >
                <div className="Gilroy-Bold text-[28px]" >
                    Panto
                </div>
                <nav className="hidden lg:block" >
                    <ul className="flex text-lg items-center gap-[62px]" >
                        <li className="relative cursor-pointer gap-1 flex items-center group">
                            Furniture
                            <ChevronDown className="group-hover:rotate-180 transition-all duration-200" size={16} />
                            <ul className="absolute top-full z-60 left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <li className="px-4 py-2 hover:bg-gray-100 rounded-lg text-black cursor-pointer">Chairs</li>
                                <li className="px-4 py-2 hover:bg-gray-100 rounded-lg text-black cursor-pointer">Tables</li>
                                <li className="px-4 py-2 hover:bg-gray-100 rounded-lg text-black cursor-pointer">Sofas</li>
                            </ul>
                        </li>
                        <li className="cursor-pointer" >Shop</li>
                        <li className="cursor-pointer" >About Us</li>
                        <li className="cursor-pointer" >Contact</li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4" >
                    <div className="relative" >
                        <ShoppingBag size={34} />
                        <div className="w-5 absolute top-0 -right-2 flex rounded-full items-center justify-center h-6 bg-[#E58411]" >
                            0
                        </div>
                    </div>
                    <div onClick={() => setOpen(true)} className="lg:hidden" >
                        <Menu size={34} />
                    </div>
                </div>
                <Sidebar open={open} setOpen={setOpen}>
                    <div className="w-50 p-2 lg:hidden" >
                        <header className="Gilroy-Bold text-lg flex w-full items-center justify-center p-5" >
                            Panto
                        </header>
                        <div className="flex items-center text-[#E58411] Gilroy-Bold " >
                            other menu
                        </div>
                        <div className="flex flex-col gap-2 mt-2" >
                            <div className="rounded-xl flex items-center bg-zinc-200 justify-between w-full bg-[] p-3" >Furniture</div>
                            <div className="rounded-xl flex items-center  justify-between w-full bg-[] p-3" >Shop</div>
                            <div className="rounded-xl flex items-center  justify-between w-full bg-[] p-3" >About us</div>
                            <div className="rounded-xl flex items-center  justify-between w-full bg-[] p-3" >Contact</div>
                        </div>
                    </div>
                </Sidebar>
            </div>
        </>
    );
}

export default HeaderLayout;