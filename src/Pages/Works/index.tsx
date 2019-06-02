import * as React from "react";
import {Card, CardBody, CardText, CardTitle, Col, Container, Row} from "reactstrap";

import styled from "styled-components";
import system from "./SystemDevelopments.json";
import website from "./WebsiteDevelopments.json";
import ImageZoom from 'react-medium-image-zoom'

class Works extends React.Component {
  constructor(props: {}) {
    super(props);
 }

  public render() {
    return (
      <div>
        <h1 className="pagetitle">Works</h1>
        <CategoryTitle>Web System Developments</CategoryTitle>
        <CardContainer fluid={true}>
          <Row>
            {system.map((item, i) => (
            <Col key={i} xs="12" lg="4">
              <SystemCard>
                <CardBody>
                  <CardTitle>{item.title}</CardTitle>
                  <CardText>{item.text}</CardText>
                  <h3>開発時期</h3>
                  {item.period ? <p className="period">{item.period}</p> : ""}
                  <h3>担当業務</h3>
                  {item.charge ? <p className="charge">{item.charge}</p> : ""}
                  <h3>開発ツール</h3>
                  {item.tools ? <p className="tools">{item.tools}</p> : ""}
                  {item.url ? <SourceLink><a href={item.url} target='_blank' rel="noopener noreferrer">SEE IT ONLINE</a></SourceLink> : ""}
                </CardBody>
              </SystemCard>
            </Col>
            ))}
          </Row>
        </CardContainer>

        <CategoryTitle>Website Developments</CategoryTitle>
        <CardContainer fluid={true}>
          <Row>
            {website.map((item, i) => (
              <Col key={i} xs="12" lg="3">
                <WebsiteCard>
                  <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <CardText>
                      <ImageZoom
                        image={{
                          src: `${process.env.PUBLIC_URL}/img/${item.filename}`,
                          alt: 'Golden Gate Bridge',
                          className: 'site-image'
                        }}
                        zoomImage={{
                          src: `${process.env.PUBLIC_URL}/img/${item.filename}`,
                          alt: 'Golden Gate Bridge'
                        }}
                       />
                    </CardText>
                    <h3>担当業務</h3>
                    {item.charge ? <p>{item.charge}</p> : ""}
                    {item.url ? <SourceLink><a href={item.url} target='_blank' rel="noopener noreferrer">SEE IT ONLINE</a></SourceLink> : ""}
                  </CardBody>
                </WebsiteCard>
              </Col>
            ))}
          </Row>
        </CardContainer>
      </div>
    );
 }
}

export default Works;

const CategoryTitle = styled.h2`
  font-size: 3rem;
  margin-top: 3vh;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin: 1vh 6rem;
  }
`;

const CardContainer = styled(Container)`
  max-width: 1300px;
  margin: 5vh auto;

  @media (max-width: 768px) {
    margin-top: 3vh;
  }
`;

const SystemCard = styled(Card)`
  max-width: 400px;
  max-height: 440px;
  margin-bottom: 30px;
  font-size: 1rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-height: 52rem;
  }

  .card-body {
    text-align: left;
    height: 440px;
    padding: 20px;

    @media (max-width: 768px) {
      height: 52rem;
    }
    
    .card-title {
      font-weight: bold;
      font-size: 1.6rem;
      text-align: center;
      margin: 5px auto 15px;
    }

    h3 {
      font-size: 1.2rem;
      color: #ff8c2c;
      border-bottom: 2px solid #ff8c2c;
      display: inline-block;
    }

    p {
      font-size: 1.4rem;

      &.card-text {
        text-align: justify;
        margin-bottom: 15px;
        line-height: 2.2rem;
      }
      &.period {
        font-size: 1.2rem;
      }
    }
  }
`;

const WebsiteCard = styled(SystemCard)`
  max-width: 300px;
  max-height: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    max-height: 48rem;
  }

  .card-body {
    height: 500px;

    @media (max-width: 768px) {
      height: 48rem;
    }

    img {
      &.site-image {
        border: 1px solid #ddd;
        display: block;
        width: 202px;
        margin: 0 auto;
      }
    }
  }
`;

const SourceLink = styled.div`
  position: absolute;
  bottom: 0;
  margin: 20px 0;
  font-size: 1.3rem;

  a {
    border: 1px solid #889bc3;
    border-radius: 4px;
    padding: 3px 6px;
    color: #889bc3;

    &:hover {
      text-decoration: none;
      color: #fff;
      background-color: #889bc3;
    }
  }
`;