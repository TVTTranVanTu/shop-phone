import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rightpanelactive: false,
        }
        this.handleCLick = this.handleCLick.bind(this);
    }
    // handleClick(){
    //     this.setState({
    //         rightpanelactive:true
    //     })
    // }
    // componentDidMount(){
    //     window.addEventListener('click',this.handleCLick,false);
    // }
    handleCLick() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });
    }
    // componentWillUnmount(){
    //     window.removeEventListener('click');
    // }
    render() {

        return (
            <div className="login">
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form>
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="/">
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="/">Forgot your password?</a>
                            <button type="submit">Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn" onClick={this.handleCLick}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>registration</h1>
                                <p>Create an account if you haven't already</p>
                                <button className="ghost" id="signUp" onClick={this.handleCLick}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;