import React, { Component } from 'react';

class Help extends Component {

    render() {
        return (
            <div className="help">
                <div className="slideInput">

                </div>
                <div className="contactHelp">
                    <form>
                        <div className="topFormContact">
                            <div className="itemInput">
                                <div className="contact">
                                    <label>Name</label>
                                    <input type="text" placeholder="Enter your name"></input>
                                </div>
                                <div className="contact">
                                    <label>Email</label>
                                    <input type="text" placeholder="Enter your email"></input>
                                </div>
                                <div className="contact">
                                    <label>Phone</label>
                                    <input type="text" placeholder="Enter your phone number"></input>
                                </div>
                            </div>
                            <div className="sentButton">
                                <button>SENT</button>
                            </div>
                        </div>
                        <div className="contact question">
                            <label>Question</label>
                            <textarea></textarea>
                        </div>

                    </form>
                </div>
                <div className="wainning">

                </div>
            </div>
        );
    }
}

export default Help;