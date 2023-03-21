import React, { useRef , useState, useEffect} from "react";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { Link } from 'react-router-dom';

var outputArray;
export function prediction(inputArray) {
  const runmodel = async () => {
    const model = await tf.loadLayersModel('https://models.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json');
    classify(model, inputArray);
  };
  const classify = async (model, inputArray) => {
    const outputData = await model.predict(inputArray);
    outputArray = Array.from(outputData.dataSync());
  };
  runmodel();
  return outputArray;
}

export  function Classifier() {
  var point_pose = pose['keypoints'];
  var input_model = [
    point_pose['0']['position']['x'], point_pose['0']['position']['y'], point_pose['0']['score'],
    point_pose['1']['position']['x'], point_pose['1']['position']['y'], point_pose['1']['score'],
    point_pose['2']['position']['x'], point_pose['2']['position']['y'], point_pose['2']['score'],
    point_pose['3']['position']['x'], point_pose['3']['position']['y'], point_pose['3']['score'],
    point_pose['4']['position']['x'], point_pose['4']['position']['y'], point_pose['4']['score'],
    point_pose['5']['position']['x'], point_pose['5']['position']['y'], point_pose['5']['score'],
    point_pose['6']['position']['x'], point_pose['6']['position']['y'], point_pose['6']['score'],
    point_pose['7']['position']['x'], point_pose['7']['position']['y'], point_pose['7']['score'],
    point_pose['8']['position']['x'], point_pose['8']['position']['y'], point_pose['8']['score'],
    point_pose['9']['position']['x'], point_pose['9']['position']['y'], point_pose['9']['score'],
    point_pose['10']['position']['x'], point_pose['10']['position']['y'], point_pose['10']['score'],
    point_pose['11']['position']['x'], point_pose['11']['position']['y'], point_pose['11']['score'],
    point_pose['12']['position']['x'], point_pose['12']['position']['y'], point_pose['12']['score'],
    point_pose['13']['position']['x'], point_pose['13']['position']['y'], point_pose['13']['score'],
    point_pose['14']['position']['x'], point_pose['14']['position']['y'], point_pose['14']['score'],
    point_pose['15']['position']['x'], point_pose['15']['position']['y'], point_pose['15']['score'],
    point_pose['16']['position']['x'], point_pose['16']['position']['y'], point_pose['16']['score'],
  ];
  // const inputArray = tf.tensor2d([input_model]);
  const inputArray = tf.tensor2d([[Math.random(),Math.random()*0.5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]], [1, 34]);
  const predictresult = prediction(inputArray);
  return predictresult;
}

var pose;
var confident;
const color = "red";
const lineWidth = 10;
function drawPoint(ctx, y, x, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

/**
 * Draw pose keypoints onto a canvas
 */
function drawKeypoints(keypoints, minConfidence, ctx, scale = 1) {
  for (let i = 0; i < keypoints.length; i++) {
    const keypoint = keypoints[i];
    if (keypoint.score < minConfidence) {
      continue;
    }

    const { y, x } = keypoint.position;
    drawPoint(ctx, y * scale, x * scale, 3, color);
  }
}

function toTuple({ y, x }) {
  return [y, x];
}

/**
 * Draws a line on a canvas, i.e. a joint
 */
export function drawSegment([ay, ax], [by, bx], color, scale, ctx) {
  ctx.beginPath();
  ctx.moveTo(ax * scale, ay * scale);
  ctx.lineTo(bx * scale, by * scale);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;
  ctx.stroke();
}

/**
 * Draws a pose skeleton by looking up all adjacent keypoints/joints
 */
function drawSkeleton(keypoints, minConfidence, ctx, scale = 1) {
  const adjacentKeyPoints = posenet.getAdjacentKeyPoints(
    keypoints,
    minConfidence
  );

  adjacentKeyPoints.forEach((keypoints) => {
    drawSegment(
      toTuple(keypoints[0].position),
      toTuple(keypoints[1].position),
      color,
      scale,
      ctx
    );
  });
}
var confident = 0.3;
const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
  const ctx = canvas.current.getContext("2d");
  canvas.current.width = videoWidth;
  canvas.current.height = videoHeight;

  drawKeypoints(pose["keypoints"], confident, ctx);
  drawSkeleton(pose["keypoints"], confident, ctx);
};

function MovenetComponent() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  //  Load posenet
  const runPosenet = async () => {
    const net = await posenet.load();
    //
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Make Detections
      pose = await net.estimateSinglePose(video);
      console.log(pose)
      drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
    }
    
  };
  runPosenet();

  return (
    <>
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            zindex:9,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <canvas
          ref={canvasRef}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            position: "absolute",
          }}
        />
    </>
  );
}

export default MovenetComponent