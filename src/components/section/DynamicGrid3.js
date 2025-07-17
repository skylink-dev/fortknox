import Image from 'next/image'
import React from 'react'

export default function DynamicGrid3() {
    return (
        <div className="container mx-auto">
            <div className="w-layout-grid skyplay-grid">
                <div className="skyplay-grid-block mobile-portrait-hidden">
                    <div className="middle-block-text">No battery life</div>
                </div>
                <div className="skyplay-grid-block">
                    <Image src="/assets/sample-image-1.jpg" alt="test" width={100} height={100} />
                    <div className="bottom-block-text">Brighter flash</div>
                </div>
                <div className="skyplay-grid-block">
                    <div className="bottom-block-text">2.2" and 9.1"</div>
                </div>
                <div className="skyplay-grid-block">
                    <Image src="/assets/sample-image-1.jpg" alt="test" width={100} height={100} />
                </div>
                <div className="skyplay-grid-block">
                    <div className="middle-block-text">Five new colours</div>
                </div>
                <div className="skyplay-grid-block">
                    <Image src="/assets/sample-image-1.jpg" alt="test" width={100} height={100} />
                </div>
                <div className="skyplay-grid-block">
                    <Image src="/assets/sample-image-1.jpg" alt="test" width={100} height={100} />
                </div>
                <div className="skyplay-grid-block">
                    <Image src="/assets/sample-image-1.jpg" alt="test" width={100} height={100} />
                </div>
            </div>
        </div>
    )
}
