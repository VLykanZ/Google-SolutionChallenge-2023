import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

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
        <ul className="horizontal-menu">
          <li>
            <Link to = "/Home">Home</Link>
          </li>
          <li>
            <Link to = "/Knowledge">Knowledge</Link>
          </li>
          <li>
            <Link to = "/Stack">Stack</Link>
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