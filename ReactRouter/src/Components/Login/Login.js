import React from 'react'
import { Link } from 'react-router-dom';
import '../Login/Login.css';

export default function Login() {
    return (
        <div class="container">
            <div class="forms-container">
                <div class="signin-signup">
                    <form class="sign-in-form">
                        <h2 class="title">Sign in</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <Link to="/dashboard"><button class="btn solid">Login</button></Link>

                        <div class="social">
                            <p class="social__title">Or Sign in with social platforms</p>
                            <ul class="social__list icons">
                                <li class="icons__item">
                                    <a href="#" class="icons__link">
                                        <i class="icons__icon fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li class="icons__item">
                                    <a href="#" class="icons__link">
                                        <i class="icons__icon fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li class="icons__item">
                                    <a href="#" class="icons__link">
                                        <i class="icons__icon fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="icons__item">
                                    <a href="#" class="icons__link">
                                        <i class="icons__icon fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </form>
                    <form action="#" class="sign-up-form">
                        <h2 class="title">Sign up</h2>
                        <div class="input-field">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div class="input-field">
                            <i class="fas fa-lock"></i>
                            <input type="password" placeholder="Password" />
                        </div>
                        <input type="submit" class="btn" value="Sign up" />
                        <div class="social">
                            <p class="social__title">Or Sign in with social platforms</p>
                            <ul class="social__list icons">
                                <li class="icons__item">
                                    <a href="#" class="icons__link">
                                        <i class="icons__icon fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li class="icons__item">
                                    <a href="#" class="icons__link">
                                        <i class="icons__icon fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li class="icons__item">
                                    <a href="#" class="icons__link">
                                        <i class="icons__icon fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="icons__item">
                                    <a href="#" class="icons__link">
                                        <i class="icons__icon fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>

            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <Link to="/SignUp"><button class="btn transparent" id="sign-up-btn">Sign up</button></Link>
                    </div>
                </div>
                <div class="panel right-panel">
                    <div class="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button class="btn transparent" id="sign-in-btn">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
