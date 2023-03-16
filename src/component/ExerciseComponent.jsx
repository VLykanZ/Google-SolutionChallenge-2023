import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style/page.css'
import '../style/button.css'

import neck1 from '../assets/images/neck1.jpg';
import neck2 from '../assets/images/neck2.jpg';
import back1 from '../assets/images/back1.jpg';
import back2 from '../assets/images/back2.jpg';
import body1 from '../assets/images/body1.jpg';
import body2 from '../assets/images/body2.jpg';

function ExerciseComponent() {
  const bodyPart = useSelector(state => state.bodyPart);

  const exercises = {
    neck: [
      { name: 'ท่ายอดกล้ามเนื้อคอด้านหลัง', duration: '15-30 วินาที' ,img: neck1},
      { name: 'ท่ายอดกล้ามเนื้อคอ', duration: '15-30 วินาที' ,img: neck2},
    ],
    back: [
      { name: 'ท่ายืดกล้ามเนื้อสะบักด้านใน', duration: '15-30 วินาที' ,img: back1},
      { name: 'ท่ายืดกล้ามเนื้อสะบักด้านหลัง', duration: '15-30 วินาที' ,img: back2},
    ],
    body: [
      { name: 'ท่ายืดกล้ามเนื้อแขนด้านล่าง', duration: '15-30 วินาที' ,img: body1},
      { name: 'ท่ายืดกล้ามเนื้อหน้าท้องละร่างกายส่วนบน', duration: '15-30 วินาที' ,img: body2},
    ],
  };

  const muscles = {
    neck: [{muscle: 'คอ'}],
    back: [{muscle: 'หลัง'}],
    body: [{muscle: 'แขนและช่วงตัว'}]
  }

  const exerciseList = exercises[bodyPart];
  const musclesList = muscles[bodyPart];

  return (
    <div className='page'>
      <h1>Exercise:</h1>
        <div className='body'>
          {musclesList.map((muscle, index) => (
          <h3 key = {index}> นี่คือท่าออกกำลังกายสำหรับกล้ามเนื้อ{muscle.muscle}
          </h3>
          ))}
          {/* <p><img src={neck1} alt="" style={{ height: "200px" }} /> </p> */}
          {exerciseList.map((exercise, index) => (
            <p key={index}>
              <img src={exercise.img}  alt="" style={{ height: "200px" }}/> <br />
              {exercise.name} : {exercise.duration}
              
            </p>
          ))}
        </div>

      <div>
        <Link to="/QuestionDiagnose">
                  {/* <button className='back'>Back</button> */}
                  <button class="button-pushable" id="back">
                      <span class="button-shadow"></span>
                      <span class="button-edge"></span>
                      <span class="button-front text">
                      Back
                      </span>
                  </button>
                  </Link>
          <Link to="/DoExercise">
          {/* <button>Next</button> */}
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
  );
}

export default ExerciseComponent;