import * as React from 'react';
import { IconContext } from 'react-icons';
import { GoMarkGithub } from 'react-icons/go';

import styles from './About.module.scss';

class About extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1 className={styles.title}>About</h1>
        <div className={styles.card}>
          <table className={styles.table}>
            <tr>
              <th>Name</th>
              <td>Yu Nishimura</td>
            </tr>
            <tr className={styles.icons}>
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