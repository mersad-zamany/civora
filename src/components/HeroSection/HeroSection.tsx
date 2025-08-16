import FancyInput from "@/ui/FancyInput";
import { Search } from "lucide-react";
import Image from "next/image";

function HeroSection() {
    return (
        <>
            <div className="w-full z-10" >
                <div className="relative w-full  h-lvh " >
                    <Image
                        alt="landing image"
                        src={"/image/landing/civora.jpg"}
                        fill
                        
                    />
                    <div className="absolute z-20 md:top-[160px] top-[120px] text-white flex justify-center items-center flex-col w-full" >
                        <div className="Gilroy-Bold text-center leading-tight text-[30px] md:text-[80px]" >
                            <p>
                                Make your interior more
                            </p>
                            <p>
                                minimalistic & modern
                            </p>
                        </div>
                        <div className="Gilroy-Regular mt-[14px] md:text-2xl text-sm" >
                            <p>
                                Turn your room with panto into a lot more minimalist
                            </p>
                            <p className="text-center ">
                                and modern with ease and speed
                            </p>
                        </div>
                        <div>
                            <FancyInput
                                icon={
                                    <>
                                        <div className="rounded-full absolute right-2 z-20 flex items-center justify-center w-10 h-10 text-white bg-[#E58411]" >
                                            <Search size={18} />
                                        </div>
                                    </>
                                }
                                className="w-[344px]  mt-6 relative flex items-center h-14"
                                inputClassName="w-full text-lg h-full border-[1px] border-white/60 backdrop-blur-[4px] bg-white/15 rounded-full pl-5 pr-14  "
                                placeholder="Search furniture"
                            />
                        </div>
                    </div>
                    <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0)_50%,#fff_100%)] absolute bottom-0 h-3/12 z-30 w-full" ></div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;