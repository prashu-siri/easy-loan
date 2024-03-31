import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const Footer = () => {
  return ( 
    <div className="footer">
      <div>
        <div className="logo-wrapper">
          <p className='logo'>EL</p>
          <p className='logo-ab'>EasyLoan</p>
        </div>
        <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias 
          repudiandae voluptatibus cupiditate rerum, maxime deleniti?</p>
      </div>
      <div>
        <p className="footer__item-header">Quick Links</p>
        <ul className="footer__list">
          <li><a href="/">Work</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Products</a></li>
          <li><a href="/">Tips & Tricks</a></li>
        </ul>  
      </div>
      <div>
        <p className="footer__item-header">Services</p>
        <ul className="footer__list">
          <li><a href="/">Home Loan</a></li>
          <li><a href="/">Car Loan</a></li>
          <li><a href="/">Personal Loan</a></li>
        </ul>  
      </div>
      <div>
        <p className="footer__item-header">NewsLetter</p>
        <p>Subscribe to our newsletter</p>
        <div className="subscribe">
          <input type="text" className="subscribe__input" placeholder="Enter your email"/>
          <button className="subscribe__btn"><IoSend /></button>
        </div>
        <div className="footer__icons">
          <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
            <FaSquareFacebook />
          </a>
          <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
            <IoLogoInstagram />
          </a>
          <a href="http://www.linkedin.com" target="_blank" rel="noreferrer">
            <TiSocialLinkedin />
          </a>
          <a href="http://www.youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
   );
}
 
export default Footer;