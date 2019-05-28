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
          <ListItems />
        </SkillsContainer>
      </div>
    );
  }
}

export default Skills;

class ListItems extends React.Component {
  public render() {
    return (
      contents.map((item, row_id) => (
        <Row key={row_id}>
          <Col xs={12} lg={12}>
            <SkillsToast>
              <ToastHeader icon="info">
                <h2>{item.category}</h2>
              </ToastHeader>
              <ToastBody>
                <ul>
                  {item.icon.map((icn, item_id) => (
                    <SkillItems key={item_id}>
                      <IconImage src={`${process.env.PUBLIC_URL}/img/skills/${icn}`} alt="" />
                      <SkillName>{item.skill[item_id]}</SkillName>
                    </SkillItems>
                  ))}
                </ul>
              </ToastBody>
            </SkillsToast>
          </Col>
        </Row>
      ))
    )
  }
}

const IconImage = styled.img`
  margin: 0 auto;
  max-height: 100px;
  padding-bottom: 10px;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
`;

const SkillItems = styled.li`
  float: left;
`;

const SkillName = styled.span`
  font-size: 1.1rem;
`;

const PageTitle = styled.h1`
  font-size: 3.5rem;
  margin-top: 12vh;
`;

const SkillsContainer = styled(Container)`
  max-width: 1300px;
  margin: 5vh auto;
`;

const SkillsToast = styled(Toast)`
  max-width: 100%!important;
  height: 300px;
  margin-bottom: 30px;
`;