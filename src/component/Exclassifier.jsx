import React, { useRef , useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import {Classifier, MovenetComponent, model, prediction} from './MovenetComponent';
import * as tf from "@tensorflow/tfjs";

import neck1 from '../assets/images/neck1.jpg';
import neck2 from '../assets/images/neck2.jpg';
import back1 from '../assets/images/back1.jpg';
import back2 from '../assets/images/back2.jpg';
import body1 from '../assets/images/body1.jpg';
import body2 from '../assets/images/body2.jpg';

// Database
const PoseList ={
  'back' : [0,1],
  'body' : [2,3],
  'neck' : [4,5],
}
const PoseStep = {
  0 : 'BACK 1', 
  1 : 'BACK 2', 
  2 : 'BODY 1 ', 
  3 : 'BODY 2', 
  4 : 'NECK 1', 
  5 : 'NECK 2', 
}


//Initialization
var status = 'Processing';
var processing = true;
var pose_step = 0;
var posename;
var step_pose_lenght; 


function Steppose(pose_list) {
  posename = PoseStep[pose_list[pose_step]];
  step_pose_lenght = pose_list.length; 
  const pose_value = Classifier();
  console.log(pose_value);
  status = 'Processing';
  const test = Math.random()*0.5
  if (step_pose_lenght  == pose_step){
    processing = false;
    status = 'Finished ! ';
    posename = 'Finished !'
  }else{ 
    if (test < 0.2){
      pose_step = pose_step + 1;
      status = 'OK ! Next'; 
    }
  }
  return test;
}

function Exclassifier(props) {
  const bodyPart = useSelector(state => state.bodyPart);
  const pose_list = PoseList[bodyPart];
  const [ confident, setPoint] = useState("Start");
  const [imagePath, setImagePath] = useState(`../assets/images/model/${pose_list[pose_step]}.jpg`);

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

  const changeFrame = () => {
    if (processing){
      setPoint(Steppose(pose_list));
      setImagePath(`../assets/images/model/${pose_list[pose_step]}.jpg`);
    }
  }

  useEffect(() => {
    const interval = setInterval(changeFrame, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* <img src= {imagePath} width={640} height={480}/> */}
      {/* <p><img src={neck1} alt="" style={{ height: "200px" }} /> </p> */}
      {exerciseList.map((exercise, index) => (
            <p className="exercise" key={index}>
              <img src={exercise.img}  alt="" style={{ height: "200px" }}/> <br />
              {exercise.name} : {exercise.duration}          
            </p>         
          ))}

      {musclesList.map((muscle, index) => (
        <p>Pose name  {posename} {muscle.muscle} | Status {status}</p>
          ))}
      
    </div>
  );
}
export default Exclassifier;

