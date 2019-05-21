import * as React from "react";
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from "reactstrap";

import styled from "styled-components";

class Works extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <PageTitle>Works</PageTitle>
        <CardContainer fluid={true}>
          <Row>
            <Col xs="12" lg="4">
              <WorksCard>
                <CardBody>
                  <CardTitle>Hoge1</CardTitle>
                  <CardText>hogehogehoge</CardText>
                  <SourceLink>
                    <a href="hoge">URL</a>
                  </SourceLink>
                </CardBody>
              </WorksCard>
            </Col>
            <Col xs="12" lg="4">
              <WorksCard>
                <CardBody>
                  <CardTitle>Hoge2</CardTitle>
                  <CardText>hogehogehoge</CardText>
                  <SourceLink>
                    <a href="hoge">URL</a>
                  </SourceLink>
                </CardBody>
              </WorksCard>
            </Col>
          </Row>
        </CardContainer>
      </div>
    );
  }
}

export default Works;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  margin-top: 10vh;
`;

const CardContainer = styled(Container)`
  max-width: 1200px;
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