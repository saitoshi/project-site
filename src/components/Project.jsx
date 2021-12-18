import React from "react";
import { Header, Container, Card, Image } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";

function Project() {
  const pageStyle = {
    paddingLeft: '10em',
    paddingTop: '1em',
  };
  return (
      <div className='bg-project'>
      <Container style={pageStyle}>
        <br/>
        <Header as ="h2" textAlign="center">WORKS</Header>
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
              Software Engineering<br/>
            </Card.Content>
          </Card>
          <Card as = {NavLink} exact to = "/radgrad">
            <Image src="https://saitoshi.github.io/images/RadGrad.png"/>
            <Card.Content>
              <Card.Header textAlign='center'>RadGrad 2.0</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>2021-07-31</span>
              </Card.Meta>
              <Card.Description>
                A Meteor and React based planner targeted for Computer Science and Electrical Engineering students that students can do based on their Career Goals.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Software Engineering
            </Card.Content>
          </Card>
          <Card as = {NavLink} exact to = "/pilotstudy-radgrad">
            <Image src="https://saitoshi.github.io/images/RadGrad.png"/>
            <Card.Content>
              <Card.Header textAlign='center'>Rising With RadGrad</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>07-30-21</span>
              </Card.Meta>
              <Card.Description>
                An essay centering around a pilot study centering around with the new updates centered around RadGrad2.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Pilot Study Research
            </Card.Content>
          </Card>
          <Card as = {NavLink} exact to = "/crosscountry">
            <Image src="https://raw.githubusercontent.com/saitoshi/images/main/algotrix.png"/>
            <Card.Content>
              <Card.Header textAlign='center'>Algo-Trix</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>2021-07-01</span>
              </Card.Meta>
              <Card.Description>
                An application created to help students struggling in Algorithm.             </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Software Engineering<br/>
            </Card.Content>
          </Card>
          <Card　as = {NavLink} exact to = "/radgradstart">
            <Image src="https://saitoshi.github.io/images/RadGrad.png"/>
            <Card.Content>
              <Card.Header textAlign='center'>RadGrad Initial Join Up</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>05-21-21</span>
              </Card.Meta>
              <Card.Description>
                Essay reflecting on the first week tasks on RadGrad Summer Internship that are programming related.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Essay <br/>
            </Card.Content>
          </Card>
          <Card　as = {NavLink} exact to = "/radgradfeedback">
            <Image src="https://saitoshi.github.io/images/RadGrad.png"/>
            <Card.Content>
              <Card.Header textAlign='center'>RadGrad Grad Feedback</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>05-20-21</span>
              </Card.Meta>
              <Card.Description>
                A response on the RadGrad research: purpose and ways to get student feedback.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Software Engineering Essay<br/>
              <br/>
            </Card.Content>
          </Card>
          <Card　as = {NavLink} exact to = "/radgradreview">
            <Image src="https://saitoshi.github.io/images/RadGrad.png"/>
            <Card.Content>
              <Card.Header textAlign='center'>RadGrad Grad Review</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>05-19-21</span>
              </Card.Meta>
              <Card.Description>
                A project created during my Summer 2021 internship program.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Software Engineering Essay <br/>
              <br/>
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
              Software Engineering
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
              Web Design and Mathematics
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
              Software Engineering
            </Card.Content>
          </Card>
          <Card as = {NavLink} exact to = "/math" >
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
              Mathematics and Education
            </Card.Content>
          </Card>
          <Card as = {NavLink} exact to = "/covid">
            <Image src="https://github.com/saitoshi/images/blob/main/pandemic.png?raw=true"/>
            <Card.Content>
              <Card.Header textAlign='center'>Pandemic Lockdown</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>04-01-20</span>
              </Card.Meta>
              <Card.Description>
                An essay writing how Stay Home orders from COVID 19 has affected my undergraduate life.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              COVID-19 Essay
            </Card.Content>
          </Card>
          <Card as = {NavLink} exact to = "/tokusatsu">
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
              Japanese & Research Paper
            </Card.Content>
          </Card>



        </Card.Group>
        </Container>
        <div className="push"/>
      </Container>
      </div>
  );
}

export default Project;
