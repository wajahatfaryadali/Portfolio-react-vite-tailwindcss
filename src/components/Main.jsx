import React from 'react';
import img_1 from "../assets/hero_img_1.JPEG";
import img_2 from "../assets/hero_img_2.JPG";
// import image from "../assets/"
import { routes } from '../text/routes'

const Main = () => {
    return (
        <div id={routes.home}>
            <img src={img_1} alt="/img" />
        </div>
    )
}

export default Main