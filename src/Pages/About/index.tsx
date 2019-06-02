import * as React from 'react';
import { IconContext } from 'react-icons';
import { GoMarkGithub } from 'react-icons/go';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';

import styled from 'styled-components';

class About extends React.Component {

  public render() {
    return (
      <div>
        <h1 className="pagetitle">About</h1>
        <Card>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>Yu Nishimura</td>
              </tr>
              <tr>
                <th>Born</th>
                <td>1976</td>
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

const Card = styled.div`
  margin: 5vh auto;
  background: white;
  border-radius: 10px;
  border: 2px solid #889bc3;

  @media(max-width: 768px) {
    width: 90%;
    padding: 15px 0;
  }

  @media(min-width: 769px) {
    width: 60rem;
  }

  table {
    text-align: left;
    padding: 50px 20px;
    margin: 0 auto;

    tr {
      margin-bottom: 20px;

      th {
        text-align: right;
        font-size: 2rem;
        padding: 15px 10px 0px;
        color: #889bc3;
      }

      td {
        font-size: 2rem;
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

            @media (max-width: 768px) {
              margin: 10px 10px 20px;
            }
          }
        }
      } 
    }
  }
`;