import React from 'react'
import {Link} from 'react-router-dom'
import Sectiontitle from '../section-title'
import couple1 from '../../images/couple/couple_1_500x500.jpg'
import couple2 from '../../images/couple/couple_2_500x500.jpg'
import couple3 from '../../images/couple/2.png'
import './style.css'

const Couple = () => {
    return(
        <div id="couple" className="about-wrap">
            <div className="couple-area section-padding pb-70">
                <Sectiontitle section={'Happy Cuple'}/>
                <div className="container">
                    <div className="couple-wrap">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-2">
                                    <div className="couple-img">
                                        <img src={couple1} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h1>Lưu Hồng Hảo</h1>
                                            <p>Muốn ấm áp thì tìm mùa hạ.<br />
                                            Muốn tập tạ thì ra phòng gym. <br />
                                            Muốn lim dim thì đi lên giường.<br />
                                            Muốn yên ấm tới nhà tìm em.<br />
                                            </p>
                                        </div>
                                        <div className="social-icon">
                                            <ul className="d-flex">
                                                <li><Link to="/" ><span className="fab fa-facebook"></span></Link></li>
                                                <li><Link to='/'><span className="fab fa-tiktok"></span></Link></li>
                                                <li><Link to='/'><span className="fab fa-linkedin"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 couple-single">
                                <div className="couple-shape">
                                   <img src={couple3} alt="shape"/>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-3">
                                    <div className="couple-img couple-img-2">
                                        <img src={couple2} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h1>Đặng Trung Nguyên</h1>
                                            <p>Mình nắm tay thưa chuyện cùng mẹ cha.<br />
                                                Bão táp, mưa sa cũng nguyện sẻ chia.<br />
                                                Hẹn thề trăm năm vững bền chân tình.<br />
                                                Anh này, cùng em già đi kiếp này nhé?</p>                   
                                        </div>
                                        <div className="social-icon">
                                            <ul className="d-flex">
                                                <li><a href='https://www.facebook.com/nguyen.trigger' target='_blank' rel="noopener noreferrer"><span className="fab fa-facebook"></span></a></li>
                                                <li><Link to='/'><span className="fab fa-tiktok"></span></Link></li>
                                                <li><Link to='/'><span className="fab fa-linkedin"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Couple;