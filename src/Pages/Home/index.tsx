import * as React from 'react';

import styles from './Home.module.scss';

class Home extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1 className={styles.title}>Yu Nishimura Portfolio Site</h1>
      </div>
    );
  }
}

export default Home;