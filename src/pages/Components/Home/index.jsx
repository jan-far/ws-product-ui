import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  React.useEffect(() => {
    document.title = 'Welcome';
  });

  return (
    <div className="base">
      <main className="main">
        <h1>Front-end </h1>
        <h2>Built with React.js</h2>
        <h3>All data from API routes with daily limits of 100 requests </h3>
        {/* <code></code> */}

        <Link to="/data" className="button">
          <span>View Visualized data</span>
        </Link>
      </main>
    </div>
  );
};

export default Home;
