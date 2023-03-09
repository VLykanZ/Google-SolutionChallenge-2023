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
      <div>
        1. คุณมีแนวโน้มต้องทำกิจกรรมหรือทำงานลักษณะเดิม ๆ อย่างต่อเนื่อง อย่างน้อย 6 ชั่วโมงต่อวันหรือไม่
        <button onClick={() => handleAnswer(1, "yes")}>Yes</button>
        <button onClick={() => handleAnswer(1, "no")}>No</button>
      </div>

      <div>
        2. คุณมีเวลาพักผ่อนน้อย หรือไม่ได้พักผ่อนหรือไม่
        <button onClick={() => handleAnswer(2, "yes")} disabled={!canAnswerTwo}>
          Yes
        </button>
        <button onClick={() => handleAnswer(2, "no")} disabled={!canAnswerTwo}>
          No
        </button>
      </div>

      <div>
        3. คุณมีความเครียดจากการทำงานสูง หรืออยู่ในสภาพสังคมการทำงานที่เป็นพิษหรือไม่
        <button onClick={() => handleAnswer(3, "yes")} disabled={!canAnswerThree}>
          Yes
        </button>
        <button onClick={() => handleAnswer(3, "no")} disabled={!canAnswerThree}>
          No
        </button>
      </div>
      
      <div>
        4. คุณไม่ค่อยได้เคลื่อนไหว หรือไม่ค่อยได้ออกกำลังกายอย่างสม่ำเสมอ
        <button onClick={() => handleAnswer(4, "yes")} disabled={!canAnswerFour}>
          Yes
        </button>
        <button onClick={() => handleAnswer(4, "no")} disabled={!canAnswerFour}>
          No
        </button>
      </div>

      <div>
        5. คุณมีการสูบบุหรี่หรือดื่มแอลกอฮอล์อยู่เป็นประจำหรือไม่
        <button onClick={() => handleAnswer(5, "yes")} disabled={!canAnswerFive}>
          Yes
        </button>
        <button onClick={() => handleAnswer(5, "no")} disabled={!canAnswerFive}>
          No
        </button>
      </div>


      <div>
        <Link to="/QuestionBodypart">
          <button>Back</button>
        </Link>
        <Link to="/Exercise" disabled={!allAnswered()}>
          <button disabled={!allAnswered()}>Next</button>
        </Link>
      </div>
    </div>
  );
}

export default QuestionDiagnose;
