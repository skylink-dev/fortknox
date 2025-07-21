'use client'
import React, { useEffect, useState } from 'react';

export default function ThreeBannerImage({data}) {
    const [image1,setImage1]=useState();
    const [image2,setImage2]=useState();
    const [image3,setImage3]=useState();
    useEffect(()=>{
        if(data!=undefined||data!=null||data!={}){
            setImage1(data?.cards[0]?.image);
            setImage2(data?.cards[1]?.image);
            setImage3(data?.cards[2]?.image)
        }
        console.log("Three Banner Image")
        console.log(data)
    },[data])

    return (
        <>
        <div className='min-h-full min-w-full '>
            <div className="w-full px-4 py-12 text-center">
            {/* Gradient Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r p-2 from-slate-600 to-blue-600 bg-clip-text text-transparent">
                {data?.sub_title}
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-2xl text-gray-600 max-w-2xl md:max-w-5xl  mx-auto">
                {data?.description}
            </p>
            </div>

        
            <div className="min-w-full grid grid-row-2 md:pr-60 rounded-2xl md:pl-60 gap-8 p-4">
                <div className=' bg-gray-400 min-h-100 md:min-h-140 w-full row-span-1 rounded-2xl relative' style={{
                                    backgroundImage: image1 ? `url(${image1})` : 'none',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition:'center'
                                }}>
                    <div className="absolute inset-0 flex items-center w-1/2 justify-center md:justify-start p-4">
                        <h3 className="font-semibold text-slate-50 text-2xl md:text-4xl text-center">
                            {data?.cards[0]?.sub_title}
                        </h3>
                    </div>
                </div>
                <div className=' grid grid-cols-2 min-h-90 md:min-h-140 bg-gray-100 gap-8 row-span-1' >
                    <div className='col-span-1 bg-amber-200 rounded-2xl relative' style={{
                                    backgroundImage: image2 ? `url(${image2})` : 'none',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition:'center'
                                }}>
                        <div className="absolute inset-0 bg-black/40 md:bg-black/0 rounded-2xl flex items-center md:items-baseline-last md:pb-20  justify-center md:justify-start p-4">
                            <h3 className="font-semibold text-slate-50 text-lg md:text-3xl text-center">
                                {data?.cards[1]?.sub_title}
                            </h3>
                        </div>
                    </div>
                    <div  className='col-span-1 bg-amber-500 rounded-2xl relative bg-top md:bg-center' style={{
                                    backgroundImage: image3 ? `url(${image3})` : 'none',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                }}>
                        <div className="absolute inset-0 flex items-center rounded-2xl bg-black/40 md:bg-black/0 md:items-baseline-last md:pb-20  justify-center md:justify-start p-4">
                            
                            <h3 className="font-semibold text-slate-50 text-lg md:text-3xl text-center">
                                {data?.cards[2]?.sub_title}
                            </h3>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
        </>
    );
}
