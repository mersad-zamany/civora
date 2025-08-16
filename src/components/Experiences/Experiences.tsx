import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Experiences() {
    return (
        <>
            <div className="lg:my-60 my-20 grid lg:grid-cols-2 grid-cols-1 items-center gap-20" >
                <div className="relative px-10 w-full lg:hidden block">
                    <div className="w-full flex items-center justify-center" >
                        <Image
                            alt="experiences"
                            src={"/image/experiences/experiences.jpg"}
                            width={630}
                            height={445}
                            className="rounded-3xl w-full backdrop-blur-2xl z-20 relative "
                        />
                    </div>
                    <div className="w-72 absolute right-5 rounded-xl bg-[#F7F7F7] top-20 h-8/12">
                        
                    </div>
                </div>
                <div className="relative lg:block hidden" >
                    <div className="w-[495px] z-10 -left-5 -top-16 rounded-3xl h-[301px] absolute bg-[#F7F7F7]" >
                    </div>
                    <div className="relative flex items-center" >
                        <Image
                            alt="experiences"
                            src={"/image/experiences/experiences.jpg"}
                            width={630}
                            height={445}
                            className="rounded-3xl backdrop-blur-2xl z-20 relative -left-7"
                        />
                        <Image
                            alt="experiences"
                            src={"/image/experiences/experiences.jpg"}
                            width={555}
                            height={423}
                            className="rounded-3xl blur-[50px] absolute top-24 opacity-50 z-10  left-1"
                        />
                        <div className="w-[495px] z-10 left-44 xl:block hidden rounded-3xl h-[301px] absolute bg-[#F7F7F7]" >
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 lg:pr-[141px] px-10" >
                    <div className="text-lg text-[#E58411]" >EXPERIENCES</div>
                    <div className="lg:text-[42px] text-[30px] Gilroy-Bold" >
                        <p>we provide you the</p>
                        <p>
                            best experience
                        </p>
                    </div>
                    <div className="Gilroy-Regular text-lg" > 
                        You don’t have to worry about the result because all of these interiors are made by 
                        people who are professionals in their fields with an elegant and lucurious style and with premium quality materials
                    </div>
                    <Link href={"#"}>
                        <div className="flex  text-[#E58411] items-center text-lg " >
                            More info
                            <MoveRight />    
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Experiences;