import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import logo2 from "../img/logo2.svg"
import "../css/style.css"



const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#84868d" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (


<div>

    <div className="navbar sticky">

        <ul className="my-nav">

            <li className="nav-start">
                <a href='/'>
                <img src={logo2} className='schmaltz-logo'/> 
                </a>
            </li>

            <div className="nav-end">

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/shop")}
                    to="/shop"
                >
                    shop
                </Link>
            </li>

            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                    cart{" "}
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </li>

            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        dashboard
                    </Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/dashboard")}
                        to="/admin/dashboard"
                    >
                        dashboard
                    </Link>
                </li>
            )}

            {!isAuthenticated() && (
                <Fragment>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                            sign in
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            sign up
                        </Link>
                    </li>
                </Fragment>
            )}

            {isAuthenticated() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "#ffffff" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                        sign out
                    </span>
                </li>
            )}

            </div>

        </ul>

    </div>



    <div className="nav-mobile sticky">

        <div>
            <a href='/'>
            <img src={logo2} className='schmaltz-logo'/> 
            </a>
        </div>



        <input type="checkbox" className="nav-mobile__checkbox" id="navi-toggle"/>
        <label for="navi-toggle" className="nav-mobile__button">
            <span className="nav-mobile__icon"></span>
        </label>

        <div className="nav-mobile__background">&nbsp;</div>

        <nav className="nav-mobile__nav">               
            <ul className="nav-mobile__list">
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/shop")}
                        to="/shop"
                    >
                        shop
                    </Link>
                </li>

                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/cart")}
                        to="/cart"
                    >
                        cart{" "}
                        <sup>
                            <small className="cart-badge">{itemTotal()}</small>
                        </sup>
                    </Link>
                </li>

                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/user/dashboard")}
                            to="/user/dashboard"
                        >
                            dashboard
                        </Link>
                    </li>
                )}

                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/admin/dashboard")}
                            to="/admin/dashboard"
                        >
                            dashboard
                        </Link>
                    </li>
                )}

                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/signin")}
                                to="/signin"
                            >
                                sign in
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/signup")}
                                to="/signup"
                            >
                                sign up
                            </Link>
                        </li>
                    </Fragment>
                )}

                {isAuthenticated() && (
                    <li className="nav-item">
                        <span
                            className="nav-link"
                            style={{ cursor: "pointer", color: "#ffffff" }}
                            onClick={() =>
                                signout(() => {
                                    history.push("/");
                                })
                            }
                        >
                            sign out
                        </span>
                    </li>
                )}

            </ul>
        </nav>
    </div>

</div>

);

export default withRouter(Menu);

