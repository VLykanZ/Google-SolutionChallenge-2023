import React, { useRef , useState, useEffect} from "react";
import { useSelector } from 'react-redux';
import { setStretchScore } from "../store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {Classifier, MovenetComponent, model, prediction} from './MovenetComponent';
import * as tf from "@tensorflow/tfjs";

import '../style/page.css'

// neck
import downfacepress from '../assets/images/exerciselist/downfacepress.png';
import neckpull_left from '../assets/images/exerciselist/neckpull_left.png';
import neckpull_right from '../assets/images/exerciselist/neckpull_right.png';
import neckrotation_left from '../assets/images/exerciselist/downfacepress.png';
import neckrotation_right from '../assets/images/exerciselist/neckrotation_right.png';

// back
import spreadarms from '../assets/images/exerciselist/spreadarms.png';
import armcross_left from '../assets/images/exerciselist/armcross_left.png';
import armcross_right from '../assets/images/exerciselist/armcross_right.png';
import waisttwist_left from '../assets/images/exerciselist/waisttwist_left.png';
import waisttwist_right from '../assets/images/exerciselist/waisttwist_right.png';

// arm
import pullfinger_left from '../assets/images/exerciselist/pullfinger_left.png';
import pullfinger_right from '../assets/images/exerciselist/pullfinger_right.png';
import handinfront from '../assets/images/exerciselist/handinfront.png';
import handabove from '../assets/images/exerciselist/handabove.png';
import handabove_left from '../assets/images/exerciselist/handabove_left.png';
import handabove_right from '../assets/images/exerciselist/handabove_right.png';

// Database
const PoseList ={
  'neck' : [2, 7, 8, 9, 10],
  'back' : [13, 0, 1, 14, 15],
  'arm' : [11, 12, 6, 3, 4, 5],
}
const PoseStep = {
  // neck
  2 : 'Back Neck Stretch', 
  7 : 'Left Side Neck Stretch', 
  8 : 'Right Side Neck Stretch', 
  9 : 'Left Neck Rotation', 
  10 : 'Right Neck Rotation', 
  // back
  13 : 'Arm Spread', 
  0 : 'Left Shoulder Adductor Stretch', 
  1 : 'Right Shoulder Adductor Stretch', 
  14 : 'Left Body Twist', 
  15 : 'Right Body Twist', 
  // arm
  11 : 'Left Forearm Stretch', 
  12 : 'Right Forearm Stretch', 
  6 : 'Front Arm Stretch', 
  3 : 'Over Head Arm Stretch', 
  4 : 'Left Side Over Head Arm Stretch', 
  5 : 'Right Side Over Head Arm Stretch', 
}
const PoseImg = {
  // neck
  2 : downfacepress,
  7 : neckpull_left,
  8 : neckpull_right,
  9 : neckrotation_left,
  10 : neckrotation_right,
  // back
  13 : spreadarms,
  0 : armcross_left,
  1 : armcross_right,
  14 : waisttwist_left,
  15 : waisttwist_right,
  // arm
  11 : pullfinger_left,
  12 : pullfinger_right,
  6 : handinfront,
  3 : handabove,
  4 : handabove_left,
  5 : handabove_right,
}


//Initialization
var status = 'Processing...';
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
const confident = 0.2;

function Steppose(pose_list) {
  posename = PoseStep[pose_list[pose_step]];
  pose_img = PoseImg[pose_list[pose_step]];
  step_pose_lenght = pose_list.length; 
  const pose_value = Classifier(color, pose_step);
  console.log(posename);
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
          color = 'blue';
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

  const dispatch = useDispatch();

  const sendStretchScore = () => {
    dispatch(setStretchScore(final_score));
    console.log(dispatch(final_score))
  };
  
  const bodyPart = useSelector(state => state.bodyPart);
  const pose_list = PoseList[bodyPart];
  pose_img = PoseImg[pose_list[0]];
  const [ point, setPoint] = useState("Start");
  const navigate = useNavigate();

  const changeFrame = () => {
    if (processing){
      setPoint(Steppose(pose_list));
      // setImagePath(PoseImg[pose_step]);
    }else{
      scoring(result_log);
      console.log(final_score);
      console.log(final_confident);
      sendStretchScore();
      navigate('/Summary');
    }
  }

  // const pose_number = 1;

  useEffect(() => {
    const interval = setInterval(changeFrame, 1000);
    return () => clearInterval(interval);
    // pose_number ++;
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
        <span className="exercise-image" style={{height:"100px"}}>
        <img className="exercise-image" src={pose_img} alt="" width={300}/>
        </span>
      </div>
      <div className="exercise-status">
          {/* <p className="card-excerpt">{pose_number} of {pose_list.length}</p> */}
          <p className='card-title'>Pose name: {posename} </p>
          <p className="card-excerpt"> Status: {status}</p>
      </div>
    </div>
  );
}
export default Exclassifier;

