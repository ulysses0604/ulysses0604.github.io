import * as React from 'react';

import styled from 'styled-components';

class Home extends React.Component {

  public render() {
    return (
      <div>
        <PageTitle>Yu Nishimura Portfolio Site</PageTitle>
        <JobTitle>Web Developer</JobTitle>
      </div>
    );
  }
}

export default Home;

const PageTitle = styled.h1`
  /* color: #3f485b; */
  color: #fff;
  
  @media (max-width: 768px) {
    font-size: 3.7rem;
    letter-spacing: 2px;
    margin: 25vh auto 0;
    width: 32rem;
    font-weight: bold;
  }

  @media (min-width: 769px) {
    font-size: 6rem;
    margin-top: 40vh;
  }
`;

const JobTitle = styled.h2`
  color: #fff;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 769px) {
    font-size: 4rem;
  }
`;