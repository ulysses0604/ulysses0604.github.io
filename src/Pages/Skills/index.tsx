import * as React from "react";
import { Toast, ToastBody, ToastHeader, Col, Container, Row } from "reactstrap";

import styled from "styled-components";
import contents from "./SkillsContents.json";

class Skills extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <PageTitle>Skills</PageTitle>
        <SkillsContainer fluid={true}>
          <Row>
            { contents.map(item => (
              <Col xs={12} lg={4}>
                <SkillsToast>
                  <ToastHeader icon="info">
                    {item.title}
                </ToastHeader>
                  <ToastBody>
                    {item.text}
                </ToastBody>
                </SkillsToast>
              </Col>
            )) }
          </Row>
        </SkillsContainer>
      </div>
    );
  }
}

export default Skills;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  margin-top: 10vh;
`;

const SkillsContainer = styled(Container)`
  max-width: 1300px;
  margin: 5vh auto;
`;

const SkillsToast = styled(Toast)`
  max-width: 400px;
  height: 300px;
  margin-bottom: 30px;
`;