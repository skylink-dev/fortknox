import { Description } from '@mui/icons-material';
import React from 'react';

export default function ImageCta({data}) {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center justify-center text-white text-center"
            style={{ backgroundImage: `url(${data.image})` }} id="image-cta-section">
                <div className="max-w-xl content-wrap pt-10">
                    <h3 className="text-lg mb-2">{data.sub_title}</h3>
                    <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
                    <a href={data.bottom_link} className="inline-block px-6 py-2 border border-white text-black rounded-md bg-white hover:bg-red-600 hover:text-white transition"> 
                        {data.bottom_text}
                    </a>
                </div>
        </section>
    );
}
