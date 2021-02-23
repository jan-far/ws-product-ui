import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import '../Home/home.css';

const HomePage = () => {
  React.useEffect(() => {
    document.title = 'EQ Works - visualize';
  });

  return (
    <>
      <Container maxWidth="xs">
        <div className="main centered">
          <h1>
            <strong>Welcome to EQWorks Work Sample</strong>
          </h1>
          <h2>Data Visualization...</h2>
          <Link to="/charts" className="button">
            <span>Charts and Table</span>
          </Link>
          <Link to="/locations" className="button">
            <span>Map data</span>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
