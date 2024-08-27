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
                                <h3>Description</h3>
                                <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                                <span>256 Apay Road,Califonia Bong, London</span>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
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
                            <h3>Description</h3>
                            <span>Sunday, 25 June 2023, 11:00 AM</span>
                            <span>Trung Tam Van Hoa Cong Đong, Phuoc Binh, Long Thinh, Dong Nai</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
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
                            <h3>Description</h3>
                            <span>Saturday, 08 July 07, 11:00 AM</span>
                            <span>Nha hang tiec cuoi Quynh Anh, Van Gia</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
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