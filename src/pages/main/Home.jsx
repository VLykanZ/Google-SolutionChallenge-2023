import React from "react";
import { Link } from 'react-router-dom';
import '../../style/main.css'
import '../../style/button.css'

function Home() {
    return (
      <body id="home-page">
        <h1>Home Page</h1>
          <section>
            <p id="start">เริ่มการบริหารร่างกาย!</p>
          <Link to="/QuestionBodypart">
              {/* <button className="start">Start!</button> */}
              <button class="button-pushable" id="start">
              <span class="button-shadow"></span>
              <span class="button-edge"></span>
              <span class="button-front text">
                Start
              </span>
            </button>
          </Link>
        </section>

      </body>
    );
  }

export default Home