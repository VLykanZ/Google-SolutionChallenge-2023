import './style/App.css';
import './style/navbar.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './pages/navbar/Home';
import Knowledge from './pages/navbar/Knowledge';
import Stack from './pages/navbar/Stack';
import About from './pages/navbar/About';
import ContactUs from './pages/navbar/ContactUs';

import QuestionBodyPart from './component/QuestionBodyPart';
import QuestionDiagnose from './pages/function/QuestionDiagnose';
import ExerciseList from './pages/function/ExerciseList';
import DoExercise from './pages/function/DoExercise';
import Recommend from './pages/function/Recommend';
// import StepProgressBar from './component/ProgressBar';


import store from './store';

function App() {

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <Navbar/>
        </div>
        {/* <div>
          <StepProgressBar/>
        </div> */}
      <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Knowledge' element={<Knowledge/>}></Route>
            <Route path='/Stack' element={<Stack/>}></Route>
            <Route path='/About' element={<About/>} />
            <Route path='/Contact-Us' element={<ContactUs/>} />
            <Route path='/QuestionBodypart' element={<QuestionBodyPart/>} />
            <Route path='/QuestionDiagnose' element={<QuestionDiagnose/>} />
            <Route path='/ExerciseList' element={<ExerciseList/>} />
            <Route path='/DoExercise' element={<DoExercise/>} />
            <Route path='/Recommend' element={<Recommend/>} />
            <Route path="/QuestionBodyPart" element={<QuestionBodyPart />}/>
          </Routes>
      </div>
      </Router>
      </Provider>,
  document.getElementById('root')

  );
}

export default App;
