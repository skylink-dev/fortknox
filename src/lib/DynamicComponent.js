import React from 'react'
import HalfShowSlider from '@/components/section/HalfShowSlider'
import IconCard from '@/components/section/IconCard'
import ImageCard from '@/components/section/ImageCard'
import SingleBanner from '@/components/section/SingleBanner'
import StylishCard2 from '@/components/section/StylishCard2'
import NewsLetter from '@/components/section/NewsLetter'
import ThreeBannerImage from '@/components/section/ThreeBannerImage'
import SixBannerImage from '@/components/section/SixBannerImage'
import FAQ from '@/components/section/FAQ'
import FourIcon from '@/components/section/FourIcon'
import PricingPlan from '@/components/section/PricingPlan'
import DynamicGrid2 from '@/components/section/DynamicGrid2'
import EqualColumnGrid from '@/components/section/EqualColumnGrid'
import InnerBanner from '@/components/section/InnerBanner'
import MarquessLogo from '@/components/section/MarquessLogo'
import PortfolioGrid from '@/components/section/PortfolioGrid'
import Banner from "@/components/section/Banner";
import DynamicGrid from "@/components/section/DynamicGrid";
import ImageCta from "@/components/section/ImageCta";
import MultiTabCard from "@/components/section/MultiTabCard";
import VideoBanner from '@/components/section/VideoBanner'

import ContactUs from '@/components/section/ContactUs'
import DataCenterHero from '@/components/HeroComponent'

export default function DynamicComponent({ data, id }) {
    switch (data.code) {
        case 'banner':
            return <Banner key={id} data={data} />;
        case 'multitab':
            return <MultiTabCard key={id} cardsData={data} />;
        case 'grid':
            return <DynamicGrid key={id} data={data} />;
        case 'imagecta':
            return <ImageCta key={id} data={data} />;
        case 'videobanner':
            return <VideoBanner key={id} data={data}></VideoBanner>;
        case 'innerbanner':
            return <InnerBanner key={id} slides={data.cards}></InnerBanner>
        case 'marquesslogo':
            return <MarquessLogo key={id} data={data.cards}></MarquessLogo>
        case 'dynamicgrid2':
            return <DynamicGrid2 key={id} data={data}></DynamicGrid2>
        case 'portfoliogrid':
            return <PortfolioGrid key={id} data={data}></PortfolioGrid>
        case 'equalcolumngrid':
            return <EqualColumnGrid key={id} data={data}></EqualColumnGrid>
        case 'newsletter':
            return <NewsLetter key={id} data={data}></NewsLetter>
        case 'halfshowslider':
            return <HalfShowSlider key={id} slides={data.cards}></HalfShowSlider>
        case 'singlebanner':
            return <SingleBanner key={id} data={data}></SingleBanner>
        case 'iconcard':
            return <IconCard key={id}></IconCard>
        case 'stylishcard':
            return <StylishCard2 key={id}></StylishCard2>
        case 'imagecard':
            return <ImageCard key={id}></ImageCard>
        case 'newsletter':
            return <NewsLetter key={id} data={data}></NewsLetter>
        case "threebannerimage":
            return <><ThreeBannerImage key={id} data={data}></ThreeBannerImage></>
        case "sixbannerimage":
            return <><SixBannerImage key={id} data={data}></SixBannerImage></>
        case "faq":
            return <><FAQ key={id} data={data}></FAQ></>
        case "fouricon":
            return <><FourIcon key={id} data={data}></FourIcon></>
        case "pricingplan":
            return <><PricingPlan key={id} data={data}></PricingPlan></>
        case "contactus":
            return <><ContactUs key={id} data={data}></ContactUs></>
        case "datacenterhero":
            return <><DataCenterHero key={id} data={data}></DataCenterHero></>
        default:
            return null;
    }
}
