import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setBodyPart } from '../../store';

function QuestionBodypart() {

    const [selectedBodyPart, setSelectedBodyPart] = useState(null);

    const dispatch = useDispatch();

    const handleBodyPartClick = (e) => {
        setSelectedBodyPart(e.target.value);
        dispatch(setBodyPart(e.target.value));
      };

    const isButtonDisabled = selectedBodyPart === null;

    return (
        <div>
        <h1>Select Bodypart</h1>
        <div>
            คุณมีปวดส่วนไหน
            <button value="neck" onClick={handleBodyPartClick}>
            คอ บ่า
            </button>
            <button value="back" onClick={handleBodyPartClick}>
            หลัง
            </button>
            <button value="body" onClick={handleBodyPartClick}>
            แขน ช่วงตัว
            </button>
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
