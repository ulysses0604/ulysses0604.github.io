import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Backdrop from './Components/Backdrop';
import Navbar from './Components/Navbar';
import SideDrawer from './Components/SideDrawer';
import Home from './Pages/Home';
import About from './Pages/About';
import Works from './Pages/Works';
import Skills from './Pages/Skills';

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
    const sideDrawerOption = {
      show: this.state.isOpen,
      drawToggleClickHandler: this.drawToggleClickHandler
    }

    if (this.state.isOpen) {
      backDrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />
    }

    return (
      <Router>
        <div className="App">
          <GlobalStyle />
          <Navbar drawToggleClickHandler={this.drawToggleClickHandler} />
          <SideDrawer {...sideDrawerOption} />
          {backDrop}
          <MainWrapper>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/works" component={Works} />
              <Route path="/skills" component={Skills} />
              <Route path="/" component={Home} />
              <Route component={Home} />
            </Switch>
          </MainWrapper>
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

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    // background-image: url('./images/EchoCat.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: right bottom;
    background-size: 38% 38%;
  }
`;

const MainWrapper = styled.main`
    height: 100%;
    text-align: center;
`;