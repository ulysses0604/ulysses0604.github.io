import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Backdrop from './Components/Backdrop/Backdrop';
import Navbar from './Components/Navbar/Navbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Works from './Pages/Works/Works';
import Skills from './Pages/Skills/Skills';

interface ISideDrawerState {
  isOpen: boolean;
}

class App extends React.Component<{}, ISideDrawerState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.drawToggleClickHandler = this.drawToggleClickHandler.bind(this);
    this.backdropClickHandler = this.backdropClickHandler.bind(this);
  };

  public render() {
    let backDrop;

    if (this.state.isOpen) {
      backDrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />
    }

    return (
      <Router>
        <div className="App">
          <Navbar drawToggleClickHandler={this.drawToggleClickHandler} />
          <SideDrawer show={this.state.isOpen} drawToggleClickHandler={this.drawToggleClickHandler} />
          {backDrop}
          <div className="main">
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/works" component={Works} />
              <Route path="/skills" component={Skills} />
              <Route path="/" component={Home} />
              <Route component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  };

  private drawToggleClickHandler = () => {
    // ハンバーガーメニュークリックでサイドバー表示切り替え
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  };

  private backdropClickHandler = () => {
    // オーバーレイエリアタップでサイドバーとオーバーレイを非表示
    this.setState({ isOpen: false });
  };
}

export default App;
