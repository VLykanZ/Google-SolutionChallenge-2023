import React from "react";
import { Link } from 'react-router-dom';
import '../page.css'

import kong from '../assets/images/kong.gif';
import vn from '../assets/images/vn.gif';

function DoExerciseComponent() {
    return (
            <div className="page">
                <h1>Do Exercise</h1>
                <div>
                กำลังออกกำลังกาย
                </div>

                <div style={{ display: "flex", justifyContent: "left", alignItems: "left" }}>
                    <div style={{ paddingRight: "10px" }}>
                    <img src={kong} alt="pic1" style={{ width: "350px" }} />
                    </div>
                    <div style={{ paddingLeft: "10px" }}>
                    <img src={vn} alt="gif1" style={{ width: "350px" }} />
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
            </div>
    )
    }
export default DoExerciseComponent