import * as React from 'react';
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';

import styles from './Works.module.scss';

class Works extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1 className={styles.title}>Works</h1>
        <Container fluid={true} className={styles.container}>
          <Row>
            <Col xs="12" lg="4">
              <Card className={styles.card}>
                <CardBody>
                  <CardTitle>Hoge1</CardTitle>
                  <CardText>hogehogehoge</CardText>
                  <div className={styles.source_link}>
                    <a href="hoge">URL</a>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xs="12" lg="4">
              <Card className={styles.card}>
                <CardBody>
                  <CardTitle>Hoge2</CardTitle>
                  <CardText>hogehogehoge</CardText>
                  <div className={styles.source_link}>
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