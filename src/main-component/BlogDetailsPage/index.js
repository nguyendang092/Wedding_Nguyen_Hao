import React from 'react';
import {Link} from 'react-router-dom'
import BlogSidebar from '../../components/BlogSidebar'
import Breadcrumbs from '../../components/breadcrumbs'
import Navbar2 from '../../components/Navbar2'
import CommentForm from '../../components/CommentForm'
import mediaimg1 from '../../images/blog/img-7.jpg'
import mediaimg4 from '../../images/blog/author.jpg'
import Autorimg from '../../images/blog-details/author.jpg'
import comentimg1 from '../../images/blog-details/comments-author/img-1.jpg'
import comentimg2 from '../../images/blog-details/comments-author/img-2.jpg'
import comentimg3 from '../../images/blog-details/comments-author/img-3.jpg'

import './style.css'

const BlogPage = () => {

    return (
        <div id="home" className="BlogPage-br">
            <Navbar2 />
            <Breadcrumbs Blog={'Blog Details'} Blogd={'Blog Details'}/>
            <div className="blog-pg-section blog-single-section">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8 col-12 col-12">
                            <div className="blog-posts blog-posts-2 clearfix">
                                <div className="post">
                                    <div className="entry-media">
                                        <img src={mediaimg1} alt="" />
                                    </div>
                                    <div className="details">
                                        <ul className="entry-meta">
                                            <li>
                                                <img src={mediaimg4} alt="" />
                                                &nbsp; By <Link to="/Blog-details">Lily Anne</Link>
                                            </li>
                                            <li>Octobor 12,2019</li>
                                        </ul>
                                        <h3>Our Amaizing Wedding Story now open</h3>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't </p>
                                    </div>
                                </div>
                                <blockquote>“If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat”</blockquote>
                                <div className="tag-share clearfix">
                                    <div className="tag">
                                        <ul>
                                            <li><Link to='/Blog-details'>Wedding</Link></li>
                                            <li><Link to='/Blog-details'>Party</Link></li>
                                            <li><Link to='/Blog-details'>Love</Link></li>
                                        </ul>
                                    </div>
                                    <div className="share">
                                        <ul>
                                            <li><Link to='/Blog-details'><span className="fa fa-facebook"></span></Link></li>
                                            <li><Link to='/Blog-details'><span className="fa fa-twitter"></span></Link></li>
                                            <li><Link to='/Blog-details'><span className="fa fa-linkedin"></span></Link></li>
                                            <li><Link to='/Blog-details'><span className="fa fa-instagram"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="author-box">
                                    <div className="author-avatar">
                                        <Link to="/Blog-details"><img src={Autorimg} alt="Autorimg" /></Link>
                                    </div>
                                    <div className="author-content">
                                        <Link to="/Blog-details" className="author-name">Henry Joyes</Link>
                                        <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                        <div className="socials">
                                            <ul className="social-link">
                                                <li><Link to='/Blog-details'><span className="fa fa-facebook"></span></Link></li>
                                                <li><Link to='/Blog-details'><span className="fa fa-twitter"></span></Link></li>
                                                <li><Link to='/Blog-details'><span className="fa fa-linkedin"></span></Link></li>
                                                <li><Link to='/Blog-details'><span className="fa fa-instagram"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="more-posts clearfix">
                                    <div className="previous-post">
                                        <Link to="/Blog-details">
                                            <span className="post-control-link">Previous</span>
                                        </Link>
                                    </div>
                                    <div className="next-post">
                                        <Link to="/Blog-details">
                                            <span className="post-control-link">Next post</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="comments-area">
                                    <div className="comments-section">
                                        <h3 className="comments-title">Comments</h3>
                                        <ol className="comments">
                                            <li className="comment even thread-even depth-1" id="comment-1">
                                                <div id="div-comment-1">
                                                    <div className="comment-theme">
                                                        <div className="comment-image"><img src={comentimg1} alt="" /></div>
                                                    </div>
                                                    <div className="comment-main-area">
                                                        <div className="comment-wrapper">
                                                            <div className="comments-meta">
                                                                <h4>John Abraham <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                            </div>
                                                            <div className="comment-area">
                                                                <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                <div className="comments-reply">
                                                                    <Link className="comment-reply-link" to="/Blog-details"><span>Reply</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="children">
                                                    <li className="comment">
                                                        <div>
                                                            <div className="comment-theme">
                                                                <div className="comment-image"><img src={comentimg2} alt="" /></div>
                                                            </div>
                                                            <div className="comment-main-area">
                                                                <div className="comment-wrapper">
                                                                    <div className="comments-meta">
                                                                        <h4>Lily Watson <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                                    </div>
                                                                    <div className="comment-area">
                                                                        <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                        <div className="comments-reply">
                                                                            <Link className="comment-reply-link" to="/Blog-details"><span>Reply</span></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li className="comment">
                                                                <div>
                                                                    <div className="comment-theme">
                                                                        <div className="comment-image"><img src={comentimg3} alt="" /></div>
                                                                    </div>
                                                                    <div className="comment-main-area">
                                                                        <div className="comment-wrapper">
                                                                            <div className="comments-meta">
                                                                                <h4>John Abraham <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                                            </div>
                                                                            <div className="comment-area">
                                                                                <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                                <div className="comments-reply">
                                                                                    <Link className="comment-reply-link" to="/Blog-details"><span>Reply</span></Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="comment">
                                                <div>
                                                    <div className="comment-theme">
                                                        <div className="comment-image"><img src={comentimg1} alt="" /></div>
                                                    </div>
                                                    <div className="comment-main-area">
                                                        <div className="comment-wrapper">
                                                            <div className="comments-meta">
                                                                <h4>John Abraham <span className="comments-date">Octobor 28,2018 At 9.00am</span></h4>
                                                            </div>
                                                            <div className="comment-area">
                                                                <p>I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, </p>
                                                                <div className="comments-reply">
                                                                    <Link className="comment-reply-link" to="/Blog-details"><span>Reply</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                    <CommentForm/>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4 col-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage;