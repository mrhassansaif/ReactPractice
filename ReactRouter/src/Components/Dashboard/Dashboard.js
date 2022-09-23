import React from 'react'
import { Link } from 'react-router-dom';
import '../Dashboard/Dashboard.css';
export default function Dashboard() {
    return (
        <div class="dashboard">
            <main>
                <div class="overview">
                    <h1>Dashboard<h2>Hello</h2></h1>
                    <h2>Overview</h2>
                    <div class="widget-container">
                        <div class="widget">
                            <header>
                                <h3 class="iconicfill-document-alt-fill">Files</h3>
                            </header>
                            <div class="content">
                                <ul>
                                    <li>README.md</li>
                                    <li>humans.txt</li>
                                    <li>style.css</li>
                                    <li>index.htm</li>
                                </ul>
                            </div>
                        </div>
                        <div class="widget">
                            <header>
                                <h3 class="iconicfill-mail">Messages</h3>
                            </header>
                            <div class="content">
                                <ul>
                                    <li>09/04/15 - Spam</li>
                                    <li>07/04/15 - Hello my friend</li>
                                    <li>06/04/15 - Awesome business opportunity</li>
                                </ul>
                            </div>
                        </div>
                        <div class="widget">
                            <header>
                                <h3 class="iconicfill-user">Users</h3>
                            </header>
                            <div class="content">
                                <ul>
                                    <li>admin</li>
                                    <li>Mr. Crazypants</li>
                                    <li>Josh</li>
                                </ul>
                            </div>
                        </div>
                        <div class="widget">
                            <header>
                                <h3 class="iconicfill-bars">Monitoring</h3>
                            </header>
                            <div class="content">
                                <p class="ok">All Systems operating normal</p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <p>&copy; 2021 Dashboard by Cyber Odyssey</p>
                </footer>
            </main>
            <aside>
                <ul>
                    <li><a class="iconicfill-home" href="#">Overview</a></li>
                    <li><a class="iconicfill-document-alt-fill" href="#">Files</a></li>
                    <li><a class="iconicfill-mail" href="#">Messages</a></li>
                    <li><a class="iconicfill-bars" href="#">Monitoring</a></li>
                    <Link to="/"><li><a class="iconicfill-cog" href="#"><button>Log Out</button></a></li></Link>
                </ul>
            </aside>
        </div>
    )
}
