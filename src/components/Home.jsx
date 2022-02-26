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
      <Image src='https://github.com/saitoshi/project-site/blob/master/src/components/images/profile.jpeg?raw=true' centered size='medium' circular/>
      <Header as ='h1' textAlign='center'>Shin Saito</Header>
      <p><b>WORK MORE AND PLAY LESS</b><br/>
      Trying to live life the fullest.</p>
      <Grid>
        <Grid.Column textAlign="center">
          <Button.Group centered>
            <Button color='red' size='medium' href="mailto:saitoshi2145@gmail.com">
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
