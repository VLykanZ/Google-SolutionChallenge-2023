import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProgressTab from '../../component/ProgressTab';

import '../../style/page.css'
import '../../style/button.css'

import neck1 from '../../assets/images/neck1.jpg';
import neck2 from '../../assets/images/neck2.jpg';
import back1 from '../../assets/images/back1.jpg';
import back2 from '../../assets/images/back2.jpg';
import body1 from '../../assets/images/body1.jpg';
import body2 from '../../assets/images/body2.jpg';

function ExerciseList() {
  const bodyPart = useSelector(state => state.bodyPart);

  const exercises = {
    neck: [
      { name: 'Back Neck Stretch', duration: '15-30 Seconds' ,img: neck1},
      { name: 'Side Neck Stretch', duration: '15-30 Seconds' ,img: neck2},
    ],
    back: [
      { name: 'Subscapularis Stretch', duration: '15-30 Seconds' ,img: back1},
      { name: 'Shoulder Adductor Stretch', duration: '15-30 Seconds' ,img: back2},
    ],
    body: [
      { name: 'Forearm Stretch', duration: '15-30 Seconds' ,img: body1},
      { name: 'Abdominal & Upper Body Strech', duration: '15-30 Seconds' ,img: body2},
    ],
  };

  const muscles = {
    neck: [{muscle: 'Neck & Shoulder'}],
    back: [{muscle: 'Back'}],
    body: [{muscle: 'Body & Arm'}]
  }

  const exerciseList = exercises[bodyPart];
  const musclesList = muscles[bodyPart];

  return (
    <body>
      <ProgressTab/>
      <section className="function">
      <h1>Exercise:</h1>
        <section className='exercise'>
          {musclesList.map((muscle, index) => (
          <h3 key = {index}> These are Exercises for {muscle.muscle}
          </h3>
          ))}
          {/* <p><img src={neck1} alt="" style={{ height: "200px" }} /> </p> */}
          {exerciseList.map((exercise, index) => (
            <p className="exercise" key={index}>
              <img src={exercise.img}  alt="" style={{ height: "200px" }}/> <br />
              {exercise.name} : {exercise.duration}
              
            </p>
            
          ))}
        </section>

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
      </section>
    </body>
  );
}

export default ExerciseList;