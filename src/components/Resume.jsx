import React from "react";
import { Header, Container } from 'semantic-ui-react';
function Resume() {
  const pageStyle = {
    paddingLeft: '10em',
    paddingTop: '1em',
  };
  return (
      <Container style={pageStyle}>
        <br/>
        <Header as = 'h2' textAlign='center'> RESUME</Header>
      <Container text>
        <p>
        <hr/>
        I also go by Shin and Shun.
        <hr/>
        <h3>CONTACT</h3>
        saitoshin2145@gmail.com
        <hr/>
        <h3>INTERESTS</h3>
          Data Science , Japanese and English: Translation, Software Engineering
          <hr/>
          <h3>SKILLS</h3>
          Languages and Frameworks: Python, C, Java, Javascript, HTML, Semantic UI
          <br/>
          Toolsets/OS: MacOS, Git/GitHub, Windows, Intellij IDEA
          <hr/>
          <br/>
          Bilingual in Japanese and English
          <ul>
            <li>TOEIC Listen and Reading: 975</li>
            <li>JLPT N2 & N1</li>
          </ul>
          <hr/>
          <h3>EDUCATION</h3>
          University of Hawaii, Honolulu, HI <br/>
          Bachelors Candidate in Mathematics and ICS (expected to graduate in Fall 2021)
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
            <li> MATH 442 - Vector Analysis</li></ul>
          <hr/>
          <h3> PROFESSIONAL EXPERIENCE</h3>
          <ul>
            <li> Summer Research Assitant, RadGrad NSF Research Experience for Undergraduates program <br/>
              May 2021 to August 2021</li>
            <li> Media and Event Assistant, Univeristy of Hawaii at Manoa Office of Provost  <br/>
              June 2020 to Present <br/>
              Assisted the Better Tomorrow Speaker Series team by updating its website, social media, and providing the technical support for Zoom Webinars.</li>
            <li> Mathematics Learning Assistant, Univesity of Hawaii at Manoa Mathematics Department
              <br/>
              January 2019 to Present <br/>
              The undergraduate Teaching Assistant for the math department and worked with the instructors on teaching their courses
              <ul>
                <li> MATH 302 Introduction to Ordinary Differential Equations and MATH 140 Precalculus, Spring 2021</li>
                  <li> MATH 140 Precalculus and MATH 241 Calculus 1, Fall 2020 </li>
                    <li> MATH 242 Calculus 2, Spring 2020</li>
                      <li> MATH 241 Calculus 1, Fall 2019</li>
                        <li> MATH 242 Calculus 2, Spring 2019</li>
              </ul>
              <li> Research Assistant, University of Hawaii at Manoa <br/>
                June 2020 to April 2021 <br/>
                Worked as a data analyst for a research program centering around the waste water usage in the islands of Oahu and Maui.</li>
              <li> Tutor and Grader, University of Hawaii at Manoa, Mathematics Department <br/>
                August 2019 to December 2020 <br/>
                Tutored introductory mathematics courses at the Learning Emporium center and grade for 300 level math courses.
              </li>
                <li> Japanese and English Translator, University of Hawaii TIM Department <br/>
                  January 2019 to June 2020 <br/>
                  A Japanese to English and vice versa tranlator position for the TIM department.
                </li>
                  <li> Cashier and Stocker, Nijya Supermarket, Hawaii <br/>
                    January 2017 to December 2019 <br/>
                    Worked as a Japanese and English Bilingual cashier and stocker.</li>
            </li>
          </ul>
          <hr/>
          <h3> REFERENCE</h3>
          Available Upon Request.
        </p>
      </Container>
        <div className="push"/>
      </Container>
  );
}

export default Resume;
