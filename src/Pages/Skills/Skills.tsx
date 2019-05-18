import * as React from 'react';
import { Toast, ToastBody, ToastHeader, Col, Container, Row } from 'reactstrap';

import './Skills.css';

class Skills extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1 className="skills-page__title">Skills</h1>
        <Container fluid={true} className="skills-page__container">
          <Row>
            <Col xs="12" lg="4">
              <Toast className="skills-page__toast">
                <ToastHeader icon="info">
                  Hoge1
                </ToastHeader>
                <ToastBody>
                  HogeHoge
                </ToastBody>
              </Toast>
            </Col>
            <Col xs="12" lg="4">
              <Toast className="skills-page__toast">
                <ToastHeader icon="info">
                  Hoge2
                </ToastHeader>
                <ToastBody>
                  HogeHoge
                </ToastBody>
              </Toast>
            </Col>
            <Col xs="12" lg="4">
              <Toast className="skills-page__toast">
                <ToastHeader icon="info">
                  Hoge3
                </ToastHeader>
                <ToastBody>
                  HogeHoge
                </ToastBody>
              </Toast>
            </Col>
            <Col xs="12" lg="4">
              <Toast className="skills-page__toast">
                <ToastHeader icon="info">
                  Hoge4
                </ToastHeader>
                <ToastBody>
                  HogeHoge
                </ToastBody>
              </Toast>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Skills;