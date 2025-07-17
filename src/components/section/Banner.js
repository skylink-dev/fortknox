import React from 'react';
export default function Banner({data}) {
    return (
        <section
            className="Banner relative bg-cover bg-center bg-no-repeat h-[calc(100vh-64px)] flex items-center text-white"
            style={{
                backgroundImage: `url(${data.image})`,
            }}
        >
            <div className="container mx-auto px-4 py-4">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-14">
                        {data.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        
                    </p>
                    <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-sm text-white font-semibold transition">
                        {data.bottom_text}
                    </button>
                </div>
            </div>
        </section>

    );
}
