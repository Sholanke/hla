import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Question from "./components/Question";
import QuestionContextProvider from "./context/QuestionContext";
import QuestionSummary from "./components/QuestionSummary";
import "./styles/main.scss";
import QuestionStepper from "./components/QuestionStepper";
import QuestionsHeader from "./components/QuestionsHeader";
import AppHeader from "./components/AppHeader";

ReactDOM.render(
  <React.StrictMode>
    <QuestionContextProvider>
      <AppHeader />
      <div className="app">
        <QuestionsHeader />
        <div className="form">
          <QuestionStepper />
          <div className="form-content-holder">
            <div className="form-content-holder__section">
              <Question />
              <QuestionSummary />
            </div>
          </div>
        </div>
      </div>
    </QuestionContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
