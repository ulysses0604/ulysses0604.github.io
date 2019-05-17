import * as React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdMenu } from "react-icons/md";

import './Navbar.css';

interface IProps {
  drawToggleClickHandler(): void,
}

class Navbar extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  };

  public render() {
    return (
      <header className="navbar" style={{ padding: 0 }}>
        <nav className="navbar_navigation">
          <div className="navbar__toggle-button" onClick={this.clickHandler}>
            <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
              <MdMenu />
            </IconContext.Provider>
          </div>
          <div>
            <Link to="/" className="navbar_title">Portfolio</Link>
          </div>
          <div className="spacer" style={{ flex: 1 }} />
          <div className="navbar__navigation-items">
            <ul>
              <Link to="/about">
                <li>about</li>
              </Link>
              <Link to="/works">
                <li>works</li>
              </Link>
              <Link to="/skills">
                <li>skills</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
    );
  }

  private clickHandler() {
    this.props.drawToggleClickHandler();
  }
}

export default Navbar;