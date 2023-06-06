import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import classnames from 'classnames';
import {Link} from 'react-router-dom'
import Sectiontitle from '../section-title'
import bride1 from '../../images/groomsmen-bridesmaid/PhamHuuPhuoc.jpg'
import bride2 from '../../images/groomsmen-bridesmaid/2.jpg'
import bride3 from '../../images/groomsmen-bridesmaid/NguyenNhuSam.jpg'
import bride4 from '../../images/groomsmen-bridesmaid/4.jpg'
import bride5 from '../../images/groomsmen-bridesmaid/5.jpg'
import bride6 from '../../images/groomsmen-bridesmaid/6.jpg'
import bride7 from '../../images/groomsmen-bridesmaid/NgocLinh_600x600.jpg'
import bride8 from '../../images/groomsmen-bridesmaid/BichTram_600x600.jpg'
import bride9 from '../../images/groomsmen-bridesmaid/NhuY_600x600.jpg'
import bride10 from '../../images/groomsmen-bridesmaid/Trang_600x600.jpg'
import bride11 from '../../images/groomsmen-bridesmaid/Tram_600x600.jpg'
import bride12 from '../../images/groomsmen-bridesmaid/YenNhi_600x600.jpg'

import './style.css'

const People = (props) => {
    const [activeTab, setActiveTab] = useState('1');

        const toggle = tab => {
          if(activeTab !== tab) setActiveTab(tab);
        }
    return(

        <div id="people" className="person-area section-padding pb-70">
            <div className="container">
                <Sectiontitle section={'Trai Tài & Gái Sắc'}/>
                <div className="person-area-menu">
                    <div className="person-btn">
                        <Nav tabs>
                            <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Trai Tài
                            </NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Gái Sắc
                            </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                        <div className="Groomsman-wrap">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride1} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><a href='https://www.facebook.com/phamhuuphuoc28101996' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-tiktok"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Phạm Hữu Phước</h3>
                                                <span>Best Friend</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride2} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><a href='https://www.facebook.com/lamasia.lama' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-tiktok"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Ngô Xuân Kiệt</h3>
                                                <span>Best Friend</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride3} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><a href='https://www.facebook.com/nhusam.gsg/' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-tiktok"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Nguyễn Như Sâm</h3>
                                                <span>Brother</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride4} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-tiktok"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Mr Abraham</h3>
                                                <span>Best Friend</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride5} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-tiktok"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Rohan Mithy</h3>
                                                <span>Brother</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride6} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-tiktok"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Lily Brown</h3>
                                                <span>Sister</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                        <div className="Ceremony-wrap">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride7} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-tiktok"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Phạm Thị Ngọc Linh</h3>
                                                <span>Sister</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride8} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                        <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-tiktok"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Đặng Thị Bích Trâm</h3>
                                                <span>Younger Sister</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride9} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                    <li><a href='https://www.facebook.com/profile.php?id=100021515796457' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                                                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-tiktok"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Lê Thị Như Ý</h3>
                                                <span>Younger Sister</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride10} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                    <li><a href='https://www.facebook.com/profile.php?id=100042029072798' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                                                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-tiktok"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Phạm Thị Thiên Trang</h3>
                                                <span>Younger Sister</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride11} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                    <li><a href='https://www.facebook.com/profile.php?id=100015721696643' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                                                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-tiktok"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Hà Thị Thùy Trâm</h3>
                                                <span>Younger Sister</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="person-wrap">
                                            <div className="person-img">
                                                <img src={bride12} alt=""/>
                                                <div className="social-list">
                                                    <ul>
                                                    <li><a href='https://www.facebook.com/profile.php?id=100081597424063' target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                                                        <li><Link to="/"><i className="fab fa-instagram"></i></Link></li>
                                                        <li><Link to="/"><i className="fab fa-tiktok"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="person-content">
                                                <h3>Nguyễn Thị Yến Nhi</h3>
                                                <span>Younger Sister</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
        
    )
}

export default People;