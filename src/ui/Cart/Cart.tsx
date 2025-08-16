import { PlusIcon, Star } from "lucide-react";
import Image from "next/image";

interface Props{
    item : {
        price : string
        image : string
        title : string
        type  : string
        starCount : number
    }
} 

function Cart({item} : Props) {
    return ( 
        <>
        <div className="rounded-[20px] flex flex-col overflow-hidden" >
            <div className="relative h-72 flex items-center justify-center  w-full bg-[#FAFAFA]" >
                <Image
                    src={item.image}
                    alt="chairs"
                    width={290}
                    height={280}
                    style={{
                        width : "90%",
                        height : "90%"
                    }}
                    className="object-contain  rotate-y-180 "
                />
                </div>
                <div className="bg-white px-5 py-3" >
                    <div className="text-[#8D8D8D]" >
                        {item.type}
                    </div>
                    <div className="text-xl font-semibold" >{item.title}</div>
                    <div className="flex text-[#F6B76F] items-center gap-0.5" >
                        {Array.from({ length: item.starCount }).map((_, idx) => (
                            <Star key={idx} size={18} fill="#F6B76F" />
                        ))}
                    </div>
                    <div className="mt-9 flex items-center justify-between" >
                        <div className="flex text-sm gap-1" >
                            <p>
                                $
                            </p>
                        <p className="text-xl font-semibold" >
                            {item.price}
                        </p>
                    </div>
                    <div className="w-12 h-12 text-white flex items-center justify-center rounded-full bg-[#0D1B39]" >
                        <PlusIcon />
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Cart;