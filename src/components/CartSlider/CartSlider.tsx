"use client"
import { SliderSwiper } from "@/libs/Slider/Slider";
import Cart from "@/ui/Cart/Cart";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { SwiperSlide } from 'swiper/react';

const tabs = [
    {
        text : "Chair",
        value : 1,
    },
    {
        text : "Beds",
        value : 2,
    },
    {
        text : "Sofa",
        value : 3,
    },
    {
        text : "Lamp",
        value : 4,
    },
]

const Product = [
    {
        type : "chair",
        image : "/image/chairs/chair-1.png",
        title : "Sakarias Armchair",
        starCount : 5,
        price : "392",
        value : 1
    },
    {
        type : "chair",
        image : "/image/chairs/chair-2.png",
        title : "Anjay Chair",
        value : 1,
        starCount : 5,
        price : "519"
    },
    {
        type : "chair",
        image : "/image/chairs/chair-3.png",
        title : "Baltsar Chair",
        starCount : 5,
        value : 1,
        price : "299"
    },
    {
        type : "chair",
        image : "/image/chairs/chair-4.png",
        title : "Nyantuy Chair",
        starCount : 5,
        value : 1,
        price : "921"
    },
    
    {
        type : "chair",
        image : "/image/chairs/chair-1.png",
        title : "Sakarias Armchair",
        starCount : 5,
        price : "392",
        value : 1
    },
    {
        type : "chair",
        image : "/image/chairs/chair-2.png",
        title : "Anjay Chair",
        value : 1,
        starCount : 5,
        price : "519"
    },
    {
        type : "chair",
        image : "/image/chairs/chair-3.png",
        title : "Baltsar Chair",
        starCount : 5,
        value : 1,
        price : "299"
    },
    {
        type : "chair",
        image : "/image/chairs/chair-4.png",
        title : "Nyantuy Chair",
        starCount : 5,
        value : 1,
        price : "921"
    },
    {
        type : "Beds",
        image : "/image/chairs/chair-1.png",
        title : "Sakarias Armchair",
        starCount : 5,
        price : "392",
        value : 2
    },
    {
        type : "Beds",
        image : "/image/chairs/chair-2.png",
        title : "Anjay Chair",
        value : 2,
        starCount : 5,
        price : "519"
    },
    {
        type : "Beds",
        image : "/image/chairs/chair-3.png",
        title : "Baltsar Chair",
        starCount : 5,
        value : 2,
        price : "299"
    },
    {
        type : "Sofa",
        image : "/image/chairs/chair-4.png",
        title : "Nyantuy Chair",
        starCount : 5,
        value : 3,
        price : "921"
    },    
    {
        type : "Sofa",
        image : "/image/chairs/chair-1.png",
        title : "Sakarias Armchair",
        starCount : 5,
        price : "392",
        value : 3
    },
    {
        type : "Lamp",
        image : "/image/chairs/chair-2.png",
        title : "Anjay Chair",
        value : 4,
        starCount : 5,
        price : "519"
    },
    {
        type : "Lamp",
        image : "/image/chairs/chair-3.png",
        title : "Baltsar Chair",
        starCount : 5,
        value : 4,
        price : "299"
    },
    {
        type : "Lamp",
        image : "/image/chairs/chair-4.png",
        title : "Nyantuy Chair",
        starCount : 5,
        value : 4,
        price : "921"
    },
    
]

function CartSlider() {
    const [tabSelected , setTabSelected] = useState<number>(1)
    return (
        <>
            <div className="md:px-32 px-10 py-12 bg-[#F7F7F7]" >
                <div className="text-center md:text-[42px] text-[25px] Gilroy-Bold" >
                    Best Selling Product
                </div>
                <div className="flex mt-8 mb-20 justify-center" >
                    <div className="p-1.5 bg-[#EEEEEE] rounded-full grid grid-cols-4" >
                        {tabs.map((item) => (
                            <div 
                            onClick={() => setTabSelected(item.value)} 
                            key={item.value} 
                            className={`px-3 py-2 cursor-pointer text-center transition-all duration-200 rounded-full ${tabSelected == item.value ? "bg-white" : ""}`} 
                        >
                            {item.text}
                        </div>
                        ))}
                    </div>
                </div>
                <SliderSwiper perRaw={4}>
                    {Product.map((item) => (
                        item.value == tabSelected ? 
                        <SwiperSlide>
                            <Cart item={item} />
                        </SwiperSlide> : ""
                    ))}
                </SliderSwiper>
                <div className="mt-14 text-[#E58411] text-lg flex justify-center w-full" >
                    <div className="items-center gap-2 flex" >
                        View All
                        <ArrowRight />
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartSlider;