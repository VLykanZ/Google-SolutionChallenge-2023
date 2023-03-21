import React, { useRef , useState, useEffect} from "react";
import {Classifier, MovenetComponent, model, prediction} from './MovenetComponent';
import * as tf from "@tensorflow/tfjs";
// Database
const PoseList ={
  0 : 'YOGA',
  1 : 'YOGA_2'
}
const PoseStep = {
  0 : 'Shoulder_0', 
  1 : 'Shoulder_1', 
  2 : 'Shoulder_2', 
  3 : 'Shoulder_3', 
  4 : 'Shoulder_4', 
  5 : 'Shoulder_5', 
}
// Data from survey backend 
const pose_list = [
  [1 , [0,2,3]],
  [2, [4,5,1]]
];

//Initialization
var namePic = 'YOGA';
//var linkPic = require('./asset/1.jpeg')
var status = 'Try again';
var processing = 'Running';


var posename = PoseStep[pose_list[0][1][0]];
var idx = 0;
var pose_step = 0;
var step_pose_lenght = pose_list[idx].length; 
var tricker =0;


function Steppose() {
  const pose_value = Classifier();
  console.log(pose_value);
  if (pose_value[0][pose_step] < 0.5){
    pose_step = pose_step + 1;
    status = 'Try again';
    //linkPic = require('./asset/2.jpeg');
    tricker = tricker +1;
    posename = PoseStep[pose_list[idx][1][pose_step]];
  }
  if (step_pose_lenght+1  == pose_step){
    pose_step = 0;
    idx = idx + 1;
    posename = PoseStep[pose_list[idx][1][pose_step]]
  }
  if (pose_list.length == idx){
    processing = false;
    status = 'Finished ! ';
    posename = 'Finished !'
  }
  return pose_value[0][pose_step];
}

function Exclassifier(props) {
  const [ point, setPoint] = useState("Start");

  const changeFrame = () => {
    if (processing){
      setPoint(Steppose());
    }
  }

  useEffect(() => {
    const interval = setInterval(changeFrame, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src= {1} width={640} height={480}/>
      <p>Confident {point}</p>
      <p>Pose {posename}</p>

      <p>Status {status}</p>
      <p>Processing {processing}</p>
      <p>{idx} {pose_step} {step_pose_lenght} {tricker} {posename}</p>
    </div>
  );
}

export default Exclassifier;

