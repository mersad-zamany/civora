import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Materials() {
    return (
        <>
            <div className="lg:my-80 my-20 grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-20 items-center" >
                <div className="relative px-10 w-full gap-15 flex lg:hidden">
                    <div className="w-full flex items-center justify-center" >
                        <Image
                            width={630}
                            height={445}
                            src={"/image/materails/materialImage.jpg"}
                            alt="materialImage"
                            className="relative z-30 rounded-3xl rotate-y-180"
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:order-1 order-2 gap-5 lg:px-20 px-10" >
                    <div className="text-lg text-[#E58411]" >MATERIALS</div>
                    <div className="lg:text-[42px] text-[30px] Gilroy-Bold" >
                        <p>
                            Very serious
                        </p>
                        <p>
                            materials for making
                        </p>
                        <p>
                            furniture
                        </p>
                    </div>
                    <div className="Gilroy-Regular text-lg" >
                        Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
                    </div>
                    <Link href={"#"}>
                        <div className="flex  text-[#E58411] items-center text-lg " >
                            More info
                            <MoveRight />
                        </div>
                    </Link>
                </div>
                <div className="relative lg:order-2 order-1 lg:flex hidden" >
                    <div className="w-4/12 relative" >
                        <div className="absolute -top-28 flex flex-col gap-10 -right-28" >
                            <div className="relative" >
                                <div className="relative w-64 rounded-3xl h-80 overflow-hidden" >
                                    <Image
                                        width={630}
                                        height={445}
                                        alt="sofa"
                                        src={"/image/materails/sofa.jpg"}
                                        className="object-cover z-20 absolute max-w-none -top-20 -left-40"
                                    />
                                </div>
                                <Image
                                    width={178}
                                    height={184}
                                    alt="sofa"
                                    src={"/image/materails/sofa.jpg"}
                                    className="object-cover z-10 absolute max-w-none top-60 blur-2xl opacity-50 right-10"
                                />
                            </div>
                            <div className="relative" >
                                <div className="relative overflow-hidden  w-64 rounded-3xl h-80" >
                                    <Image
                                        width={630}
                                        height={445}
                                        alt="sofa 1"
                                        src={"/image/materails/sofa1.jpg"}
                                        className="object-cover z-20 absolute max-w-none -top-30"
                                    />
                                </div>
                                <Image
                                    width={178}
                                    height={184}
                                    alt="sofa"
                                    src={"/image/materails/sofa1.jpg"}
                                    className="object-cover z-10 absolute max-w-none top-60 blur-2xl opacity-50 right-10"
                                />
                            </div>

                        </div>
                    </div>
                    <div className="w-8/12 overflow-hidden" >
                        <Image
                            width={630}
                            height={445}
                            src={"/image/materails/materialImage.jpg"}
                            alt="materialImage"
                            className="relative  -right-40 rounded-3xl rotate-y-180"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Materials;