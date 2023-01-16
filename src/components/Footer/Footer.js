import React from 'react'
import "./Footer.css";
import blacklogo from "../../amazon-image/blacklogo.webp";
import { MdLanguage } from "react-icons/md";


const Footer = () => {
  return (
    <>
 <div className="footer-container">
          <div className="footer-content">
            <h3>Back to top</h3>

            <div className="list">
              <ul className="list-items">
                <span>
                  <li>Get to know Us</li>
                </span>
                <li>About Us</li>
                <li> Careers</li>
                <li> Press Releases</li>
                <li>Amazon Science</li>
              </ul>

              <ul className="list-items">
                <span>
                  {" "}
                  <li> Connect with Us</li>
                </span>
                <li>Facebook</li>
                <li> Twitter</li>
                <li> Instagram</li>
              </ul>
              <ul className="list-items">
                <span>
                  {" "}
                  <li> Make Money with Us</li>{" "}
                </span>
                <li> Sell on Amazon </li>
                <li> Sell under Amazon Accelerator</li>
                <li> Protect and Build Your Brand</li>
                <li> Amazon Global Selling</li>
                <li> Become an Affiliate</li>
                <li> Fulfilment by Amazon</li>
                <li> Advertise Your Products</li>
                <li> Amazon Pay on Merchants</li>
              </ul>
              <ul className="list-items">
                <span>
                  <li> Let Us Help You </li>{" "}
                </span>
                <li> COVID-19 and Amazon </li>
                <li> Your Account </li>
                <li> Returns Centre </li>
                <li> 100% Purchase Protection </li>
                <li> Amazon App Download </li>
                <li> Amazon Assistant Download </li>
                <li> Help </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="break" style={{ marginTop: "130px", opacity: "0.5" }}>
          <hr />
        </div>
        <div className="footer-foot">
          <div className="footer-des">
            <img src={blacklogo} alt="" />
          </div>
          <div className="footer-con">
            <h4>
              {" "}
              <MdLanguage /> English
            </h4>
          </div>
        </div>

        <ul className="footer-list">
          <li>Australia</li>
          <li>Brazil</li>
          <li>Canada</li>
          <li>China</li>
          <li>France </li>
          <li>Germeny</li>
          <li>italy</li>
          <li>Mexico</li>

          <li> Netherlands</li>
          <li>Poland</li>
          <li>Singapore</li>
          <li>Spain</li>
          <li>Turkey</li>
          <li>United Arab Emirates</li>
        </ul>
        <ul className="footer-list1">
          <li>United Kingdom</li>
          <li>United States</li>
        </ul>

        <div className="footer-end">
          <div className="list-items4">
            <ul>
              <li>
                AbeBooks <br />
                Books, art <br />& collectibles
              </li>
              <li>
                {" "}
                Amazon Web Services <br /> Scalable Cloud <br /> Computing
                Services{" "}
              </li>
              <li>
                Audible <br /> Download <br />
                Audio Books
              </li>
              <li>
                DPReview <br /> Digital <br /> Photography
              </li>
              <li>
                {" "}
                IMDb Movies, TV <br /> & Celebrities
              </li>
            </ul>
          </div>

          <div className="list-items4">
            <ul>
              <li>
                Shopbop
                <br />
                Designer <br />
                Fashion Brands
              </li>
              <li>
                Amazon Business <br />
                Everything For <br />
                Your Business
              </li>
              <li>
                Prime Now <br />
                2-Hour Delivery
                <br />
                on Everyday Items
              </li>

              <li>
                Amazon Prime Music <br />
                90 million songs, ad-free <br />
                Over 15 million podcast episodes{" "}
              </li>
            </ul>
          </div>

          <p className="para">
            Conditions of Use & Sale Privacy Notice Interest-Based Ads <br />©
            1996-2022, Amazon.com, Inc. or its affiliates
          </p>
        </div>

      
    </>
  )
}

export default Footer
