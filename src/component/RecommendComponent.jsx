import React from "react";
import { Link } from 'react-router-dom';
import ProgressTab from './ProgressTab';

import '../style/page.css'
import '../style/button.css'

function RecommendComponent() {
    return (
            <body>
                <ProgressTab/>
                <section className="function">
                <h1>Recommendation</h1>
                    <section id="recommendation">
                        <div className="summary">
                            <p className="summary">From your exercise: You have low level risk of Office Syndrome</p>
                        </div>
                        <div>
                            <p className="recommend">This our Recommendation.</p>
                            <p>
                                1. Office workers are advised to relieve muscle tension every 30 minutes, without interrupting the train of thought by setting an interval-timer and placing it across the room.  Then they must get up and can stretch while they walk to turn off the buzzer and reset the timer.
                            </p>
                            <p>
                                2. Exercise is the most important therapy.  Multiple modalities of exercise should be considered, including:
                                <ol>
                                    <li> Strength exercises:  Strengthening muscles can reduce the likelihood of them developing trigger points in the future.  Strengthening exercises includes high load, and low repetition of different groups of muscles.</li>
                                    <li> Endurance exercise: includes aerobic training such as running, swimming or biking, which strengthens both the cardiovascular system and multiple muscle groups.  A regular exercise program minimizes the chance of reactivating trigger points.</li>
                                    <li> Relaxation exercises: such as contract-relax and yoga can help decrease mental stress and relax the body.</li>
                                </ol>
                            </p>
                        </div>
                        </section>
                <section id="student-id">
                    <label id="student-id">Please Fill the Student ID</label>
                    <input className="student-id" placeholder = "ex 6123456789"/>
                </section>

                <div>
                <Link to="/">
                <button class="button-pushable" id="next">
                    <span class="button-shadow"></span>
                    <span class="button-edge"></span>
                    <span class="button-front text">
                    Finish!
                    </span>
                </button>
                </Link>
                </div>
                </section>
            </body>
    )
    }
export default RecommendComponent