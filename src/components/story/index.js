import React from 'react'
import {Link} from 'react-router-dom'
import strory1 from '../../images/story/1.jpg'
import strory2 from '../../images/story/2.jpg'
import strory3 from '../../images/story/3.jpg'
import strory4 from '../../images/story/4.jpg'
import './style.css'


const Story = () =>{
    return(
        <div id="story" className="story-area section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <h2>Love Story</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="story clearfix">
                            <div className="story-top"></div>
                            <div className="content-wrapper">
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory1} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Lần Đầu Tiên Gặp Gỡ</h2>
                                        <span className="date">July 20, 2017</span>
                                        <p className="story-text">Lần đầu tiên gặp gỡ của tụi mình là cô gái này xin việc tại Bách Hóa Xanh nơi mình làm việc. Ban đầu mình chẳng có chút ấn tượng gì cả, rồi cơ duyên lại đưa bạn này về siêu thị mình học việc nhưng lại được điều chuyển về siêu thị khác để làm. Lúc này mình cũng có chút ấn tượng về cô gái nên tìm cách giữ lại vợ mình lại siêu thị để làm việc cùng. Đấy là lần đầu tiên mình gặp vợ mình theo cách này, mình sẽ kể cho các bạn nghe về câu chuyện này tiếp theo nhé. Cùng đón chờ mình nha !</p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory2} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Chặng Đường Xa Xôi</h2>
                                        <span className="date">Dec 25, 2017</span>
                                        <p className="story-text">"Chặng Đường Xa Xôi" là cụm từ để miêu tả về hành trình chúng mình quen nhau, giữa Hồ Chí Minh và Đồng Nai là cung đường tụi mình hay di chuyển, cùng nhau trải qua những món ngon tuyệt vời, cùng nhau trải qua cung đường mưa gió, cùng nhau trải qua những lần bị công an tóm đầu vì chạy quá tốc độ và cùng nhau dầm mưa dải nắng. Cung đường này gắn liền với tụi mình rất nhiều kỉ niệm và thật sự rất vui vì được đồng hành cùng vợ mình trên cung đường này !</p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory3} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Ánh Mắt Quyết Định</h2>
                                        <span className="date">Jan 10, 2018</span>
                                        <p className="story-text">Mọi người hay nói "Ánh mắt là cửa sổ tâm hồn" và nó đúng trong trường hợp này. Mình và vợ mình va phải nhau bởi ánh mắt của những con người thuộc về nhau. Ánh mắt thể hiện thông điệp ngầm rằng </p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory4} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Những Lần Hờn Dỗi</h2>
                                        <span className="date">Jan 22, 2018</span>
                                        <p className="story-text">Yêu nhau không thể không có hờn dỗi, không có cãi nhau và tụi mình cũng như vậy. Tần suất còn nhiều hơn bình thường, đánh nhau có, chửi nhau cũng có, phá nhau cũng có, quậy và kiếm chuyện nhau thì có nốt. Nhiều lần tụi mình hờn dỗi nhau tới mức xém phải chia tay nhau rồi hihi nhưng chẳng thể hiểu sao vẫn có thể bên nhau tới giờ này.</p>                           
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div><div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory4} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Hành Trình Tích Lũy</h2>
                                        <span className="date">Jan 22, 2018</span>
                                        <p className="story-text">Cặp đôi nào cũng có hành trình tích lũy hành cho riêng mình và tụi mình chẳng ngoại lệ. Có thể tích lũy về tiền bạc, tích lũy về kiến thức, tích lũy cả về yêu thương. Tụi mình chẳng hòa hợp 1000% nhưng sẵn sàng tích lũy phong cách sống và cảm xúc để thấu hiểu và yêu thương nhau nhiều hơn. Đây là 1 quá trình rất dài có thể mất hơn cả đời người cũng có thể hơn cả thập kỷ để hiểu nhau. Và tụi mình đang xây dựng hành trình này.</p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={strory4} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Tù Chung Thân</h2>
                                        <span className="date">Jan 22, 2018</span>
                                        <p className="story-text">Sau rất nhiều năm truy đuổi, tổ công tác Ông Tơ - Bà Mối đã bắt được cặp đôi nguy hiểm " Trung Nguyên - Hồng Hảo". Và nay Ông Tơ - Bà Mối chốt mức án tù chung thân cho cặp đôi này. </p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/Blog-detail
                                            "  title="READ MORE">READ MORE</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="story-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Story;