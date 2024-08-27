import React, { Component } from 'react';
import './style.css'

class Rsvp extends Component {

    state = {
        name: '',
        email: '',
        rsvp: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            rsvp,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (rsvp === '') {
            error.rsvp = "Select your number of rsvp";
        }
        if (events === '') {
            error.events = "Select your event list";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.rsvp === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                rsvp: '',
                events: '',
                notes: '',
                error: {}
            })
        }

        console.log(this.state);
        console.log(this.state.error.notes);
    }

    render() {

        const { name,
            email,
            rsvp,
            events,
            notes, error } = this.state;
        return (
            <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="rsvp-wrap">
                                <div className="col-12">
                                    <div className="section-title section-title4 text-center">
                                        <h1>Be Our Guest</h1>
                                        <p>Please reserve before June 25, 2023.</p>
                                    </div>
                                </div>
                                <form onSubmit={this.subimtHandler}>
                                    <div className="contact-form form-style">
                                        <div className="row">
                                            <div className="col-12 col-sm-6">
                                                <input type="text" value={name} onChange={this.changeHandler} placeholder="Cho mình xin Tên nèo" id="fname" name="name" />
                                                <p>{error.name ? error.name : ''}</p>
                                            </div>
                                            <div className="col-12  col-sm-6">
                                                <input type="text" placeholder="Email nữa!" onChange={this.changeHandler} value={email} id="email" name="email" />
                                                <p>{error.email ? error.email : ''}</p>
                                            </div>
                                            <div className="col col-sm-6 col-12">
                                                <select className="form-control" onChange={this.changeHandler} value={rsvp} name="rsvp">
                                                    <option disabled value="">Số lượng người</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                </select>
                                                <p>{error.rsvp ? error.rsvp : ''}</p>
                                            </div>
                                            <div className="col col-sm-6 col-12">
                                                <select className="form-control" onChange={this.changeHandler} value={events} name="events">
                                                    <option disabled value="">Mình sẽ tham dự*</option>
                                                    <option value="1">Mình sẽ chuyển khoản</option>
                                                    <option value="2">Mình sẽ gửi lời chúc</option>
                                                    <option value="3">Xin lỗi ! Mình không tham dự được !</option>
                                                </select>
                                                <p>{error.events ? error.events : ''}</p>
                                            </div>
                                            <div className="col-12 col-sm-12">
                                                <textarea className="contact-textarea" value={notes} onChange={this.changeHandler} placeholder="Nhớ gửi lời chúc cho mình nhen <3" name="notes"></textarea>
                                                <p>{error.notes ? error.notes : ''}</p>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button id="submit" type="submit" className="submit">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                Gửi lời chúc
                                                </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Rsvp;