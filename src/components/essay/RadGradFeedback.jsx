import React from "react";
import { Header, Container, Grid, Image } from 'semantic-ui-react';
import '../style.css';

function RadGradFeedback() {
  return (
      <Container>
        <br/>
        <Header as ="h2" textAlign="center">RadGrad Grad Feedback</Header>
        <Grid textAlign = "center">
          <p>RadGrad, Summer Intern, Software Engineering</p>
        </Grid>
        <Grid textAlign = "center">
          <p><span className="bold-list">May 20, 2021</span></p>
        </Grid>
        <Container text>
          <hr/>
          <p>
            Life is a truly unfair and cruel place. They say if you have a dream you should be able to pursue it. However, if you do not have the right credentials, you are more likely not allowed to do otherwise. This affects many freshmen in college as they enter a STEM field. Most of them have big dreams, but because of their poor resources, many end up in despair. If only if there was a tool that provided students with assistance in Computer Science at least. Well, there is. It is called RadGrad.
            <Image src={"https://saitoshi.github.io/images/RadGradHome.png"} size='large' centered />
            <div className="comment"> A screenshot of when user logs into RadGrad.</div>
            <h4>Purpose of RadGrad</h4>
            RadGrad is an application that provides Computer Science students an incentive to do better. To help those
            regardless of their backgrounds such as racial, sexual, academic, etc. The application contains a degree
            planner and a list of possible interests. For example, Computer Science alone is a vague major as it is
            comprised of various disciplinary fields such as Data Science, Cyber Security, Software Engineering, etc.
            Therefore, it assists students in at least two ways.

            This Summer 2021 (May - August period) 5 undergraduate students under Professor Johnson and Professor Moore
            are working on to make updates on RadGrad. The reason behind these updates are to make improvements that
            allow more student usage. For example, open RadGrad to other STEM majors or giving access to high school
            students.


            <h4> Benefits On Doing RadGrad</h4>
            Most UH students know what Star is, and because of that many might not see the benefits of RadGrad.
            While Star may allow students to register for their courses, there are multiple ways in which RadGrad is
            still superior.

            <ul>
              <li> <span class = "bold-list">Freshmen or Undecided</span></li>
              For those who are undecided on what they would like to do specifically, RadGrad provides low-cost and investments such as clubs, events, or free workshops on different fields. Furthermore, within the different lists of interests, faculty members or staff are listed making it easier on who to talk to.

              <li> <span class = "bold-list">Upperclassmen or Decided</span></li>
              For those who have been decided, RadGrad also provides assistance too. For instance, it lists the different 300-400 level electives that may be helpful. For example, if a student is interested in Data Science, RadGrad can recommend ICS 435. Also, the application provides a list of internship or research opportunities that students can apply for making it a little easier.
            </ul>
            Rather than purely awarding students based on their GPA, RadGrad rewards based on Innovation, Competency, and Experience (ICE for short). That way students have a better incentive to do more while they are in college. With the ICE system, students can gain points and level up like a certain Nintendo game that came out in 1996.
            <h4> Improvements For RadGrad</h4>
            While RadGrad is superior, it still has an area for improvement. One of the major reasons is because computer science is continuously changing. In order for RadGrad to be superior to Star, it constantly needs to reflect on the changes. For instance, the ICS department now offers more courses about Data Science that have not been reflected on. While on a personal level, RadGrad also misses a component in which could recommend in what to double major or get a minor that could complement their major.

            <h4> Getting Community Input </h4>
            One way to make improvement is to get feedback. However, because of the current global situation getting feedback needs to be done in creative ways. One thing that could be done is Zoom interviews with current undergrads, high school students, graduate students, and professionals.
            <ul>
              <li> <span class = "bold-list">Undergraduates</span></li>
              By asking current undergraduates, it allows us to see which area needs improvement. Additionally, we can ask about the things they like or dislike with the application and list it down when future updates are made.
              <li> <span class = "bold-list">Graduates</span></li>
              By talking to graduate students, the developer team can see how other Universities are doing with degree planners and probably borrow an element that may be beneficial to add.
              <li> <span class = "bold-list">High School students</span></li>
              Interviewing high school students, mainly Juniors and Seniors, getting their inputs could be beneficial as we can see what disciplinary fields are popular. Additionally, this could be one way to do an advertisement to show local students that you can get your degree locally.
              <li> <span class = "bold-list">Professionals</span></li>
              Finally, asking professionals can improve the degree planner that way students can effectively land a job they desire.
            </ul>
            Another way we could do this is provide a Google Forum for those who are either busy or uncomfortable to do a Zoom interview. Overall, I think a prize or reward should be provided for those who participate in these surveys to provide incentive.
          </p>
        </Container>
        <div className="push"/>
      </Container>


  );
}

export default RadGradFeedback;
