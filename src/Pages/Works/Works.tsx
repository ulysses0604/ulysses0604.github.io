import * as React from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';

import './Works.css';

class Works extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1 className="works-page__title">Works</h1>
        <Container fluid={true} className="works-page__container">
          <Row>
            <Col xs="12" lg="4">
              <Card className="works-page__card">
                <CardBody>
                  <CardTitle>Hoge1</CardTitle>
                  <CardText>hogehogehoge</CardText>
                  <div className="works-page__source-link">
                    <a href="hoge">URL</a>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" lg="4">
              <Card className="works-page__card">
                <CardBody>
                  <CardTitle>Hoge2</CardTitle>
                  <CardText>hogehogehoge</CardText>
                  <div className="works-page__source-link">
                    <a href="hoge">URL</a>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Works;