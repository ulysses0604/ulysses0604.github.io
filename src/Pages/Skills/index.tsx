import * as React from 'react';
import { Toast, ToastBody, ToastHeader, Col, Container, Row } from 'reactstrap';

import styles from './Skills.module.scss';
import contents from './SkillsContents.json';

class Skills extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1 className={styles.title}>Skills</h1>
        <Container fluid={true} className={styles.container}>
          <Row>
            { contents.map(item => (
              <Col xs={12} lg={4}>
                <Toast className={styles.toast}>
                  <ToastHeader icon="info">
                    {item.title}
                </ToastHeader>
                  <ToastBody>
                    {item.text}
                </ToastBody>
                </Toast>
              </Col>
            )) }
          </Row>
        </Container>
      </div>
    );
  }
}

export default Skills;