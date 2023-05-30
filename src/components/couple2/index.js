import React from 'react'
import {Link} from 'react-router-dom'
import couple1 from '../../images/couple/1.jpg'
import couple2 from '../../images/couple/2.jpg'
import couple3 from '../../images/couple/2.png'
import './style.css'

const Couple2 = () => {
    return(
        <div id="couple" className="couple-area section-padding pb-70">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <h2>Happy Cuple</h2>
                    </div>
                </div>
                <div className="couple-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 couple-single">
                            <div className="couple-wrap2">
                                <div className="couple-img3">
                                    <img src={couple1} alt=""/>
                                </div>
                                <div className="couple-text">
                                    <div className="couple-content">
                                        <h4>Lưu Hồng Hảo</h4>
                                        <p>Muốn ấm áp thì tìm mùa hạ.<br />
                                            Muốn tập tạ thì ra phòng gym. <br />
                                            Muốn lim dim thì đi lên giường.<br />
                                            Muốn yên tấm tới nhà tìm em.<br />
                                            </p>
                                    </div>
                                    <div className="social-icon">
                                        <ul className="d-flex">
                                            <li><Link to="/home2"><i className="fab fa-facebook"></i></Link></li>
                                            <li><Link to="/home2"><i className="fab fa-tiktok"></i></Link></li>
                                            <li><Link to="/home2"><i className="fab fa-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 couple-single">
                            <div className="couple-img2">
                                <img src={couple3} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 couple-single md-0">
                            <div className="couple-wrap2">
                                <div className="couple-img3">
                                     <img src={couple2} alt=""/>
                                </div>
                                <div className="couple-text">
                                    <div className="couple-content">
                                        <h4>Đặng Trung Nguyên</h4>
                                        <p>Mình nắm tay thưa chuyện cùng mẹ cha.<br />
                                                Bão táp, mưa sa cũng nguyện sẻ chia.<br />
                                                Hẹn thề trăm năm vững bền chân tình.<br />
                                                Anh này, cùng em già đi kiếp này nhé?</p>     
                                    </div>
                                    <div className="social-icon">
                                        <ul className="d-flex">
                                            <li><Link to="/home2"><i className="fab fa-facebook"></i></Link></li>
                                            <li><Link to="/home2"><i className="fab fa-tiktok"></i></Link></li>
                                            <li><Link to="/home2"><i className="fab fa-linkedin"></i></Link></li>
                                        </ul>
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

export default Couple2;