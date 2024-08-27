import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileMenu from '../../components/MobileMenu'
import './style.css'
const Header = () => {
    return(
        <div className="Header_root">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-10">
                            <div className="logo">
                                <h2><AnchorLink href='#home'>Nguyen<span><i className="fa fa-heart" aria-hidden="true"></i></span>Hao</AnchorLink></h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu d-lg-block d-none">
                                <ul className="mobail-menu d-flex">
                                    <li><AnchorLink href='#couple'>Couple</AnchorLink></li>
                                    <li><AnchorLink href='#story'>Love</AnchorLink></li>
                                    <li><AnchorLink href='#people'>Trai Tài - Gái Sắc</AnchorLink></li>
                                    <li><AnchorLink href='#event'>Địa Điểm</AnchorLink></li>
                                    <li><AnchorLink href='#gallery'>Đáng Nhớ</AnchorLink></li>
                                    <li><AnchorLink href='#rsvp'>Xác nhận</AnchorLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
             </div>
      </div> 
    )
}
export default Header;
