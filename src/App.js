import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  About,
  Resume,
  Project,
  JPN,
  RadGrad,
  Shocking,
  TextbookHunt,
  RadGradReview,
  RadGradFeedback,
  RadGradStart,
  Math,
  Uhmath,
  Tregear,
  Tokusatsu,
  CrossCountry,
  Covid,
  RadGradPilotStudy,
  Internaloha, 
  NewYears2022
} from "./components";
import { SideMenu } from "./components";

function App() {

  return (
      <div className="App">
        <Router>
          <SideMenu/>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/jpn" exact component={() => <JPN />} />
            <Route path="/resume" exact component={() => <Resume />} />
            <Route path="/project" exact component={() => <Project />} />
            <Route path="/radgrad" exact component={() => <RadGrad />} />
            <Route path="/math" exact component={() => <Math />} />
            <Route path="/uhmath" exact component={() => <Uhmath />} />
            <Route path="/shocking" exact component={() => <Shocking />} />
            <Route path="/radgradreview" exact component={() => <RadGradReview />} />
            <Route path="/radgradfeedback" exact component={() => <RadGradFeedback />} />
            <Route path="/radgradstart" exact component={() => <RadGradStart />} />
            <Route path="/textbookhunt" exact component={() => <TextbookHunt />} />
            <Route path="/crosscountry" exact component={() => <CrossCountry />} />
            <Route path="/tregear" exact component={() => <Tregear />} />
            <Route path="/tokusatsu" exact component={() => <Tokusatsu />} />
            <Route path="/covid" exact component={() => <Covid />} />
            <Route path="/pilotstudy-radgrad" exact component={() => <RadGradPilotStudy />} />
            <Route path="/internaloha" exact component={() => <Internaloha/>}/>
            <Route path="/newyear2022" exact component={() => <NewYears2022/>}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
