import React from "react";
import { Header, Container, Card, Image, Button, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function Essay() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">ESSAY</Header>
        <hr/>
        <Container text>
        <Card.Group itemsPerRow={3}>
          <Card as = {NavLink} exact to = "/pilotstudy-radgrad">
            <Image src="https://saitoshi.github.io/images/RadGrad.png"/>
            <Card.Content>
              <Card.Header textAlign='center'>Rising With RadGrad: A Quantitative Study on Leveling Up Student Retention and Degree Success</Card.Header>
              <Card.Meta textAlign='center'>
                <span className='date'>07-30-21</span>
              </Card.Meta>
              <Card.Description>
                An essay centering around a pilot study centering around with the new updates centered around RadGrad2.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              Undergraduate Studies, COVID-19, Stay Home
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
              Software Engineering, Meteor, React <br/>
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
              Software Engineering, Meteor, React <br/>
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
              Software Engineering, Meteor, React <br/>
              <br/>
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
              Undergraduate Studies, COVID-19, Stay Home
            </Card.Content>
          </Card>
        </Card.Group>
        </Container>
        <div className="push" />
      </Container>


  );
}

export default Essay;
