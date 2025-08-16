"use client"
import { SliderSwiper } from "@/libs/Slider/Slider";
import ReviewsCart from "@/ui/ReviewsCart/ReviewsCart";
import { SwiperSlide } from "swiper/react";

function Reviews() {
    return (
        <>
            <div className="md:my-60 my-20" >
                <div className="flex flex-col gap-3 items-center " >
                    <div className="text-[#E58411] text-lg" >
                        Testimonials
                    </div>
                    <div className="Gilroy-Bold md:text-[42px] text-[30px]" >
                        Our Client Reviews
                    </div>
                </div>
                <div className="mt-16 md:px-32 px-10" >
                    <SliderSwiper perRaw={4}>
                        <SwiperSlide>
                            <ReviewsCart />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewsCart />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewsCart />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ReviewsCart />
                        </SwiperSlide>
                    </SliderSwiper>
                </div>
            </div>
        </>
    );
}

export default Reviews;