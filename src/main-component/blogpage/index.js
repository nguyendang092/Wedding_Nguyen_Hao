import React from  'react';
import {Link} from 'react-router-dom'
import Breadcrumbs from '../../components/breadcrumbs'
import Navbar2 from '../../components/Navbar2'
import BlogSidebar from '../../components/BlogSidebar'
import mediaimg1 from '../../images/blog/img-7.jpg'
import mediaimg2 from '../../images/blog/img-8.jpg'
import mediaimg3 from '../../images/blog/img-9.jpg'
import mediaimg4 from '../../images/blog/author.jpg'

import './style.css'

const BlogPage = () => {

    return(
        <div id="home" className="BlogPage-br">
            <Navbar2/>
            <Breadcrumbs Blog={'Blog List'} Blogd={'Blog'}/>
            <div className="blog-pg-section">
            <div className="container">
                <div className="row">
                    <div className="col col-md-8 col-12">
                        <div className="blog-posts blog-posts-2 clearfix">
                            <div className="post">
                                <div className="entry-media">
                                    <img src={mediaimg1} alt=""/>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={mediaimg4} alt=""/>
                                            &nbsp; By <Link to="/blog">Lily Anne</Link>
                                        </li>
                                        <li>Octobor 12,2019</li>
                                    </ul>
                                    <h3><Link to='/Blog-details'>Our Amaizing Wedding Story now open</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't </p>
                                    <Link to='/Blog-details'>Read More..</Link>
                                </div>
                            </div>
                            <div className="post">
                                <div className="entry-media">
                                    <img src={mediaimg2} alt=""/>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={mediaimg4} alt=""/>
                                            &nbsp; By <Link to="/blog">Lily Anne</Link>
                                        </li>
                                        <li>Octobor 12,2019</li>
                                    </ul>
                                    <h3><Link to='/Blog-details'>Wedding Rings, Jewelery And Accessories</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't </p>
                                    <Link to='/Blog-details'>Read More..</Link>
                                </div>
                            </div>
                            <div className="post format-quote">
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={mediaimg4} alt=""/>
                                            &nbsp; By <Link to="/blog">Lily Anne</Link>
                                        </li>
                                        <li>Octobor 12,2019</li>
                                    </ul>
                                    <h3><Link to='/Blog-details'>Our wedding ceremony will be the top ceremony ever</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't </p>
                                    <Link to='/Blog-details'>Read More..</Link>
                                </div>
                            </div>
                            <div className="post">
                                <div className="entry-media">
                                    <img src={mediaimg3} alt=""/>
                                </div>
                                <div className="details">
                                    <ul className="entry-meta">
                                        <li>
                                            <img src={mediaimg4} alt=""/>
                                            &nbsp; By <Link to="/blog">Lily Anne</Link>
                                        </li>
                                        <li>Octobor 12,2019</li>
                                    </ul>
                                    <h3><Link to='/Blog-details'>There are many variations of passages of Lorem Ipsum available,</Link></h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't </p>
                                    <Link to='/Blog-details'>Read More..</Link>
                                </div>
                            </div>
                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link to='/blog' aria-label="Previous">
                                            <i className="fa fa-arrow-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link to='/blog'>1</Link></li>
                                    <li><Link to='/blog'>2</Link></li>
                                    <li><Link to='/blog'>3</Link></li>
                                    <li>
                                        <Link to='/blog' aria-label="Next">
                                            <i className="fa fa-arrow-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-4 col-12">
                        <BlogSidebar/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BlogPage;