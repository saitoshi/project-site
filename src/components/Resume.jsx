import React from "react";
import { Header, Container, Grid, Image, Button, Icon } from 'semantic-ui-react';
function Resume() {
  const pageStyle = {
    paddingLeft: '10em',
    paddingTop: '1em',
  };
  return (
      <Container style={pageStyle}>
        <Header as = 'h2' textAlign = 'center'>ABOUT</Header>
        <hr/>
        <br/>
        <Grid columns = {2} divided>
          <Grid.Column textAlign = 'center'>
            <div className='push'/>
            <Image src="https://github.com/saitoshi/images/blob/main/about.jpg?raw=true" centered size='large' circular/>
            <Header as = 'h3' textAlign = 'center'>SHIN</Header>
            <Button.Group centred>
              <Button><Icon name='github'/></Button>
              <Button color='red' href="mailto:saitoshi2145@gmail.com"><Icon name = 'envelope'/></Button>
              <Button color='twitter' href="https://twitter.com/iseyadj45"><Icon name='twitter'/></Button>
            </Button.Group>
          </Grid.Column>
          <Grid.Column>
            <ul>
              <li><p><b>Bachelor of Science in Computer Science and Mathematics</b><br/>
              University of Hawaii at Manoa, Honolulu, HI<br/>
                Graduated in December 2021
              </p></li>
              <br/>
              <li><p>I go by Shin or Shun</p></li>
            </ul>
            <Header as = 'h3' textAlign = 'center'>INTERESTS</Header>
            <p>
              <ul>
                <li>Software Engineering</li>
                <li>Japanese to English Translation</li>
                <li>Data Analysis</li>
                <li>Design and Story Telling</li>
                <li>Education</li>
              </ul>
            </p>
            <Header as = 'h3' textAlign = 'center'>SKILLS</Header>
            <p>
              <ul>
                <li><b>Languages and Frameworks</b><br/>
                  JavaScript, Python, C, HTML, CSS, Semantic UI
                </li>
                <li><b>Toolsets/OS</b><br/>
                MacOS, Git/GitHub, Windows, Intellij IDEA, Visual Studio Code
                </li>
                <li><b>Foreign Languages</b><br/>
                TOIEC Listen and Reading: 975 <br/>
                Japanese Language Proficiency Test: N1 and N2</li>
              </ul>
            </p>
          </Grid.Column>
        </Grid>
        <br/>
        <Header as = 'h3' textAlign = 'center'>PROFESSIONAL EXPERIENCE</Header>
        <hr/>
        <p>
        <ul>
          <li><b>Intro Level Software Engineer, <a href ="https://beep.co.jp/">BEEP</a> </b><br/>
          December 2021 to Present <br/>
          Worked as a Software Engineer Intern at company BEEP located in Kamakura area.  
          </li>
          <li><b>Cram School English and Programming Tutor, <a href="https://www.edi-lab.com/">EdiLabo Academy</a></b><br/>
          December 2021 to Presnet <br/>
          Worked as a Cram School Tutor at EdiLabo Academy teaching primary school students basic Python programming and English.</li>
          <li><b>Research Assistant, <a href="https://csdl.ics.hawaii.edu/">Collaborative Software Development Laboratory</a></b><br/>
            August to December 2021 <br/>
            Worked under Professor Johnson and Professor Moore on improving Internaloha.
          </li>
          <li><b>Mathematics Learning Assistant, <a href ="https://math.hawaii.edu/wordpress/">Mathematics Department at University of Hawaii at Manoa</a></b><br/>
          January 2019 to December 2021 <br/>
          Worked as an undergraduate Teaching Assistant for the math department at University of Hawaii at Manoa.
          Helped with Calculus 1, 2, Differential Equation, and Precalculus related courses.
          </li>
          <li><b>Media and Event Assistant, University of Hawaii at Manoa Office of Provost</b><br/>
            June 2020 to December 2021 <br/>
            Assisted the Better Tomorrow Speaker Series team by updating its website, social media, and providing the technical support for Zoom Webinars.
          </li>
          <li><b>Summer Research Assitant, <a href="https://csdl.ics.hawaii.edu/">RadGrad NSF Research Experience for Undergraduates Program</a></b>
          <br/>
            May 2021 to August 2021 <br/>
            Worked under the supervision of Dr. Johnson and Dr. Moore on upgrading RadGrad based on student feedback.
          </li>
          <li><b>Research Assistant, <a href ="http://olesonlab.org/">Oleson Lab at University of Hawaii at Manoa</a></b><br/>
          May 2020 to April 2021 <br/>
          Worked under Professor Oleson,  as a data analyst for a research program centering around the waste water usage in the islands of Oahu and Maui. </li>
          <li><b>Tutor and Grader, <a href ="https://math.hawaii.edu/wordpress/">Mathematics Department at University of Hawaii at Manoa</a></b><br/>
          August 2019 to December 2020 <br/>
            Tutored introductory mathematics courses at the Learning Emporium Center and graded for 300 level math courses.
          </li>
          <li><b>Japanese and English Translator, University of Hawaii TIM Department</b><br/>
            January 2019 to June 2020<br/>
            A Japanese to English and vice versa tranlator position for the TIM department.
          </li>
        </ul>
        </p>
        <Header as = 'h3' textAlign = 'center'>RELATED COURSEWORK</Header>
        <p>
        <hr/>
          <Grid columns = {2}>
            <Grid.Column>
              <ul>
                <li> <a href = "https://manoa.hawaii.edu/catalog-2019-20/courses/ics-311-algorithms-4/">ICS 311 - Algorithms</a></li>
                <li> ICS 314 - Software Engineering I</li>
                <li> <a href ="https://manoa.hawaii.edu/catalog-2019-20/courses/ics-312-machine-level-and-systems-programming-3/">ICS 312 - Machine Level and System Programming</a></li>
                <li> <a href="https://manoa.hawaii.edu/catalog-2019-20/courses/ics-313-programming-language-theory-3/"> ICS 313 - Programming Language Theory</a></li>
                <li> ICS 321 - Database System I</li>
                <li> ICS 332 - Operating System</li>
                <li> ICS 390 - Computing Ethics for Lab Assistants</li>
                <li> ICS 414 - Software Engineering II</li>
                <li> ICS 426 - Computer System Security</li>
                <li> ICS 427 - Software Quality Assurance</li>
                <li> ICS 435 - Machine Learning</li>
                <li> ICS 469 - Cognitive Science</li>
                <li> JPN 402 - Fourth Year in Japanese II</li>
                <li> JPN 403 - Fourth-Year Japanese for Advanced Speakers I</li>
                <li> JPN 421 - Japanese Composition</li>
                <li> JPN 425 - Japanese to English Translation</li>
              </ul>
            </Grid.Column>
            <Grid.Column>
              <ul>
                <li> MATH 301 - Discrete Mathematics</li>
                <li> MATH 302 - Introduction to Differential Equations</li>
                <li> MATH 304 - Mathematical Modeling: Deterministic Models</li>
                <li> MATH 307 - Linear Algebra and Differential Equations</li>
                <li> MATH 321 - Introduction to Advanced Mathematics</li>
                <li> MATH 331 - Real Analysis</li>
                <li> MATH 372 - Probablity and Statistics</li>
                <li> MATH 402 - Partial Differential Equations I</li>
                <li> MATH 411 - Linear Algebra</li>
                <li> MATH 412 - Abstract Algebra I</li>
                <li> MATH 442 - Vector Analysis</li>
              </ul>
            </Grid.Column>
          </Grid>
        </p>

        <div className='push'/>



      </Container>
  );
}

export default Resume;
