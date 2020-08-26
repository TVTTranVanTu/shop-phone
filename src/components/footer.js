import React, { Component } from 'react';

class footer extends Component {

    render() {
        return (
            <section className="footer">
                <p className="footer_text">
                    <a href="/" className="link">Shop phone</a>
                </p>
                <div className="footer_icons">
                    <a href="/" target="_blank" rel="noopener"
                        className="footer_icon facebook"><span></span>
                        <p>facebook</p>
                    </a>
                    <a href="/" target="_blank" rel="noopener"
                        className="footer_icon linkedin"><span></span>
                        <p>Linkedin</p>
                    </a>

                    <a href="/" target="_blank" rel="noopener"
                        className="footer_icon dribbble"><span></span>
                        <p>Dribbble</p>
                    </a>

                    <a href="/" target="_blank" rel="noopener"
                        className="footer_icon codepen"><span></span>
                        <p>Codepen</p>
                    </a>
                </div>

            </section>
        );
    }
}

export default footer;