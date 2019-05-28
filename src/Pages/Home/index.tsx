import * as React from "react";

import styled from "styled-components";

class Home extends React.Component {
  constructor(props: {}) {
    super(props);
  }

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
  color: #3f485b;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 20vh;
  }

  @media (min-width: 769px) {
    font-size: 3.5rem;
    margin-top: 40vh;
  }
`;

const JobTitle = styled.h2`
  color: #3f485b;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 769px) {
    font-size: 2.5rem;
  }
`;