import React from "react";
import { Link } from 'react-router-dom';

import Exclassifier from './Exclassifier';
import MovenetComponent from './MovenetComponent';
import ProgressTab from './ProgressTab';

import '../style/page.css'
import '../style/button.css'

import kong from '../assets/images/kong.gif';

function DoExerciseComponent() {
    return (
            <body>
                <ProgressTab/>
                <section className="function">
                <h1>Do Exercise</h1>
                <div>
                <p>Doing an Exercise</p>
                </div>

                <div style={{ display: "flex", justifyContent: "left", alignItems: "left" }}>
                    <div style={{ paddingRight: "10px" }}>
                    <img src={kong} alt="pic1" style={{ width: "350px" }} />
                    </div>
                    <div className="camera">
                        <MovenetComponent/>
                        <Exclassifier/>
                    </div>
                </div>

                    <div>
                    <Link to="/Recommend">
                    <button class="button-pushable" id="next">
                        <span class="button-shadow"></span>
                        <span class="button-edge"></span>
                        <span class="button-front text">
                        Next
                        </span>
                    </button>
                    </Link>
                    </div>
                </section>

            </body>
    )
    }
export default DoExerciseComponent