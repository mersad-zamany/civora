"use client"
import { Swiper } from 'swiper/react';
import 'swiper/css';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function SliderSwiper({ children , perRaw }: { children: React.ReactNode , perRaw: number }) {
    const swiperRef = useRef<any>(null);
    return (
        <div className="relative">

            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute bg-white w-12 h-12 -left-6 top-1/2 -translate-y-1/2 shadow-[0px_7.03px_19.53px_0px_#0000000F] flex items-center justify-center text-black  rounded-full z-10"
            >
                <ArrowLeft />
            </button>
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute bg-white w-12 h-12 -right-6 top-1/2 -translate-y-1/2 shadow-[0px_7.03px_19.53px_0px_#0000000F] flex items-center justify-center text-black  rounded-full z-10"
            >
                <ArrowRight />
            </button>
            <Swiper
                spaceBetween={42}
                slidesPerView={perRaw}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1020 :{
                        slidesPerView: perRaw,
                        spaceBetween: 42,
                    }
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {children}
            </Swiper>
        </div >
    );
};