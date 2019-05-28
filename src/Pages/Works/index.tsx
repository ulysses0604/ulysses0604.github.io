import * as React from "react";
import {Card, CardBody, CardText, CardTitle, Col, Container, Row} from "reactstrap";

import styled from "styled-components";
import system from "./SystemDevelopments.json";
import website from "./WebsiteDevelopments.json";

class Works extends React.Component {
  constructor(props: {}) {
    super(props);
 }

  public render() {
    return (
      <div>
        <PageTitle>Works</PageTitle>
        <CategoryTitle>System Developments</CategoryTitle>
        <CardContainer fluid={true}>
          <Row>
            {system.map((item, i) => (
            <Col key={i} xs="12" lg="4">
              <WorksCard>
                <CardBody>
                  <CardTitle>{item.title}</CardTitle>
                  <CardText>{item.text}</CardText>
                  {item.url ? <SourceLink><a href={item.url} target='_blank' rel="noopener noreferrer">SEE IT ONLINE</a></SourceLink> : ""}
                  {item.period ? <p>{item.period}</p> : ""}
                  {item.charge ? <p>{item.charge}</p> : ""}
                  {item.tools ? <p>{item.tools}</p> : ""}
                </CardBody>
              </WorksCard>
            </Col>
            ))}
          </Row>
        </CardContainer>

        <CategoryTitle>Website Developments</CategoryTitle>
        <CardContainer fluid={true}>
          <Row>
            {website.map((item, i) => (
              <Col key={i} xs="12" lg="4">
                <WorksCard>
                  <CardBody>
                    <CardTitle>{item.title}</CardTitle>
                    <CardText>
                      <a href={`${process.env.PUBLIC_URL}/img/${item.filename}`} target='_blank' rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/img/${item.filename}`} alt={item.title} width="150" />
                      </a>
                    </CardText>
                    {item.url ? <SourceLink><a href={item.url} target='_blank' rel="noopener noreferrer">SEE IT ONLINE</a></SourceLink> : ""}
                    {item.charge ? <p>{item.charge}</p> : ""}
                  </CardBody>
                </WorksCard>
              </Col>
            ))}
          </Row>
        </CardContainer>
      </div>
    );
 }
}

export default Works;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  margin-top: 12vh;
`;

const CategoryTitle = styled.h2`
  font-size: 3.5rem;
  margin-top: 10vh;
`;

const CardContainer = styled(Container)`
  max-width: 1300px;
  margin: 5vh auto;
`;

const WorksCard = styled(Card)`
  max-width: 400px;
  height: 300px;
  margin-bottom: 30px;
`;

const SourceLink = styled.div`
  position: absolute;
  bottom: 0;
  left: 35 %;
  margin: 20px 0;
`;