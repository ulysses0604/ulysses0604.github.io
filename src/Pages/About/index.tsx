import * as React from "react";
import { IconContext } from "react-icons";
import { GoMarkGithub } from "react-icons/go";

import styled from "styled-components";

class About extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <PageTitle>About</PageTitle>
        <Card>
          <CardContentTable>
            <tr>
              <th>Name</th>
              <td>Yu Nishimura</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>43</td>
            </tr>
            <tr>
              <th>Facebook</th>
              <td></td>
            </tr>
            <tr>
              <th>Intagram</th>
              <td></td>
            </tr>
            <tr>
              <th>Interests and Hobbies</th>
              <td></td>
            </tr>
            <tr>
              <th>Current Focus</th>
              <td>React / TypeScript</td>
            </tr>
            <tr className="icons">
              <td>
                <IconContext.Provider value={{ size: "5em" }}>
                  <GoMarkGithub />
                </IconContext.Provider>
              </td>
            </tr>
          </CardContentTable>
        </Card>
      </div>
    );
  }
}

export default About;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  margin-top: 10vh;
`;

const Card = styled.div`
  margin: 5vh auto;
  background: white;
  border-radius: 10px;
  box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.5);

  @media(max-width: 768px) {
    width: 90%;
  }

  @media(min-width: 769px) {
      width: 60%;
  }
`;

const CardContentTable = styled.table`
  text-align: left;
  padding: 50px 20px;
  margin: 0 auto;
  // border-radius: 50px;
  // box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.5);

  tr {
    margin-bottom: 20px;

    &.icons {
      text-align: center;
    } 
  }
`;