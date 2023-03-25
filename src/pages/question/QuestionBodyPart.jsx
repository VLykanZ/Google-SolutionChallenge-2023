import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBodyPart } from '../../store';
import ProgressTab from '../../component/ProgressTab';
import '../../style/page.css'
import '../../style/button.css'

function QuestionBodypart() {

    const [selectedBodyPart, setSelectedBodyPart] = useState(null);

    const dispatch = useDispatch();

    const handleBodyPartClick = (e) => {
        setSelectedBodyPart(e.target.value);
        dispatch(setBodyPart(e.target.value));
      };

    const isButtonDisabled = selectedBodyPart === null;

    return (
        <body>
            <ProgressTab/>
            <section className='function'>
                <h1 className="header">Select Bodypart</h1>
                <section className='question'>
                    <div className='question'>
                        <label className="question" for="bodypart">Which part of your pain are you experiencing? </label> <br />
                    </div>
                        <input type="radio" onClick={handleBodyPartClick} value="neck" name="bodypart"/> Neck & Shoulder
                        <input type="radio" onClick={handleBodyPartClick} value="back" name="bodypart"/> Back
                        <input type="radio" onClick={handleBodyPartClick} value="body" name="bodypart"/> Body & Arm
                </section>

                <div className='link-page-button'>

                        <Link to="/">
                        {/* <button className='back'>Back</button> */}
                        <button class="button-pushable" id="back">
                            <span class="button-shadow"></span>
                            <span class="button-edge"></span>
                            <span class="button-front text">
                            Back
                            </span>
                        </button>
                        </Link>



                        <Link to="/QuestionDiagnose">
                        {/* <button className='next' disabled={isButtonDisabled}>Next</button> */}
                        <button class="button-pushable" id="next" disabled={isButtonDisabled}>
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
    );
}

export default QuestionBodypart;