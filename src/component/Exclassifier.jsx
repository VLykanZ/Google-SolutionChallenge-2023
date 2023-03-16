import React, { useRef , useState, useEffect} from "react";
import {MovenetComponent, Classifier} from './MovenetComponent';

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


var idx = 0;
var pose_step = 0;
var step_pose_lenght = pose_list[idx].length; 
var tricker =0;
function Steppose() {
  var status_pose = null;
  const pose_value = Classifier();
  // Confident --> pose_value[pose_list[idx][pose_step]]
  if (pose_value[1] < 0.2){
    pose_step = pose_step + 1;
    status = 'Try again';
    //linkPic = require('./asset/2.jpeg');
    tricker = tricker +1;
  }
  if (step_pose_lenght+1  == pose_step){
    pose_step = 0;
    idx = idx + 1;
  }
  if (pose_list.length == idx){
    processing = false;
    status = 'Finished ! ';
  }
  return pose_value[1];
}

function Point(props) {
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
      <img src= {linkPic} width={640} height={480}/>
      <p>Confident {point}</p>
      <p>Pose {PoseList[idx]}</p>

      <p>Status {status}</p>
      <p>Processing {processing}</p>
      <p>{idx} {pose_step} {step_pose_lenght} {tricker} </p>
    </div>
  );
}

export default function Exclassifier() {
  return (
    <Point/>
  );
};