import React, { useRef , useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {Classifier, MovenetComponent, model, prediction} from './MovenetComponent';
import * as tf from "@tensorflow/tfjs";

import neck1 from '../assets/images/neck1.jpg';
import neck2 from '../assets/images/neck2.jpg';
import back1 from '../assets/images/back1.jpg';
import back2 from '../assets/images/back2.jpg';
import wrist1 from '../assets/images/body1.jpg';
import wrist2 from '../assets/images/body2.jpg';

// Database
const PoseList ={
  'neck' : [0, 1, 2],
  'back' : [0, 1, 2],
  'wrist' : [0, 1, 2],
}
const PoseStep = {
  0 : 'Back Neck Stretch', 
  1 : 'Side Neck Stretch', 
  2 : 'Subscapularis Stretch', 
  3 : 'Shoulder Adductor Stretch', 
  4 : 'Forearm Stretch', 
  5 : 'Abdominal & Upper Body Strech', 
}
const PoseImg = {
  0 : neck1,
  1 : neck2,
  2 : back1,
  3 : back2,
  4 : wrist1,
  5 : wrist2,
}


//Initialization
var status = 'Processing';
var processing = true;
var pose_step = 0;
var posename;
var pose_img; 
var step_pose_lenght; 
var count_check = false;
var count = 0;
var result_log = [];
var idx =0 ;
var color = 'red';
const confident = 0.5;

function Steppose(pose_list) {
  posename = PoseStep[pose_list[pose_step]];
  pose_img = PoseImg[pose_list[pose_step]];
  step_pose_lenght = pose_list.length; 
  const pose_value = Classifier(color, pose_step);
  //console.log(pose_value);
  if (step_pose_lenght  == pose_step){
    processing = false;
    status = 'Finished ! ';
    posename = 'Finished !'
  }else{ 
    if(!count_check){
      if (pose_value[0][pose_step] > confident){
          status = 'Hold on !'; 
          result_log.push([pose_step, []]);
          count_check = true;
          color = 'green';
        }
    }
    if (count_check){
      count = count +1;
      result_log[idx][1].push(pose_value);
    }else{
      status = 'Processing';
    }
    if(count == 10){
      idx = idx + 1;
      count_check = false;
      count = 0;
      status = 'OK NEXT !';
      pose_step = pose_step + 1;
      color = 'red';
    }
  }
  console.log(result_log);
  return 0;
}
var final_score =[];
var final_confident = [];
function scoring(log){
  for(let i =0; i< log.length; i++){
    let score_sum = 0;
    let con_sum =0;
    let con_avg=0;
    let score_avg=0;
    if(log[i][0] in [0,1]){
      for(let j=0; j< 10; j++){
        score_sum = score_sum + log[i][1][j][1] + log[i][1][j][2];
        con_sum = con_sum + log[i][1][j][0][0];
      }
      score_avg = score_sum/20;
      final_score.push(score_avg);
      con_avg = con_sum/10;
      console.log(con_avg);
      final_confident.push(con_avg);
    }else{
      for(let j=0; j< 10; j++){
        con_sum = con_sum + log[i][1][j][0][0];
      }
      final_score.push(-1);
      con_avg = con_sum/10;
      final_confident.push(con_avg);
    }
  }
  return 1;
}


function Exclassifier(props) {
  const bodyPart = useSelector(state => state.bodyPart);
  const pose_list = PoseList[bodyPart];
  pose_img = PoseImg[pose_list[0]];
  const [ point, setPoint] = useState("Start");
  const navigate = useNavigate();

  const muscles = {
    neck: [{muscle: 'Neck & Shoulder'}],
    back: [{muscle: 'Back'}],
    wrist: [{muscle: 'Body & Arm'}]
  }

  const musclesList = muscles[bodyPart];

  const changeFrame = () => {
    if (processing){
      setPoint(Steppose(pose_list));
      // setImagePath(PoseImg[pose_step]);
    }else{
      scoring(result_log);
      console.log(final_score);
      console.log(final_confident);
      navigate('/Summary');
    }
  }

  useEffect(() => {
    const interval = setInterval(changeFrame, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="exclassifier">
      {/* <img src= {imagePath} width={640} height={480}/> */}
      {/* <p><img src={neck1} alt="" style={{ height: "200px" }} /> </p> */}
      {/* {exerciseList.map((exercise, index) => (
            <p className="exercise" key={index}>
              <img src={exercise.img}  alt="" style={{ height: "200px" }}/> <br />
              {exercise.name} : {exercise.duration}          
            </p>         
          ))} */}
      <div className="exercise-picture">
        <div style={{height:"200px"}}> 
        <img src={pose_img} alt="" width={400}/>
        </div>
      </div>
      <div className="exercise-status">
        {musclesList.map((muscle, index) => (
          <p>
            Muscle Group: <br /> {muscle.muscle} <br />
            Pose name: <br />  {posename}<br /> Status: {status}</p>
            ))}
      </div>
    </div>
  );
}
export default Exclassifier;

