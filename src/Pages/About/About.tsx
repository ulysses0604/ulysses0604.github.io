import * as React from 'react';
import { IconContext } from 'react-icons';
import { GoMarkGithub } from 'react-icons/go';

import './About.css';

class About extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1 className="about-page__title">About</h1>
        <div className="about-page__card">
          <table className="about-page__table">
            <tr>
              <th>Name</th>
              <td>Yu Nishimura</td>
            </tr>
            <tr className="about-page__icons">
              <td>
                <IconContext.Provider value={{ size: "5em" }}>
                  <GoMarkGithub />>
                </IconContext.Provider>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default About;