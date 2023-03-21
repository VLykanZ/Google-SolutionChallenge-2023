import './style/App.css';
import './style/navbar.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './component/Navbar';
import Home from './pages/main/Home';
import Knowledge from './pages/main/Knowledge';
import Stack from './pages/main/Stack';
import About from './pages/main/About';
import QuestionBodyPart from './pages/question/QuestionBodyPart';
import QuestionDiagnose from './pages/question/QuestionDiagnose';
import ExerciseComponent from './component/ExerciseComponent';
import DoExerciseComponent from './component/DoExerciseComponent';
import RecommendComponent from './component/RecommendComponent';


import store from './store';

function App() {

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <Navbar/>
        </div>
      <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Knowledge' element={<Knowledge/>}></Route>
            <Route path='/Stack' element={<Stack/>}></Route>
            <Route path='/About' element={<About/>} />
            <Route path='/QuestionBodypart' element={<QuestionBodyPart/>} />
            <Route path='/QuestionDiagnose' element={<QuestionDiagnose/>} />
            <Route path='/Exercise' element={<ExerciseComponent/>} />
            <Route path='/DoExercise' element={<DoExerciseComponent/>} />
            <Route path='/Recommend' element={<RecommendComponent/>} />
            <Route path="/QuestionBodyPart" element={<QuestionBodyPart />}/>
          </Routes>
      </div>
      </Router>
      </Provider>,
  document.getElementById('root')

  );
}

export default App;
