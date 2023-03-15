import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../page.css'

function ExerciseComponent() {
  const bodyPart = useSelector(state => state.bodyPart);
  const diagnose = useSelector((state) => state.diagnose);

  const exercises = {
    neck: [
      { name: 'ท่ายอดกล้ามเนื้อคอด้านหลัง', duration: '15-30 วินาที' },
      { name: 'ท่ายอดกล้ามเนื้อคอด้านซ้าย', duration: '15-30 วินาที' },
      { name: 'ท่ายอดกล้ามเนื้อคอด้านขวา', duration: '15-30 วินาที' },
    ],
    back: [
      { name: 'ท่ายืดกล้ามเนื้อสะบักด้านในข้างซ้าย', duration: '15-30 วินาที' },
      { name: 'ท่ายืดกล้ามเนื้อสะบักด้านในข้างขวา', duration: '15-30 วินาที' },
      { name: 'ท่ายืดกล้ามเนื้อสะบักด้านหลังข้างซ้าย', duration: '15-30 วินาที' },
      { name: 'ท่ายืดกล้ามเนื้อสะบักด้านหลังข้างขวา', duration: '15-30 วินาที' },
    ],
    body: [
      { name: 'ท่ายืดกล้ามเนื้อแขนด้านล่างข้างซ้าย', duration: '15-30 วินาที' },
      { name: 'ท่ายืดกล้ามเนื้อแขนด้านล่างข้างขวา', duration: '15-30 วินาที' },
      { name: 'ท่ายืดกล้ามเนื้อหน้าท้องละร่างกายส่วนบน', duration: '15-30 วินาที' },
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
          <h3 key = {index}> จากการทำแบบสอบถาม สามารถวินิจฉัยได้ว่าคุณมีโอกาสเป็น Office Syndrome นี่คือท่าออกกำลังกายสำหรับกล้ามเนื้อ{muscle.muscle}
            
          </h3>
          ))}
          <p>This is {diagnose}</p>

          {exerciseList.map((exercise, index) => (
            <p key={index}>{exercise.name} : {exercise.duration}</p>
          ))}
        </div>

      <div>
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