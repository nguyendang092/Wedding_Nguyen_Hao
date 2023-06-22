import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gift1 from '../../images/gift/banking_MB_200x150.png'
import gift2 from '../../images/gift/banking_VCB_200x150.png'
import './style.css'


class Gift extends Component {
    render() {
      var settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
      return (
          <div className="gift-area">
              <div className="container">
                    <div className="col-12">
                      <div className="section-title text-center">
                          <h2>Thank you!</h2>
                          <p>Lời đầu tiên, cám ơn bố mẹ những người đã yêu thương nuôi dạy mình khôn lớn và được như ngày hôm nay. Lời thứ hai, cám ơn các bạn đã chung vui cùng tụi mình. Lời cuối cùng, cám ơn các bạn đã gửi những lời chúc, những món quà tuyệt vời đến gia đình nhỏ của mình.</p>
                      </div>
                  </div>
                  <div className="row gift-item">
                      <div className="col-lg-12">
                        <Slider {...settings}>
                            <div className="item">
                                <img src={gift1} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift2} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift1} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift2} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift1} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift2} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift1} alt=""/>
                            </div>
                            <div className="item">
                                <img src={gift2} alt=""/>
                            </div>
                            </Slider>
                      </div>
                  </div>
              </div>
          </div>
      );
    }
  }

export default Gift;