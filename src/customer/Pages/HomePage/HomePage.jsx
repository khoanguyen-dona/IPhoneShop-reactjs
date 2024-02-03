 import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { iphones } from "../../../Data/iphones";


const HomePage = () => {
    return (
        <div>
            <MainCarousel/>
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10" >
                <HomeSectionCarousel data={iphones} productLine={'iphone'} />
                <HomeSectionCarousel data={iphones} productLine={'ipad'} />
                <HomeSectionCarousel data={iphones} productLine={'Macbook'} />
            </div> 
        </div> 
    )
}

export default HomePage
