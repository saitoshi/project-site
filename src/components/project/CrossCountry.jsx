import React from "react";
import { Header, Container, Grid, Image } from 'semantic-ui-react';

function CrossCountry() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">Algo-Trix</Header>
        <Grid textAlign = "center">
          <p textAlign="center"> Software Engineering, Software Quality Assurance, React <br/></p>
        </Grid>
        <Grid textAlign ="center">
          <p textAlign ="center">  <span className="bold-list"> On Going</span></p>
        </Grid>
        <Container text>
          <hr/>
          <Header as ="h3" textAlign="left">OVERVIEW OF ICS 427</Header>
          During the 6 week period of ICS 427, the class was broken into teams of 3-4 people of their choice and were
          asked to work on a single application project that highlighted the elements of Software Quality Assurance.
          <br/>
          The group I was part of was called <a href="https://cross-country-coders.github.io/">Cross Country Coders</a>.
          The application that the group created was called Algo-Trix which is a user-based application that people can study algorithms.
          <br/>
          <ul>
            <li> The link to the <a href="https://cross-country-coders.github.io/">GitHub Organization Page</a></li>
            <li> The link to the <a href="https://github.com/cross-country-coders/algo-trix">GitHub Repository Page</a></li>
          </ul>
          <Image src ="https://github.com/saitoshi/images/blob/main/algotrix.png?raw=true" centered/>
          <div className="comment">The logo created for AlgoTrix application.</div>
          <b><u>Contributions to AlgoTrix</u></b><br/>
          With ICS 427 being a six week course, our group took advantage of GitHub's <i>Kanban</i> by making Weekly Milestone Issues where each
          week a member selected an issue to work on.
          <ol>
            <li><a href={"https://github.com/cross-country-coders/algo-trix/projects/1"}>Milestone 1</a></li>
            For Milestone 1, the main goal was to get the mock designs for the application to be created.
            To begin with the group used <a href={"https://www.figma.com/files/recent?fuid=934216239644834346"}>Figma</a> to make mock up designs. I did the Landing Page, Sample Problem, and Notes Pages.
            <li><b>Week 3 Contributions</b></li>
            <ul>
              <li>I created one of the topic pages for the group to follow. Using the tab and modal components of Semantic UI React, I created a component
              that stores the notes or explanations that students should remember and then created a problem component that contains problems.</li>
              <Image src ='https://github.com/saitoshi/images/blob/main/problem.gif?raw=true' centered/>
              <div className='comment'>A gif of the Proof Writing Page of the Application.</div>
            </ul>
          </ol>
        </Container>
        <div className ="push"/>
      </Container>
  );
}

export default CrossCountry;
