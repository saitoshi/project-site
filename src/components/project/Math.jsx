import React from "react";
import { Header, Container, Grid } from 'semantic-ui-react';

function Math() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">Hawaii Math State Challenge</Header>
       <Grid textAlign='center'><span className='bold-list'>2020-02-15</span> </Grid>
        <Grid textAlign='center'>Mathematics, Education, Event</Grid>
        <br/>
        <Container text>
          <hr/>
          <p> The project the Hawaii State Challenge is an event organized by the Department of Education to teach elemntary school students to high school kids about the applications of math in the local neighborhood. The main topic that was used for this project was how math can be applied to revive the nature of the island of Kahoolawe. The project was broken into parts: the research, educational planner, and the educational facilitator. The part I took was the planner and the facilitator. Since people from different age groups learn math differently, as a planner and facilitator, we devised plans on what is appropriate and fun to make the learning enaging.
            <br/>
            The event was held on Feburary 15, 2020 at Kapiolani Community College and the main age group for that event was high school students. Unlike, elementary school students, not many props were neccessary since majority are young adults, the learning process idea was still difficult to create. My group decided to do an engaging presentation while presenting we would do questionares and asking opinions. My job was to design the presentation based off of what my teammates desired and created it to be engaging and not boring at all.
            <br/>
            What I have learned so far is that creating a presentation that is fun but still keeping the professionalism is difficult. Sometimes fun tends to make things more unprofessional and as a result it decreases our credibility. Additionally, trying to organize others thought was another challenge as there were times where I misinterpreted ones thought based off of a note. The main thing that was taken from this was to remain calm even if the situation seemed chaotic.
            <br/>
          </p>
        </Container>
      </Container>
  );
}

export default Math;
