import React from 'react'

import {Carousel} from "react-responsive-carousel";
import img1 from "../assests/3.jpg";
import img2 from "../assests/4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Services() {
  return (
    <div className="services">
<Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>

<div>
<img src={img1} alt="item1"/>
<p>Full Stack</p>
</div>

<div>
<img src={img2} alt="item1"/>
<p>suppert</p>
</div>




</Carousel>



    </div>
  )
}

export default Services