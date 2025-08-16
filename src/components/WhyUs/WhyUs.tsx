import { MoveRight } from "lucide-react";
import Link from "next/link";

function WhyUs() {
    return (
        <div className="my-32 lg:px-20 px-10 w-full" >
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-7  items-stretch">
                <div className="text-[42px] Gilroy-Bold" >
                    <p>Why</p>
                    <p>Choosing Us</p>
                </div>
                <div>
                    <p className="text-2xl Gilroy-Bold" >Luxury facilities</p>
                    <p className="mt-5 mb-3 min-h-[4.5rem] Gilroy-Regular text-[#1E1E1E]" >The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    <Link href={"#"}>
                        <div className="flex text-[#E58411] items-center gap-3" >
                            More Info
                            <MoveRight />
                        </div>
                    </Link>
                </div>
                <div>
                    <p className="text-2xl Gilroy-Bold" >Affordable Price</p>
                    <p className="mt-5 mb-3 min-h-[4.5rem] Gilroy-Regular text-[#1E1E1E]" >You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
                    <Link href={"#"}>
                        <div className="flex text-[#E58411] items-center gap-3" >
                            More Info   
                            <MoveRight />
                        </div>
                    </Link>
                </div>
                <div>
                    <p className="text-2xl Gilroy-Bold" >Many Choices</p>
                    <p className="mt-5 mb-3 min-h-[4.5rem]  Gilroy-Regular text-[#1E1E1E]" >We provide many unique work space choices so that you can choose the workspace to your liking.</p>
                    <Link href={"#"}>
                        <div className="flex text-[#E58411] items-center gap-3" >
                            More Info
                            <MoveRight />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;