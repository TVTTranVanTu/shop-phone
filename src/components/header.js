import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect } from "react-router-dom";
import Login from '../components/signandlog/login';
import Help from '../components/navBar/help';
// import PhoneCariers from '../components/contents/phoneCariers';
import ProductContainrs from '../store/containers/productContainers';
import CartContainer from '../store/containers/cartContainer';
class header extends Component {


    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }
    onScroll = () => {
        const mainNav = document.getElementById('mainNav');
        if ((window.scrollY) >= 100) {
            mainNav.classList.add('sticky');
        } else {
            mainNav.classList.remove('sticky');
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }


    render() {

        return (
            <Router>
                <nav id="mainNav" className="mainNav">
                    <div className="mainNav_content">
                        <a href="/" className="mainNav_logo">
                            <span className="mainNav_logoIcon">
                                <p className="mainNav_logoText">S</p>
                            </span>
                            <p className="mainNav_logoName">Shope phone</p>
                        </a>
                        <div className="mainNav_links">
                            <NavLink to="/" className="mainNav_link active">Home</NavLink>
                            <a href="/" className="mainNav_link">Reviews</a>
                            <a href="/" className="mainNav_link">Contacts</a>
                            <a href="/help" className="mainNav_link">Help</a>
                            <NavLink to="/login" className="mainNav_link">Login</NavLink>
                        </div>
                        <div className="mainNav_iconWrapper">
                            <div className="mainNav_inputWrapper">
                                <button type="submit"><img src={require('../assets/img/icon-search.svg')} alt="" /></button>
                                <input type="text" placeholder="Search..."></input>
                            </div>
                            <div className="mainNav_profiles">
                                <img src={require('../assets/img/girlanime.jpg')} alt="" />
                                <div className="mainNav_profileMenu">
                                    <a href="/" className="mainNav_profileText"><i className="fas fa-user"></i>Profile</a>
                                    <a href="/" className="mainNav_profileText"><i className="fas fa-user-edit"></i>Edit Profile</a>
                                    <a href="/" className="mainNav_profileText"><i className="fas fa-cog"></i>Setting</a>
                                    <a href="/" className="mainNav_profileText"><i className="fas fa-sign-out-alt"></i>Logout</a>

                                </div>
                            </div>
                            <div className="cart">
                                <div className="cart_icon"><i className="fas fa-shopping-cart"></i></div>
                                <div className="cart_menu">
                                    <CartContainer></CartContainer>
                                </div>
                            </div>

                            <div className="mainNav_menu"><img src={require('../assets/img/menu.svg')} alt="" /></div>

                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route path="/" exact={true} component={ProductContainrs}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/help" component={Help}></Route>
                    <Redirect to="/" />
                </Switch>


            </Router>
        );
    }
}

export default header;
