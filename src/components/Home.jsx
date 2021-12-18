import React from "react";
import './style.css';
import { Button, Icon, Grid, Header, Image, Container } from 'semantic-ui-react';


function Home() {
  const pageStyle = {
    paddingLeft: '10em',
    paddingTop: '1em',
  };
  return (
      <div className="bg-home">
        <Container style={pageStyle}>
    <div className="center-screen">
      <Image src='https://saitoshi.github.io/images/profile.jpeg' centered size='medium' circular/>
      <Header as ='h1' textAlign='center'>Shin Saito</Header>
      <Header as ='h3' textAlign='center'>WORK MORE & PLAY LESS</Header>
      <Grid>
        <Grid.Column textAlign="center">
          <Button.Group centered>
            <Button color='twitter' size='medium' href="https://twitter.com/iseyadj45">
                <Icon name='twitter'/> <br/> Follow me on Twitter
            </Button>
            <Button color='red' size='medium' href="saitoshi2145@gmail.com">
              <Icon name='envelope'/> <br/> Contact me through email
            </Button>
            <Button color='github' size='small' href="https://github.com/saitoshi">
              <Icon name='github'/><br/> Find me on GitHub
            </Button>
          </Button.Group>
        </Grid.Column>
      </Grid>
    </div>
      </Container>
      </div>
  );
}
export default Home;
