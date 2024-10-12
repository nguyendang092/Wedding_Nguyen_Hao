import React from 'react'
import {Link} from 'react-router-dom'
import Sectiontitle from '../section-title'
import strory1 from '../../images/events/LeCuoi.png'
import strory2 from '../../images/events/TiecCuoi1.png'
import strory3 from '../../images/events/TiecCuoi2.png'
import './style.css'

const Location = () => {
    return(  
    <div id="event" className="service-area section-padding">
        <div className="container">
            <Sectiontitle section={'When & Where'}/>
            <div className="service-area-menu">
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={strory1} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ceromony-content">
                                <h3>Chi tiết</h3>
                                <span>Sunday, 25 June 2023, 11:00 AM</span>
                                <span>Saturday, 08 July 07, 11:00 AM</span>
                                <p>Cùng nhau đếm ngược thời gian cùng tụi mình để đón chờ những điều thú vị nha.</p>
                                <Link to="/">See Location</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Ceremony-wrap">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="ceromony-content ceromony-content2">
                            <h3>Chi tiết</h3>
                            <span>Sunday, 25 June 2023, 11:00 AM</span>
                            <span>Trung Tâm Văn Hóa Cộng Đồng, Phước Bình, Long Thành, Đồng Nai</span>
                            <p>Đây là địa điểm & thời gian tổ chức tiệc bên nhà gái. Mong sự hiện diện của tất cả mọi người là niềm vinh hạnh cho vợ chồng chúng mình, nhớ địa chỉ & thời gian để đến chung vui cùng vợ chồng chúng mình nha. Cám ơn tất cả mọi người.</p>
                            <a href='https://maps.app.goo.gl/gQNi65GFZE2pZ94P9?g_st=iz' target='_blank' rel="noopener noreferrer">See Location</a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="ceromony-img">
                            <img src={strory2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Ceremony-wrap">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="ceromony-img">
                             <img src={strory3} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="ceromony-content">
                            <h3>Chi tiết</h3>
                            <span>Saturday, 08 July 07, 11:00 AM</span>
                            <span>Nhà hàng tiệc cưới Quỳnh Anh, Vạn Giã</span>
                            <p>Đây là địa điểm & thời gian tổ chức tiệc bên nhà trai. Mong sự hiện diện của tất cả mọi người là niềm vinh hạnh cho vợ chồng chúng mình, nhớ địa chỉ & thời gian để đến chung vui cùng vợ chồng chúng mình nha. Cám ơn tất cả mọi người.</p>
                            <a href='https://maps.app.goo.gl/zDeS4ojdqTGBa6cZ7' target='_blank' rel="noopener noreferrer">See Location</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Location;