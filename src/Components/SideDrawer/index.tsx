import * as React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { GoHome } from 'react-icons/go';
import styled, { css } from 'styled-components';

interface ISideDrawerWrapperProps {
  show: boolean,
}

interface IProps extends ISideDrawerWrapperProps {
  drawToggleClickHandler(): void,
}

class SideDrawer extends React.Component<IProps, {}> {

  public render() {
    return (
      <SideDrawerWrapper show={this.props.show}>
        <TitleAreaWrapper>
          <TitleWrapper>
            <a href="/" title="Home">
              <IconContext.Provider value={{ color: "white", size: "25px" }}><GoHome /></IconContext.Provider>
            </a>
          </TitleWrapper>
        </TitleAreaWrapper>
        <ul>
          <Link to="/about">
            <li onClick={this.clickHandler}>About</li>
          </Link>
          <Link to="/works">
            <li onClick={this.clickHandler}>Works</li>
          </Link>
          <Link to="/skills">
            <li onClick={this.clickHandler}>Skills</li>
          </Link>
        </ul>
      </SideDrawerWrapper>
    );
  }

  private clickHandler = () => {
    this.props.drawToggleClickHandler();
  };
}

export default SideDrawer;

const SideDrawerWrapper = styled.nav`
  height: 100%;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 300px;
  z-index: 200;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  ${(props: ISideDrawerWrapperProps) =>
    props.show &&
    css`
      box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.5);
      transform: translateX(0);
    `}
  
  @media (min-width: 769px) {
    display: none;
  }

  ul {
    height: 100%;
    padding: 0 0;
    margin: 0 0;
    list-style: none;
    justify-content: center;

    a {
      text-decoration: none;
      font-size: 2rem;

      &:hover,
      &:active {
        text-decoration: none;
      }

      li {
        padding: 1rem 0;
        padding-left: 3rem;
        border-bottom: thin solid black;
        color: #6d7a93;

        &:hover,
        &:active {
          background-color: #889bc3;
          color: #fff;
        }
      }
    }
  }
`;

const TitleAreaWrapper = styled.div`
    height: 56px;
    background: #889bc3;
`;

const TitleWrapper = styled.p`
    color: white;
    font-size: 2.5rem;
    text-decoration: none;
    padding: 0.5rem 3rem;
    margin: 0;
`;