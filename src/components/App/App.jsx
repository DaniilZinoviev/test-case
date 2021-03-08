import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  StepOne,
  StepTwo,
  StepThree,
  StepFour,
  PageError,
  PageSuccess,
} from "../../pages";
import TechartApiService from "../../services/TechartApiService";
import { TechartApiContext } from "../../contexts";

const App = () => {
  const apiService = new TechartApiService();

  return (
    <TechartApiContext.Provider value={apiService}>
      <Router>
        <div className="app-container">
          <h2 className="app-title">Калькулятор цены конструкций</h2>

          <Switch>
            <Route path="/success">
              <PageSuccess />
            </Route>
            <Route path="/error">
              <PageError />
            </Route>
            <Route path="/step-four">
              <StepFour />
            </Route>
            <Route path="/step-three">
              <StepThree />
            </Route>
            <Route path="/step-two">
              <StepTwo />
            </Route>
            <Route path="/">
              <StepOne />
            </Route>
          </Switch>
        </div>
      </Router>
    </TechartApiContext.Provider>
  );
};

export default App;
