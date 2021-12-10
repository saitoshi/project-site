import React from "react";
import { Header, Container, Card, Image, Button, Grid } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";

function Project() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">PROJECT</Header>
        <div className='comment'>Click on the cards if you would like to read more on the project.</div>
        <Container text>
        <hr/>
        <Card.Group itemsPerRow={3} centered>
          <Card as = {NavLink} exact to = "/internaloha">
            <Image src="https://internaloha.github.io/documentation/img/internaloha-logo.png"/>
            <Card.Content>
              <Card.Header textAlign='center'>Internaloha</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>2021-12-10</span>
              </Card.Meta>
              <Card.Description>
                A scrapper for the RadGrad application where it extracts information for recent internships.              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Software Engineering, Scrapper, TypeScript<br/>
            </Card.Content>
          </Card>
          <Card as = {NavLink} exact to = "/crosscountry">
            <Image src="https://github.com/saitoshi/images/blob/main/algotrix.png?raw=true"/>
            <Card.Content>
              <Card.Header textAlign='center'>Algo-Trix</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>ON GOING</span>
              </Card.Meta>
              <Card.Description>
                A Meteor and React based application created for ICS 427 Summer 2021 that provides college students additional practice for Algorithm outside of a textbook.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Software Engineering, React, Software Quality Assurance <br/>
            </Card.Content>
          </Card>
          <Card as = {NavLink} exact to = "/radgrad">
            <Image src="https://saitoshi.github.io/images/RadGrad.png"/>
            <Card.Content>
              <Card.Header textAlign='center'>RadGrad 2.0</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>ON GOING</span>
              </Card.Meta>
              <Card.Description>
                A Meteor and React based planner targeted for Computer Science and Electrical Engineering students that students can do based on their Career Goals.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Software Engineering, Meteor, React
            </Card.Content>
          </Card>
          <Card as = {NavLink} exact to = "/shocking">
            <Image src="https://saitoshi.github.io/images/shocking.png" />
            <Card.Content>
              <Card.Header textAlign='center'>Shocking Emissions</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>2021-05-04</span>
              </Card.Meta>
              <Card.Description>
                A meteor based application in which customers of Hawaiian Electric Industries can see how much green house gases they save in their transportation to work.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Software Engineering, Meteor, React
            </Card.Content>
          </Card>

          <Card as = {NavLink} exact to = "/tregear">
            <Image src="https://saitoshi.github.io/images/tregear.png" />
            <Card.Content>
              <Card.Header textAlign='center'>Tregear Story Translation</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>2020-12-13</span>
              </Card.Meta>
              <Card.Description>
                A Japanese to English translation for the short story called "Tregear Story" written by NAKANO Takao.              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Japanese to English Translation
            </Card.Content>
          </Card>
          <Card as = {NavLink} exact to = "/uhmath">
            <Image src="https://saitoshi.github.io/images/math.jpeg" />
            <Card.Content>
              <Card.Header textAlign='center'>UH Math Review</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>2020-06-01</span>
              </Card.Meta>
              <Card.Description>
                A review website where college students can study or prepare for Math courses offered at UH Manoa.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Mathematics, HTML, LaTex
            </Card.Content>
          </Card>

          <Card as = {NavLink} exact to = "/textbookhunt">
            <Image src="https://saitoshi.github.io/images/textbookhunt.png" />
            <Card.Content>
              <Card.Header textAlign='center'>Textbook Hunt</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>2020-05-15</span>
              </Card.Meta>
              <Card.Description>
                A meteor and react based application where students can sell used textbooks to others               </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Software Engineering, Meteor, React<br/>
            </Card.Content>
          </Card>

          <Card>
            <Image src="https://saitoshi.github.io/images/mathchallenge.jpg" />
            <Card.Content>
              <Card.Header textAlign='center'>Hawaii Math State Challenge</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>2020-02-15</span>
              </Card.Meta>
              <Card.Description>
                A project event where we did a presentation on the different possible ways of fixing the island of Kahoolawe.             </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Mathematics, Education, Academic Event
              <Grid>
                <Grid.Column textAlign="center">
                  <Button as = {NavLink} exact to = "/math">MORE DETAILS</Button>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>

          <Card>
            <Image src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/03/Toei-Tokusatsu-header.png" />
            <Card.Content>
              <Card.Header textAlign='center'>Japanese Tokusatsu Paper</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>2019-05-15</span>
              </Card.Meta>
              <Card.Description>
                A final research paper written centering around the history of Japanese Special Effect Shows <i>Tokusatsu</i> for JPN 421: Japanese Composition.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Japanese, Research Paper
              <Grid>
                <Grid.Column textAlign="center">
                  <Button as = {NavLink} exact to = "/tokusatsu">MORE DETAILS</Button>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>

        </Card.Group>

        </Container>
        <div className="push"/>
      </Container>


  );
}

export default Project;
