import React from 'react';

export default function GridTextCard({ data }) {
    return (
        <section>
            <div className="container mx-auto px-4">
                <div className="grid gap-10 [grid-template-columns:28%_1fr_25%_28%] [grid-template-areas:'card1_card1_card2_card5''card3_card4_card4_card5']">
                    <div className="[grid-area:card1] bb-card-wrapper bb-card-1">
                        <div className="bb-card light-theme">
                            <div className="bb-bg bb-bg-video smart-media absolute overflow-hidden">
                                <video src="/assets/networking-bento-horizontal.mp4" className="esl-media-inner  [z-index:-2] [width:calc(100%_-_2px)] [height:calc(100%_-_2px)] [inset:1px]" preload="auto" loop tabIndex="-1" playsInline muted style={{ aspectRatio: "1.42222 / 1" }}
                                ></video>
                            </div>
                            <div className="bb-card-content">
                                <div className="typo5 text-only bb-text">
                                    <div className="txto-title-wrapper text-left">
                                        <h4 className="txto-title tag-h4 text-[24px]">
                                            <span className="inline-icon-quotation"></span>
                                            We can deploy AI for the good of humanity. The opportunity we have in front of us is enormous.
                                        </h4>
                                    </div>
                                    <div className="txto-description rich-text-container">
                                        <p className="body-copy-small">
                                            <span className="body-copy">Antonio Neri, CEO of HPE</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bb-cta-wrapper">
                                <a
                                    className="cta hpe-arrow-link landmark bb-cta standard green"
                                    href="#"
                                    target="_self">
                                    <span className="text">
                                        Read Antonio’s
                                        <span className="arrow-wrapper">
                                            post
                                            <div className="arrow"></div>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="[grid-area:card2] bb-card-wrapper bb-card-2">
                        <div className="bb-card">Card 2 content</div>
                    </div>
                    <div className="[grid-area:card3] bb-card-wrapper bb-card-3">
                        <div className="bb-card">Card 3 content</div>
                    </div>
                    <div className="[grid-area:card4] bb-card-wrapper bb-card-4">
                        <div className="bb-card">Card 4 content</div>
                    </div>
                    <div className="[grid-area:card5] bb-card-wrapper bb-card-5">
                        <div className="bb-card">Card 5 content</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
