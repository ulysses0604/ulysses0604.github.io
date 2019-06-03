import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

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
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Helvetica Neue","游ゴシック Medium",YuGothic,YuGothicM,"Hiragino Kaku Gothic ProN",メイリオ,Meiryo,sans-serif;
    background: transparent url('/img/bg-01.jpg') left top no-repeat;
    background-size: cover;
    background-attachment: fixed;

    @media (max-width: 768px) {
      background-repeat: repeat-y;
      background-attachment: scroll;
    }
  }

  h1.pagetitle {
    color: #5a657a;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 4rem;
      margin-top: 12vh;
    }

    @media (min-width: 769px) {
      font-size: 4.5rem;
      margin-top: 12vh;
    }
  }

  ul {
    list-style-type: none;
  }
`;

const MainWrapper = styled.main`
    height: 100%;
    text-align: center;
`;