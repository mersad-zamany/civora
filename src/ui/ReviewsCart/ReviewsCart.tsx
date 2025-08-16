"use client"
import { SliderSwiper } from "@/libs/Slider/Slider";
import { Star } from "lucide-react";
import Image from "next/image";

function ReviewsCart() {
    return (
        <>
            <div className="relative w-full flex justify-center h-[500px]" >
                <div>
                    <Image 
                        src={"/image/reviews/one.jpg"}
                        alt="reviews one"
                        fill
                        objectFit="cover"
                        className="rotate-y-180 rounded-2xl"
                    />
                </div>
                <div className="h-5/12 absolute  w-11/12 bottom-4 rounded-2xl bg-white" >
                    <div className="h-full relative flex items-end justify-center" >
                        <div className="w-17 flex absolute -top-8 rounded-full bg-white items-center justify-center h-17" >
                            <div className="w-13 h-13 rounded-full relative " >
                                <Image 
                                    src={"/image/reviews/char/man1.png"}
                                    alt="man 1"
                                    fill
                                    objectFit="cover"
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                        <div className="h-10/12  w-10/12 pb-5 flex flex-col justify-between" >
                        <div className="text-center " >
                            <p className="text-lg Gilroy-Bold" >
                                Bang Upin
                            </p>
                            <p className="Gilroy-Regular text-[#1E1E1E] text-xs" >
                                Pedagang Asongan
                            </p>
                        </div>
                        <div className="text-center tetx-sm Gilroy-Regular" >
                            <p>“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
                        </div>
                        <div className="text-[#F6973F] gap-1 flex justify-center" >
                            <Star size={12} fill="#F6973F" />
                            <Star size={12} fill="#F6973F" />
                            <Star size={12} fill="#F6973F" />
                            <Star size={12} fill="#F6973F" />
                            <Star size={12} fill="#F6973F" opacity={.5} />
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default ReviewsCart;