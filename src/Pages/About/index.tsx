import * as React from "react";
import { IconContext } from "react-icons";
import { GoMarkGithub } from "react-icons/go";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

import styled, {css} from "styled-components";

class About extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <PageTitle>About</PageTitle>
        <Card>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>Yu Nishimura</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>43</td>
              </tr>
              <tr>
                <th>Interests</th>
                <td>Books, Movies, Drones, Running</td>
              </tr>
              <tr>
                <th>Current Focus</th>
                <td>React / TypeScript / Machine Learning</td>
              </tr>
              <tr className="icons">
                <td colSpan={2}>
                  <IconContext.Provider value={{ size: "60px" }}>
                    <a href="https://github.com/ulysses0604" title="Github" target="_blank" rel="noopener noreferrer">
                      <GoMarkGithub /></a>
                    <a href="https://www.facebook.com/yuh.nishi" title="Facebook" target="_blank" rel="noopener noreferrer">
                      <FaFacebookSquare /></a>
                    <a href="https://www.instagram.com/n1sh1mvr4/" title="Instagram" target="_blank" rel="noopener noreferrer">
                      <FaInstagram /></a>
                  </IconContext.Provider>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    );
  }
}

export default About;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  margin-top: 12vh;
  color: #5a657a;
`;

const Card = styled.div`
  margin: 5vh auto;
  background: white;
  border-radius: 10px;
  /* box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.5); */
  border: 2px solid #889bc3;

  @media(max-width: 768px) {
    width: 90%;
  }

  @media(min-width: 769px) {
      width: 45%;
  }

  table {
    text-align: left;
    padding: 50px 20px;
    margin: 0 auto;
    /* border-radius: 50px; */
    /* box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.5); */

    tr {
      margin-bottom: 20px;

      th {
        text-align: right;
        font-size: 1.5rem;
        padding: 15px 10px 0px;
        color: #889bc3;
      }

      td {
        font-size: 1.5rem;
        padding-left: 10px;
        padding: 15px 10px 0px;
        color: #5a657a;
      }

      &.icons {
        text-align: center;

        td {
          svg {
            color: #5a657a;
            margin: 10px 30px 20px;
            /* transition-duration: 1s; */

            /* &:hover {
              transform: rotate(360deg);
            } */
          }
        }
      } 
    }
  }
`;