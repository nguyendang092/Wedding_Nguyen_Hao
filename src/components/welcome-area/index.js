import React from 'react'
import './style.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Welcome = () =>{
    return(
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                            <h2>Welcome to our big day</h2>
                            <p>Đây là ngày đặc biệt của 2 đứa mình cũng nhiều khoảnh khắc đáng nhớ trong đời. Ngày chung đôi đánh dấu ngày 2 đứa về chung nhà cùng nhau thực hiện những ước mơ mà cả 2 đã ấp ủ bấy lâu. Địa chỉ tổ chức nhà trai & nhà gái mình đính kèm phía dưới để mọi người dễ dàng tìm kiếm nha.</p>
                            <div className="btn"><AnchorLink href='#rsvp'>Nhà Trai</AnchorLink></div>
                            <div className="btn"><AnchorLink href='#event'>Nhà Gái</AnchorLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome;