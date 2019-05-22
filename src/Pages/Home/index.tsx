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