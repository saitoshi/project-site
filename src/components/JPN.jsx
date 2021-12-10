import React from "react";
import { Header, Container, Card, Image, Grid, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function JPN() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">自己紹介</Header>
        <Container text>
          <hr/>
          <Header as ="h3">資格など</Header>
          <ul>
            <li>TOEIC Listen and Reading: 975 </li>
          </ul>
          <Header as ="h3">学歴</Header>
          <ul>
            <li>現在は<b>ハワイ大学マノア校</b>でコンピューターサイエンスと数学をダブル専攻を受けています。</li>
            <li> 大学ではソフトウェアやデーターサイエンスの勉強をメインにしています。</li>
            <li>現在、私が参加中の研究課題やプロジェクトはこれです。</li>
            <br/>
            <Card.Group itemsPerRow={3}>
              <Card>
                <Image src="https://saitoshi.github.io/images/RadGrad.png"/>
                <Card.Content>
                  <Card.Header textAlign='center'>RadGrad 2.0</Card.Header>
                  <Card.Meta textAlign='center'>
                    <span className='date'>ON GOING</span>
                  </Card.Meta>
                  <Card.Description>
                    A Meteor and React based planner targeted for Computer Science and Electrical Engineering students that students ca                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  Software Engineering, Meteor, React <br/>
                  <br/>
                  <Grid>
                    <Grid.Column textAlign="center">
                      <Button as = {NavLink} exact to = "/radgrad">MORE DETAILS</Button>
                    </Grid.Column>
                  </Grid>
                </Card.Content>
              </Card>
            </Card.Group>
          </ul>
        </Container>
      </Container>
  );
}

export default JPN;
