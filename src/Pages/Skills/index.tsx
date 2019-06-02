import * as React from 'react';
import { Toast, ToastBody, ToastHeader, Col, Container, Row } from 'reactstrap';

import styled from 'styled-components';
import contents from './SkillsContents.json';

class Skills extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <h1 className="pagetitle">Skills</h1>
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
              <ToastHeader icon="light">
                <h2>{item.category}</h2>
              </ToastHeader>
              <ToastBody>
                <ul>
                  {item.icon.map((icn, item_id) => (
                    <li key={item_id}>
                      <IconImage src={`${process.env.PUBLIC_URL}/img/skills/${icn}`} alt="" />
                      <span>{item.skill[item_id]}</span>
                    </li>
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

const SkillsContainer = styled(Container)`
  max-width: 1300px;
  margin: 5vh auto;

  div.row {
    margin-bottom: 20px;

    @media (min-width: 769px) {
      &:nth-of-type(odd){
        float: left;
      }
      &:nth-of-type(even){
        float: right;
      }
    }
  }
`;

const SkillsToast = styled(Toast)`
  max-width: 100%!important;
  max-height: 400px;
  margin-bottom: 30px;
  border-radius: 5px!important;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    max-height: 450px;
  }

  .toast {
    &-header {
      background-color: #889bc3;

      h2 {
        vertical-align: middle;
        display: table-cell;
        line-height: 3rem;
        padding-left: 2px;
        color: #fff;
      }
    }
    &-body {
      background-color: #fff;
      
      ul {
        margin-top: 30px;

        @media (max-width: 768px) {
          margin-top: 10px;
          padding-left: 0px;
        }

        &:after {
          content: "";
          clear: both;
          display: block;
        }

        li {
          float: left;
          margin-right: 4rem;
          width: 150px;
          height: 150px;

          @media (max-width: 768px) {
            width: 33.333333333%;
            height: auto;
            margin-right: 0px;
            margin-bottom: 15px;
          }

          span {
            font-size: 1.8rem;
            color: #5a657a;

            @media (max-width: 768px) {
              font-size: 1.4rem;
            }
          }
        }
      }
    }
  }
`;

const IconImage = styled.img`
  margin: 6px auto 0;
  max-width: 100px;
  max-height: 100px;
  padding-bottom: 10px;
  display: table-cell;

  @media (max-width: 768px) {
    max-width: 55px;
    max-height: 55px;
    padding-bottom: 5px;
  }
`;