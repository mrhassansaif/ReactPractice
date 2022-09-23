import React from 'react'
import { Link } from 'react-router-dom';
import '../SignUp/SignUp.css';

export default function SignUp() {
    return (
        <div class="container sign-up-mode">
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
                        <input type="submit" value="Login" class="btn solid" />
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
                    <form class="sign-up-form">
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
                        <Link to="/"><button class="btn">Sign up</button></Link>
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
                        <button class="btn transparent" id="sign-up-btn">Sign up</button>
                    </div>
                </div>
                <div class="panel right-panel">
                    <div class="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <Link to="/"> <button class="btn transparent" id="sign-in-btn">Sign in</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
