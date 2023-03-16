import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBodyPart } from '../../store';
import '../../style/main.css'
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
        <div className='page'>
        <h1>Select Bodypart</h1>
        <div className='body'>
            <div className='question'>
                <label className="question" for="bodypart">คุณมีอาการเจ็บปวดบริเวณใด </label> <br />
            </div>
                <input type="radio" onClick={handleBodyPartClick} value="neck" name="bodypart"/> คอ บ่า
                <input type="radio" onClick={handleBodyPartClick} value="back" name="bodypart"/> หลัง
                <input type="radio" onClick={handleBodyPartClick} value="body" name="bodypart"/> แขน ช่วงตัว
        </div>

        <div className='link-page-button'>
            <div>
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
            </div>

            <div>
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
        </div>
        </div>
    );
}

export default QuestionBodypart;