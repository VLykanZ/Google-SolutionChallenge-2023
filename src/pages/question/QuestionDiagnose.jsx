import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { setDiagnose } from "../../store2";
import { useDispatch } from "react-redux";
import '../../page.css'

function QuestionDiagnose() {
  const [answers, setAnswers] = useState({});
  const [canAnswerTwo, setCanAnswerTwo] = useState(false);
  const [canAnswerThree, setCanAnswerThree] = useState(false);
  const [canAnswerFour, setCanAnswerFour] = useState(false);
  const [canAnswerFive, setCanAnswerFive] = useState(false);
  const [sumOfAnswers, setSumOfAnswers] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    // Compute the sum of all answers
    let sum = 0;
    for (let answer of Object.values(answers)) {
      sum += parseInt(answer);
    }
    setSumOfAnswers(sum);
  }, [answers]);

  const handleAnswer = (questionNumber, answer, value) => {
    if (questionNumber === 3) {
      answer = answer / 2.5;
    }

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: answer,
    }));
    if (questionNumber === 1) {
      setCanAnswerTwo(true);
    } else if (questionNumber === 2) {
      setCanAnswerThree(true);
    } else if (questionNumber === 3) {
      setCanAnswerFour(true);
    } else if (questionNumber === 4) {
      setCanAnswerFive(true);
    }
  };

  const allAnswered = () => {
    return Object.keys(answers).length === 5;
  };

  const handleNextClick = () => {

    let diagnose;
    if (sumOfAnswers > 16) {
      diagnose = 'A';
    } else if (sumOfAnswers > 12) {
      diagnose = 'B';
    } else if (sumOfAnswers > 8) {
      diagnose = 'C';
    } else if (sumOfAnswers > 4) {
      diagnose = 'D';
    } else {
      diagnose = 'E';
    }
    dispatch(setDiagnose(diagnose));
    // navigate to the next page
  };

  return (
    <div className="page">
      <h1>Diagnose</h1>
      <form action="">
        <div>
          <label for="q1">1. คุณมีแนวโน้มต้องทำกิจกรรมหรือทำงานลักษณะเดิม ๆ อย่างต่อเนื่อง เป็นระยะเวลาเท่าใด</label>
          <input type="radio" onClick={() => handleAnswer(1, "1")} value="1" name="q1"/> 1
          <input type="radio" onClick={() => handleAnswer(1, "2")} value="2" name="q1"/> 2
          <input type="radio" onClick={() => handleAnswer(1, "3")} value="3" name="q1"/> 3
          <input type="radio" onClick={() => handleAnswer(1, "4")} value="4" name="q1"/> 4
        </div>

        <div>
          <label for="q2">2. คุณพักผ่อนเท่าไรในแต่ละวัน(ชม.) </label>
          <input type="radio" onClick={() => handleAnswer(2, "1")} 
          disabled={!canAnswerTwo} value="1" name="q2"/> 1

          <input type="radio" onClick={() => handleAnswer(2, "2")} 
          disabled={!canAnswerTwo} value="2" name="q2"/> 2

          <input type="radio" onClick={() => handleAnswer(2, "3")} 
          disabled={!canAnswerTwo} value="3" name="q2"/> 3

          <input type="radio" onClick={() => handleAnswer(2, "4")} 
          disabled={!canAnswerTwo} value="4" name="q2"/> 4
        </div>

        <div>
        <label for="q3">3. ใส่ Pain score (ตอบเป็นช้อย 1-10) </label>
        <select name="edu" id="" onChange={(e) => handleAnswer(3, e.target.value)}>
          <option disabled={!canAnswerThree} value="0">0</option>
          <option disabled={!canAnswerThree} value="1">1</option>
          <option disabled={!canAnswerThree} value="2">2</option>
          <option disabled={!canAnswerThree} value="3">3</option>
          <option disabled={!canAnswerThree} value="4">4</option>
          <option disabled={!canAnswerThree} value="5">5</option>
          <option disabled={!canAnswerThree} value="6">6</option>
          <option disabled={!canAnswerThree} value="7">7</option>
          <option disabled={!canAnswerThree} value="8">8</option>
          <option disabled={!canAnswerThree} value="9">9</option>
          <option disabled={!canAnswerThree} value="10">10</option>
        </select>
        </div>
        
        <div>
          4. จากอาการปวดให้นึกถึงพฤติกรรมที่นำไปสู่อาการเจ็บ แล้วจากกพฤติกรรมนั้นนานเท่าไหร่ถึงจะมีอาการปวด
          <input type="radio" onClick={() => handleAnswer(4, "1")} 
          disabled={!canAnswerFour} value="1"/> 1

          <input type="radio" onClick={() => handleAnswer(4, "2")} 
          disabled={!canAnswerFour} value="2"/> 2

          <input type="radio" onClick={() => handleAnswer(4, "3")} 
          disabled={!canAnswerFour} value="3"/> 3

          <input type="radio" onClick={() => handleAnswer(4, "4")} 
          disabled={!canAnswerFour} value="4"/> 4
        </div>

        <div>
          5. ต้องใช้เวลาพักนานเท่าไหร่อาการปวดถึงจะหายไป
          <input type="radio" onClick={() => handleAnswer(5, "1")} 
          disabled={!canAnswerFive} value="1"/> 1

          <input type="radio" onClick={() => handleAnswer(5, "2")} 
          disabled={!canAnswerFive} value="2"/> 2

          <input type="radio" onClick={() => handleAnswer(5, "3")} 
          disabled={!canAnswerFive} value="3"/> 3

          <input type="radio" onClick={() => handleAnswer(5, "4")} 
          disabled={!canAnswerFive} value="4"/> 4
        </div>


        <div>
          <Link to="/QuestionBodypart">
            <button>Back</button>
          </Link>
          <Link to="/Exercise" disabled={!allAnswered()}>
            <button disabled={!allAnswered()} onClick={handleNextClick}>Next</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default QuestionDiagnose;
