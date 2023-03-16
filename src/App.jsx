import './style/App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

import Home from './pages/main/Home';
import Knowledge from './pages/main/Knowledge';
import Stack from './pages/main/Stack';
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
        <ul className="navbar">
          <li className='home-menu'>
            <NavLink className='nav-bar-link' to = "/Home"
              >HOME</NavLink>
          </li>
          <li>
            <NavLink className='nav-bar-link' to = "/Knowledge">KNOWLEDGE</NavLink>
          </li>
          <li>
            <NavLink className='nav-bar-link' to = "/Stack">TECH STACK</NavLink>
          </li>
        </ul>
        <Routes>
            <Route path='/Home' element={<Home/>}></Route>
            <Route path='/Knowledge' element={<Knowledge/>}></Route>
            <Route path='/Stack' element={<Stack/>}></Route>
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
