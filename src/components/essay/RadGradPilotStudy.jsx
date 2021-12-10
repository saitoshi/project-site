import React from "react";
import { Header, Container, Grid, Image, Button } from 'semantic-ui-react';
import '../style.css';
import { NavLink } from 'react-router-dom';

function RadGradPilotStudy() {
  return (
      <Container>
        <br/>
        <Header as = 'h2' textAlign="center">Rising With RadGrad <br/>A Quantitative Study on Leveling Up Student Retention and Degree Success</Header>
        <Grid textAlign = "center">
          <p>RadGrad2, Summer 2021 Internship Program, Software Engineering <br/>
          </p>
        </Grid>
        <Grid textAlign="center">
          <p><span className="bold-list">July 30, 2021</span></p>
        </Grid>
        <br/>
        <Container text>
         <b>Abstract</b><br/>
          In the last few decades, there has been a steady decline in the diversity of students graduating with a Computer Science degree. The RadGrad project tackles this issue by providing an alternative perspective to the undergraduate degree program. The approach in RadGrad is to make extracurricular activities equal in importance to curricular activities when designing a “well-balanced” degree plan. To accomplish this, RadGrad presents an alternative to GPA with Innovation, Competency, Experience points also known as MyI.C.E. In addition, RadGrad is designed to provide a “knowledge base” about the discipline including topic areas (called “Interests”) and Career Goals, Courses, Opportunities, (and in the near future), Internships. The goal for this summer is to make RadGrad v2.0 ready for deployment into both the ICS Department and the Computer Engineering program starting in Fall 2021. This summer, we participated in the development and evaluation of the second major version of RadGrad. So far, we improved the functionality of the system, and made progress on the integration of InternAloha, a plugin designed to help students find internships. In addition, we conducted a pilot study to investigate ways to improve the system based on real-life student perspectives. The results of the pilot study will be used to improve the design of the system, and include such findings as: user experience issues and the lack of incentive of some features. Through this experience we learned various skills and techniques used to develop a moderately-sized application and conduct meaningful software evaluations while focusing on larger research issues surrounding diversity in Computer Science.
          <Grid.Column textAlign="center">
            <a href = "https://csdl.ics.hawaii.edu/techreports/2021/21-01/21-01.pdf"><Button>READ ESSAY</Button></a>
          </Grid.Column>
        </Container>
        <div className="push"/>
      </Container>


  );
}

export default RadGradPilotStudy;
