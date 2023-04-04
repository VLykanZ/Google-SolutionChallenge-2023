import React from "react";
// import { Link } from 'react-router-dom';
import QuestionBodypart from "../../component/QuestionBodyPart";
import '../../style/main.css'
import '../../style/button.css'
import 'bootstrap/dist/css/bootstrap.css'


function Home() {
    return (
      <body id="home-page">
          <section id="slider">
          <div class="carousel slide" data-bs-ride="carousel" id="mySlider">
            <ol class="carousel-indicators">
                <button data-bs-target="#mySlider" data-bs-slide-to="0" class="active"></button>
                <button data-bs-target="#mySlider" data-bs-slide-to="1"></button>
                <button data-bs-target="#mySlider" data-bs-slide-to="2"></button>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item carousel-image-1 active">
                    <div class="container">
                        <div class="carousel-caption d-none d-sm-block">
                            <h1 class="display-3">AAA</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, unde?</p>
                        </div>
                    </div>
                </div>

                <div class="carousel-item carousel-image-2">
                    <div class="container">
                        <div class="carousel-caption d-none d-sm-block">
                            <h1 class="display-3">BBB</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, unde?</p>
                        </div>
                    </div>
                </div>

                <div class="carousel-item carousel-image-3">
                    <div class="container">
                        <div class="carousel-caption d-none d-sm-block">
                            <h1 class="display-3">CCC</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, unde?</p>
                        </div>
                    </div>
                </div>

                <button class="carousel-control-prev" data-bs-target="#mySlider" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>

                <button class="carousel-control-next" data-bs-target="#mySlider" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
          </section>

          <QuestionBodypart/>


        

      </body>
    );
  }

export default Home