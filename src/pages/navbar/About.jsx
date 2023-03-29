import { Link } from 'react-router-dom';
import Exclassifier from '../../component/Exclassifier';
import MovenetComponent from '../../component/MovenetComponent';
import ProgressTab from '../../component/ProgressTab';

import '../../style/main.css'
import '../../style/page.css'
import '../../style/button.css'

const About = () => {
    return (
            <body>
                <ProgressTab/>
                <section className="function">
                <h1>Do Exercise</h1>
                <div>
                <p>Doing an Exercise</p>
                </div>

                <div className='do-exercise'>
                    <div className="exclassifier">Exclassifier</div>
                    <div className="movenet">Movenet</div>
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
export default About