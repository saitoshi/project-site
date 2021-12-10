import React from "react";
import { Header, Container } from 'semantic-ui-react';

function About() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">ABOUT ME</Header>
        <Container text>
          <hr/>
          <p>My name is <b>Shin</b>. Currently an undergraduate student studying <b>Computer Science and Mathematics</b>.
          My interests are in Software Engineering, Mathematic Teaching, and Design.
            <br/>
            The current three mottos I follow for my daily life:
            <ol>
              <li>Work More And Play Less</li>
              <li>Take Both Of Quality and Quantity</li>
            </ol>
          </p>
          <Header as ="h2" textAlign="left">COURSEWORK</Header>
          <hr/>
          <p>Here are some of my course work that I have written for both my computer science and mathematics course.</p>

        </Container>
      </Container>
  );
}

export default About;
