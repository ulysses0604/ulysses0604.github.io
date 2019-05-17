import * as React from 'react';

import './Home.css';

class Home extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <main className="main">
        <h1 className="home-page__title">Yu Nishimura Portfolio Site</h1>
      </main>
    );
  }
}

export default Home;