import React from "react";
import { Link } from 'react-router-dom';
import '../../page.css'

function Home() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to="/QuestionBodypart">
            <button className="start">Start!</button>
        </Link>
      </div>
    );
  }

export default Home