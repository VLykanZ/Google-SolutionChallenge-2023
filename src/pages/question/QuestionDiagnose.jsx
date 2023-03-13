import React, { useState } from "react";
import { Link } from "react-router-dom";

function QuestionDiagnose() {
  const [answers, setAnswers] = useState({});
  const [canAnswerTwo, setCanAnswerTwo] = useState(false);
  const [canAnswerThree, setCanAnswerThree] = useState(false);
  const [canAnswerFour, setCanAnswerFour] = useState(false);
  const [canAnswerFive, setCanAnswerFive] = useState(false);

  const handleAnswer = (questionNumber, answer) => {
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

  return (
    <div>
      <h1>Diagnose</h1>
      <form action="">
        <div>
          1. คุณมีแนวโน้มต้องทำกิจกรรมหรือทำงานลักษณะเดิม ๆ อย่างต่อเนื่อง เป็นระยะเวลาเท่าใด
          <input type="radio" onClick={() => handleAnswer(1, "1")} value="1"/> 1
          <input type="radio" onClick={() => handleAnswer(1, "2")} value="2"/> 2
          <input type="radio" onClick={() => handleAnswer(1, "3")} value="3"/> 3
          <input type="radio" onClick={() => handleAnswer(1, "4")} value="4"/> 4
        </div>

        <div>
          2. คุณพักผ่อนเท่าไรในแต่ละวัน(ชม.)
          <input type="radio" onClick={() => handleAnswer(2, "1")} 
          disabled={!canAnswerTwo} value="1"/> 1

          <input type="radio" onClick={() => handleAnswer(2, "2")} 
          disabled={!canAnswerTwo} value="2"/> 2

          <input type="radio" onClick={() => handleAnswer(2, "3")} 
          disabled={!canAnswerTwo} value="3"/> 3

          <input type="radio" onClick={() => handleAnswer(2, "4")} 
          disabled={!canAnswerTwo} value="4"/> 4
        </div>

        <div>
          3. ใส่ Pain score (ตอบเป็นช้อย 1-10)
          <select name="edu" id="" onClick={() => handleAnswer(3, "0")} disabled={!canAnswerThree}>
            <option onClick={() => handleAnswer(3, "0")} disabled={!canAnswerThree} value="0">0</option>
            <option onClick={() => handleAnswer(3, "1")} disabled={!canAnswerThree} value="1">1</option>
            <option onClick={() => handleAnswer(3, "2")} disabled={!canAnswerThree} value="2">2</option>
            <option onClick={() => handleAnswer(3, "3")} disabled={!canAnswerThree} value="3">3</option>
            <option onClick={() => handleAnswer(3, "4")} disabled={!canAnswerThree} value="4">4</option>
            <option onClick={() => handleAnswer(3, "5")} disabled={!canAnswerThree} value="5">5</option>
            <option onClick={() => handleAnswer(3, "6")} disabled={!canAnswerThree} value="6">6</option>
            <option onClick={() => handleAnswer(3, "7")} disabled={!canAnswerThree} value="7">7</option>
            <option onClick={() => handleAnswer(3, "8")} disabled={!canAnswerThree} value="8">8</option>
            <option onClick={() => handleAnswer(3, "9")} disabled={!canAnswerThree} value="9">9</option>
            <option onClick={() => handleAnswer(3, "10")} disabled={!canAnswerThree} value="10">10</option>
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
            <button disabled={!allAnswered()}>Next</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default QuestionDiagnose;
