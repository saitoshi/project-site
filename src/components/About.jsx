import React from "react";
import { Header, Container, Grid, Image, Button, Icon } from 'semantic-ui-react';

function About() {
  const pageStyle = {
    paddingLeft: '10em',
    paddingTop: '1em',
  };
  return (
      <Container style={pageStyle}>
        <Header as = 'h2' textAlign='center'>自己紹介</Header>
        <hr/>
        <br/>
        <Container text>
          <Grid columns={2} divided>
            <Grid.Column textAlign="center">
            <Image src="https://github.com/saitoshi/images/blob/main/about.jpg?raw=true" centered size='large' circular/>
            <Header as = 'h3' textAlign = 'center'>SHIN</Header>
            <Button.Group centered>
            <Button color='twitter' size='medium' href="https://twitter.com/iseyadj45">
                <Icon name='twitter'/>
            </Button>
            <Button color='red' size='medium' href="mailto:saitoshi2145@gmail.com">
              <Icon name='envelope'/> 
            </Button>
            <Button color='github' size='small' href="https://github.com/saitoshi">
              <Icon name='github'/>
            </Button>
          </Button.Group>
            </Grid.Column>
            <Grid.Column>
              <ul>
                <li>TOEIC： 975点</li>
                <li>JLPT: N1 N2</li>
                <li>ハワイ大学マノア校<br/>
                数学とコンピューターサイエンスダブル専攻</li>
              </ul>
              <Header as = 'h3' textAlign = 'center'>趣味</Header>
              <ul>
                <li>ソフトウェアエンジニア</li>
                <li>日英通訳・翻訳</li>
                <li>データーサイエンス</li>
                <li>イラスト・デザイン</li>

              </ul>

            </Grid.Column>
          </Grid>
        


        </Container>
      </Container>
  );
}

export default About;
