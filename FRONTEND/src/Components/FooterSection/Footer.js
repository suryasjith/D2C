import React from 'react';
import { Facebook , Twitter ,LinkedIn } from '@material-ui/icons'
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined'

import '../../Assets/css/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';




const Footer = () => {
    return ( <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <h6>About</h6>
                    <p className="text-justify">UNBLOK Shop <i>Do things for a cause </i> is an initiative  to help people who want to do make some changes in the world. And be a part of it.</p>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6>Categories</h6>
                    <ul className="footer-links">
                        <li><a href="http://scanfcode.com/category/c-language/">Mens Clothing</a></li>
                        <li><a href="http://scanfcode.com/category/front-end-development/">Ladies Clothing</a></li>
                        <li><a href="http://scanfcode.com/category/back-end-development/">Kids Clothing</a></li>
                        <li><a href="http://scanfcode.com/category/java-programming-language/">New Arrivals</a></li>
                        <li><a href="http://scanfcode.com/category/android/">Unblok Wallet</a></li>
                    </ul>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6>Quick Links</h6>
                    <ul className="footer-links">
                        <li><a href="http://scanfcode.com/about/">About Us</a></li>
                        <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                        <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Donate for a Cause </a></li>
                        <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                        <li><a href="http://scanfcode.com/sitemap/">UNBLOK LIFE</a></li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
        <a href="www.unblok.tech"> UNBLOK.shop</a>
            </p>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul className="social-icons">
                        <li><a className="facebook" href="www.unblok.tech"><Facebook  /></a></li>
                        <li><a className="twitter" href="www.unblok.tech"><Twitter /></a></li>
                        <li><a className="dribbble" href="www.unblok.tech"><FormatUnderlinedIcon /></a></li>
                        <li><a className="linkedin" href="www.unblok.tech"><LinkedIn /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>)


                    }

export default Footer;