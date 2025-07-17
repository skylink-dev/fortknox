'use client'
import React, { useEffect, useState } from 'react';
export default function SixBannerImage({data}) {

    const [image1,setImage1]=useState("");
    const [image2,setImage2]=useState("");
    const [image3,setImage3]=useState("");
    const [image4,setImage4]=useState("");
    const [image5,setImage5]=useState("");
    const [image6,setImage6]=useState("");

    useEffect(()=>{
        console.log(data==undefined)
        console.log(data)
        if(data!==undefined){
            console.log(data.cards)
            setImage1(data.cards[0].image);
            setImage2(data.cards[1].image);
            setImage3(data.cards[2].image);
            console.log(data.cards[2])
            setImage4(data.cards[3].image);
            setImage5(data.cards[4].image);
            setImage6(data.cards[5].image);
        }
        else{
            
        }
    },[data])
    
    return (
        <>

        <div className=' bg-gray-50 grid grid-flow-row md:grid-rows-5 md:ml-5 md:pr-10 md:p-2 md:pl-10 md:mr-5 md:m-2 rounded-2xl md:min-h-250 '>
            <div className='w-full h-full p-5 row-span-1 flex flex-col items-center justify-center space-y-2'>
    <div className='text-center font-bold text-2xl md:text-4xl bg-gradient-to-r from-slate-900 pb-2 via-slate-700  to-slate-900 bg-clip-text text-transparent'>
        {data?.sub_title}
    </div>
    
    {/* <div className='text-center font-medium text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl px-4'>
        {data?.sub_title}
    </div> */}
</div>
            <div className='md:row-span-4   '>
                <div className="  grid  md:grid-flow-col md:grid-rows-8 gap-2 lg:gap-4">
                    
                    <div className=" md:col-span-3 bg-gray-50 md:row-span-4 min-h-165 lg:min-h-100  min-w-80 md:min-h-90 ">
                        <div className='grid md:grid-cols-25 gap-4 min-w-full min-h-full '>
                            
                            <div className={`md:col-span-18 group hover:scale-[1.02] transition-all duration-500 hover:cursor-pointer w-full h-full rounded-2xl bg-blue-950 bg-size-[auto_900px] bg-no-repeat bg-linear-to-r from-indigo-950 to-blue-950 overflow-hidden`} style={{
                                backgroundImage: image1 ? `url(${image1})` : 'none',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                                <div className="w-full h-full rounded-2xl font-semibold text-stone-100 text-xl hover:bg-slate-950/50 hover:text-2xl md:text-2xl md:hover:text-3xl transition-all duration-500 inset-0 bg-black/20 flex md:items-center justify-around md:justify-start pt-2">
                                    <div className="p-2 m-2 relative">
                                        {data?.cards[0]?.title}
                                        {/* Description that slides up from bottom on hover */}
                                        <div className="absolute hidden group-hover:block transition-all duration-500  text-white text-lg font-normal p-4 -mx-2 -mb-2 rounded-b-2xl">
                                            {data?.cards[0]?.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`md:col-span-7 group hover:scale-[1.02] transition-all duration-500   hover:cursor-pointer  rounded-2xl bg-contain bg-no-repeat bg-gray-900 `} style={{
                                    backgroundImage: image2 ? `url(${image2})` : 'none',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition:'right'
                                }}>
                                    {
                                        /**
                                     * Se large image 
                                     * row 1 col -1
                                     *
                                     */
                                    }
                                    <div className="w-full h-full text-xl rounded-2xl font-semibold hover:bg-slate-950/50 hover:text-2xl  md:text-2xl md:hover:text-3xl transition-all duration-500 text-stone-100 inset-0 bg-black/20 flex justify-center pt-2 ">
                            <div className="p-2 m-2 relative">
                                        {data?.cards[1]?.title}
                                       {/* Description that slides up from bottom on hover */}
                                        <div className="absolute hidden group-hover:block transition-all duration-500  text-white text-lg font-normal p-4 -mx-2 -mb-2 rounded-b-2xl">
                                            {data?.cards[1]?.description}
                                        </div>
                                    </div>
                            </div>
                            </div>                        
                        </div>
                    </div>
                    <div className="md:col-span-3  rounded-2xl row-span-4 ...">
                                     <div className='grid md:grid-cols-25 gap-4 min-w-full min-h-250 md:min-h-full'>
                            <div className=' md:col-span-9 group hover:scale-[1.02] transition-all duration-500   hover:cursor-pointer m-1 rounded-2xl ' style={{
                                    backgroundImage: image3 ? `url(${image3})` : 'none',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition:'right'
                                }}>
                                {
                                    /**
                                     * first large image 
                                     * row 1 col -1
                                     *
                                     */
                                }
                                <div className="w-full h-full text-xl rounded-2xl hover:bg-slate-950/50 hover:text-2xl  md:text-2xl md:hover:text-3xl transition-all duration-500 font-semibold text-stone-100 inset-0 bg-black/20 flex justify-center pt-2 ">
                            <div className="p-2 m-2 relative">
                                        {data?.cards[2]?.title}
                                        {/* Description that slides up from bottom on hover */}
                                        <div className="absolute hidden group-hover:block transition-all duration-500  text-white text-lg font-normal p-4 -mx-2 -mb-2 rounded-b-2xl">
                                            {data?.cards[2]?.description}
                                        </div>
                                    </div>
                            </div>
                            </div>
                            <div className=' md:col-span-9 m-1 group hover:scale-[1.02] transition-all duration-500   hover:cursor-pointer rounded-2xl ' style={{
                                    backgroundImage: image4 ? `url(${image4})` : 'none',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition:'right'
                                }}>
                                {
                                    /**
                                     * first large image 
                                     * row 1 col -1
                                     *
                                     */
                                }
                                <div className="w-full h-full text-xl rounded-2xl font-semibold  text-stone-100 hover:bg-slate-950/50 hover:text-2xl  md:text-2xl md:hover:text-3xl transition-all duration-500 inset-0 bg-black/20 flex justify-center pt-2 ">
                            <div className="text-center p-2 m-2 rounded-2xl relative ">
                                {data?.cards[3]?.title}
                                 <div className="absolute hidden group-hover:block transition-all duration-500  text-white text-lg font-normal p-4 -mx-2 -mb-2 rounded-b-2xl">
                                            {data?.cards[3]?.description}
                                        </div>
                            </div>
                            </div>
                            </div>
                            <div className=' md:col-span-7 group hover:scale-[1.02] transition-all duration-500   hover:cursor-pointer m-1 rounded-2xl bg-gray-800 ' style={{
                                    backgroundImage: image5 ? `url(${image5})` : 'none',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition:'right'
                                }}>
                                    {
                                        /**
                                     * Se large image 
                                     * row 1 col -1
                                     *
                                     */
                                    }
                                    <div className="w-full h-full text-xl rounded-2xl font-semibold text-stone-100 hover:bg-slate-950/50 hover:text-2xl  md:text-2xl md:hover:text-3xl transition-all duration-500 inset-0 bg-black/20 flex justify-center pt-2 ">
                            <div className="text-center p-2 m-2 rounded-2xl relative ">
                                {data?.cards[4]?.title}
                                 <div className="absolute hidden group-hover:block transition-all duration-500  text-white text-lg font-normal p-4 -mx-2 -mb-2 rounded-b-2xl">
                                            {data?.cards[4]?.description}
                                        </div>
                            </div>
                            </div>
                            </div>                        
                        </div>

                    </div>
                    <div className="md:row-span-8 md:col-span-1 group hover:scale-[1.02] transition-all duration-500   hover:cursor-pointer m-1 w-full h-full  rounded-2xl bg-gray-950 text-amber-50">
                        <div className='font-semibold w-full h-full  rounded-2xl text-xl text-gray-200' style={{
                                    backgroundImage: image6 ? `url(${image6})` : 'none',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundPosition:'bottom'
                                }}>
                            {/* {data.sections[1].cards[2].title} */}
                           <div className="w-full h-full min-h-80 text-3xl rounded-2xl font-semibold text-stone-100 hover:bg-slate-950/50 hover:text-2xl  md:text-2xl md:hover:text-3xl transition-all duration-500 inset-0 bg-black/20 flex justify-center pt-2 ">
                            <div className="text-center p-2 m-2 relative ">
                                
                                {data?.cards[5]?.title}
                                 <div className="absolute hidden group-hover:block transition-all duration-500  text-white text-lg font-normal p-4 -mx-2 -mb-2 rounded-b-2xl">
                                            {data?.cards[5]?.description}
                                        </div>
                            </div>
                            </div>

                        </div>
                        {/* <img src={data.sections[1].cards[2].image}></img> */}
                    </div>
                </div>
            </div>
        </div>
        </>
        
                                )
}
