import * as React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdMenu } from 'react-icons/md';

import styled from 'styled-components';

interface IProps {
  drawToggleClickHandler(): void,
}

class Navbar extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  };

  public render() {
    return (
      <NavigationBar>
        <Navigation>
          <MenuIconWrapper onClick={this.clickHandler}>
            <IconContext.Provider value={{ color: "#fff", size: "2.5em" }}>
              <MdMenu />
            </IconContext.Provider>
          </MenuIconWrapper>
          <TitleWrapper to="/">Yu Nishimura Portfolio</TitleWrapper>
          <GrowWrapper />
          <NavigationItemsWrapper>
            <ul>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/works">
                <li>Works</li>
              </Link>
              <Link to="/skills">
                <li>Skills</li>
              </Link>
            </ul>
          </NavigationItemsWrapper>
        </Navigation>
      </NavigationBar>
    );
  }

  private clickHandler = () => {
    this.props.drawToggleClickHandler();
  };
}

export default Navbar;

const SiteMainColor = "#6d7a93";

const NavigationBar = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 56px;
  background-color: #fff;
  border-top: 2px solid ${SiteMainColor};
  z-index: 100;
`;

const Navigation = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-left: 1rem;
`;

const MenuIconWrapper = styled.div`
  background-color: ${SiteMainColor};
  padding: 4px 4px;

  @media (min-width: 769px) {
    display: none;
  }
`;

const TitleWrapper = styled(Link)`
  color: ${SiteMainColor};
  font-size: 2.5rem;
  padding: 0 1rem 4px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
  
  @media (min-width: 769px) {
    padding: 0 0rem 4px;
  }
  @media (max-width: 768px) {
    width: 29rem;
    text-align: center;
  }
`;

const GrowWrapper = styled.div`
  flex: 1;
`;

const NavigationItemsWrapper = styled.div`
  height: 100%;
  
  ul {
    list-style: none;
    line-height: 1.3em;
    margin: 0;
    padding: 0 2em 0 0;
    display: flex;
    height: 100%;

    a {
      color: ${SiteMainColor};
      text-decoration: none;
      font-size: 2.2rem;

      &:hover {
        text-decoration: none;
      }

      li {
        padding: 18px 2rem;
      }
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;