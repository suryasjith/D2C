import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { safeContent } from '../../../utils';
const IntroBanner = (props) =>{
   const introBanners = [
        {
            "image": "assets/images/home/sliders/slide-1.jpg",
            "srcSet": "assets/images/home/sliders/slide-1-480w.jpg",
            "subtitle": "Topsale Collection",
            "title": "Living Room<br/>Furniture"
        },
        {
            "image": "assets/images/home/sliders/slide-2.jpg",
            "srcSet": "assets/images/home/sliders/slide-2-480w.jpg",
            "subtitle": "News and Inspiration",
            "title": "New Arrivals"
        },
        {
            "image": "assets/images/home/sliders/slide-3.jpg",
            "srcSet": "assets/images/home/sliders/slide-3-480w.jpg",
            "subtitle": "Outdoor Furniture",
            "title": "Outdoor Dining <br/>Furniture"
        }
    ]
  const  banner =  [
        {
            "img": "assets/images/home/banners/intro/banner-1.jpg",
            "subtitle": "Clearence",
            "title": "Chairs & Chaises <br/>Up to 40% off",
            "btnText": "Shop Now"
        },
        {
            "img": "assets/images/home/banners/intro/banner-2.jpg",
            "subtitle": "New in",
            "title": "Best Lighting <br/>Collection",
            "btnText": "Discover Now",
            "adClass": "mb-0"
        }
    ]
   
    return (
        <div className={ `banner banner-display` }>
        <Link  >
            <div className="lazy-overlay bg-2"></div>

            <img
                src=""
                alt="banner"
                width={ 370 }
                height={ 205 }
                effect="blur"
            />
        </Link>

        <div className="banner-content">
            <h4 className="banner-subtitle text-darkwhite"><Link ></Link></h4>
            <h3 className="banner-title text-white"><Link  ></Link></h3>
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-white banner-link">Click<i className="icon-long-arrow-right"></i></Link>
        </div>
        </div>
 
    )
}

export default withRouter(IntroBanner); 