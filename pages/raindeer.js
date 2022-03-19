import React from 'react'
import { gsap } from "gsap";

export default function RainDeer() {

    return (
        <>
            <div class="overlay">
                <h1>Reindeer</h1>
                <span>snow life</span>
            </div>

            <div class="wrapper">

                <div class="nav">
                    <div class="logo">
                        <h1>
                            <span>rein <br /> deer</span>
                            <br />
                            snow life
                        </h1>
                    </div>

                    <div class="menu-links">
                        <ul>
                            <li>home.</li>
                            <li>snow life.</li>
                            <li>contact.</li>
                        </ul>
                    </div>

                    <div class="scrolldown">scroll</div>
                </div>

                <div class="text">
                    <div class="title">reindeer</div>
                    <p>Mauris elementum, dui ac sagittis <br /> cursus, libero elit sodales odio</p>
                </div>

                <div class="watchnow">
                    <i class="fa fa-play"></i>
                    <a href="#">watch now!</a>
                </div>

                <div class="media">
                    <ul>
                        <li><i class="fa fa-facebook"></i></li>
                        <li><i class="fa fa-twitter"></i></li>
                        <li><i class="fa fa-instagram"></i></li>
                    </ul>
                </div>

                <div class="ellipse-container">
                    <div class="ellipse thin"></div>
                    <div class="ellipse thick"></div>
                    <div class="ellipse yellow"></div>
                    <div class="circle1"><span>Maecenas purus at</span></div>
                    <div class="circle2"><span>Fringilla Maecenas</span></div>
                </div>

            </div>

        </>
    )
}
