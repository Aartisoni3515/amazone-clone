import React, { Component } from "react";
import { Link } from "react-router-dom";

import AdvertisementFour from "./AdvertisementFour/AdvertisementFour";
import AdvertisementOne from "./AdvertisementOne/AdvertisementOne";
import "./Mainpage.css";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bigimage1 from "../../amazon-image/bigimage1.jpg";
import bigimage2 from "../../amazon-image/bigimage2.jpg";
import bigimage3 from "../../amazon-image/bigimage3.jpg";
import bigimage4 from "../../amazon-image/bigimage4.jpg";
import sari1 from "../../amazon-image/sari1.jpg";
import sari2 from "../../amazon-image/sari2.jpg";
import sari3 from "../../amazon-image/sari3.jpg";
import sari5 from "../../amazon-image/sari5.jpg";
import sari6 from "../../amazon-image/sari6.jpg";
import sari7 from "../../amazon-image/sari7.jpg";
import sari8 from "../../amazon-image/sari8.jpg";
import blacklogo from "../../amazon-image/blacklogo.webp";
// import internet  from "../../amazon-image/internet.png"
import { MdLanguage } from "react-icons/md";
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    let arr = [
      {
        type: "one",
        header: "Up to 40% off | Home & Kitchen",
        definition: [
          "https://ik.imagekit.io/amazon1234/box1_3_RvMp5Dkcd.jpg?updatedAt=1627118732916",
          "https://ik.imagekit.io/amazon1234/box1_3_RvMp5Dkcd.jpg?updatedAt=1627118732916",
        ],
      },
      {
        type: "four",
        header: "Shop by Category",
        definition: [
          "https://ik.imagekit.io/amazon1234/box3_2_UjLOl0OQn.jpg?updatedAt=1627118737037",
          "https://ik.imagekit.io/amazon1234/box3_3_BNpkVUIf4.jpg?updatedAt=1627118735915",
          "https://ik.imagekit.io/amazon1234/box3_4_DQnzfSDxh.jpg?updatedAt=1627118740952",
          "https://ik.imagekit.io/amazon1234/box3_2_UjLOl0OQn.jpg?updatedAt=1627118737037",
        ],
      },
      {
        type: "one",
        header: "Up to 70% off | Electronics clearance store",
        definition: [
          "https://ik.imagekit.io/amazon1234/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204__nBkAcb2wW.jpg?updatedAt=1627731880089",
        ],
      },
      {
        type: "one",
        header: "Up to 70% off | Electronics clearance store",
        definition: [
          "https://ik.imagekit.io/amazon1234/box2_4_b005M-CUn.jpg?updatedAt=1627118750081",
        ],
      },
      {
        type: "one",
        header: "Up to 70% off | Electronics clearance store",
        definition: [
          "https://ik.imagekit.io/amazon1234/box4_1_heFiuUTQ5.jpg?updatedAt=1627118751289",
        ],
      },
      {
        type: "four",
        header: "Up to 30% off on Cooking essentials | Amazon Fresh",
        definition: [
          "https://ik.imagekit.io/amazon1234/box4_2_j7cfsH163.jpg?updatedAt=1627118749199",
          "https://ik.imagekit.io/amazon1234/tab9_VVlk1J1_x.jpg?updatedAt=1627118745782",
          "https://ik.imagekit.io/amazon1234/box2_1_Hdj80YRHw.jpg?updatedAt=1627118747528",
          "https://ik.imagekit.io/amazon1234/box2_3_1Hme7yOEM.jpg?updatedAt=1627118742182",
        ],
      },
      {
        type: "four",
        header: "Inspired by your Wish List",
        definition: [
          "https://ik.imagekit.io/amazon1234/tab8_oJnWNwvIX.jpg?updatedAt=1627118746586",
          "https://ik.imagekit.io/amazon1234/box2_3_1Hme7yOEM.jpg?updatedAt=1627118742182",
          "https://ik.imagekit.io/amazon1234/box1_4_yVnP7knQNO.jpg?updatedAt=1627118740078",
          "https://ik.imagekit.io/amazon1234/tab10_dcLpRR5LD.jpg?updatedAt=1627118739258",
        ],
      },
      {
        type: "one",
        header: "Festive latest launches",
        definition: [
          "https://ik.imagekit.io/amazon1234/box1_3_RvMp5Dkcd.jpg?updatedAt=1627118732916",
        ],
      },
    ];
    this.setState({ list: arr });
  }
  render() {
    return (
      <div className="mainpage">
        <div  className="img-header">
          <Carousel autoPlay={true}>
            <div>
              <img src={bigimage1} alt="" />
            </div>
            <div>
              <img src={bigimage2} alt="" />
            </div>
            <div>
              <img src={bigimage3} alt="" />
            </div>
            <div>
              <img src={bigimage4} alt="" />
            </div>
          </Carousel>
        </div>
        <div
          style={{
            paddingTop: "390px",
            display: "flex",
            flexWrap: "wrap",
            position: "relative",
            justifyContent: "center",
          }}
        >
          {this.state.list.map((value) =>
            value.type === "one" ? (
              <Link to="/DisplayContent">
                <AdvertisementOne definition={value} />
              </Link>
            ) : (
              <Link to="/DisplayContent">
                <AdvertisementFour definition={value} />
              </Link>
            )
          )}

          {/* <AdvertisementOne />
                  <AdvertisementFour />
                  <AdvertisementOne />
                  <AdvertisementOne />
                  <AdvertisementOne />
                  <AdvertisementFour />
                  <AdvertisementFour />
                  <AdvertisementOne /> */}
        </div>
        {/* ................................................................................................................................ */}

        <div className="main2">
          <h2>
            {" "}
            Up to 70% off | Bestsellers in women's clothing{" "}
            <span>see all offers</span>
          </h2>
          <div className="images">
            <div>
              <img src={sari1} alt="" />
              <img src={sari2} alt="" />
            </div>
            <div>
              <img src={sari3} alt="" />
              <img src={sari5} alt="" />
            </div>
            <div>
              <img src={sari6} alt="" />
              <img src={sari7} alt="" />
            </div>
            <img src={sari8} alt="" />
          </div>
        </div>
        <div className="break">
          <hr />
        </div>
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
      </div>
    );
  }
}

export default MainPage;
