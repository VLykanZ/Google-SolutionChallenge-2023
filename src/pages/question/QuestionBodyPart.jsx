import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setBodyPart } from '../../store';
import '../../page.css';

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
        <div>
            <label for="bodypart">คุณปวดส่วนไหน </label>
            <input type="radio" onClick={handleBodyPartClick} value="neck" name="bodypart"/> คอ บ่า
            <input type="radio" onClick={handleBodyPartClick} value="back" name="bodypart"/> หลัง
            <input type="radio" onClick={handleBodyPartClick} value="body" name="bodypart"/> แขน ช่วงตัว
        </div>

        <div>
            <Link to="/Home">
            <button>Back</button>
            </Link>
        </div>

        <div>
            <Link to="/QuestionDiagnose">
            <button disabled={isButtonDisabled}>Next</button>
            </Link>
        </div>
        </div>
    );
}

export default QuestionBodypart;