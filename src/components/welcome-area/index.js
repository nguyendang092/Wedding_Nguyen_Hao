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
                            <p>There are moments we will forever remember in our lives as memorable milestones. Today is that day. Your participation are the best you can give us. We hope you can arrange to celebrate our big day together</p>
                            <div className="btn"><AnchorLink href='#rsvp'>RSVP</AnchorLink></div>
                            <div className="btn"><AnchorLink href='#event'>Location</AnchorLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Welcome;