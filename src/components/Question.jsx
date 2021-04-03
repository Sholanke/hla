import { useEffect, useState } from "react";
import { useQuestionContext } from "../context/QuestionContext";
import { genderOptions } from "../utils/questions";
import QuestionSummary from "./QuestionSummary";

// const inputTypes = ["date", "number"];
// const optionTypes = ["gender", "file"];

export default function Question() {
  const { questionState, setQuestionState, saveAnswer } = useQuestionContext();
  const [inputValue, setValue] = useState("");

  const handleInputChange = ({ currentTarget: { value } }) => {
    setValue(value);
  };

  const options = questionState?.currentQuestion?.options;

  const showSummary = questionState?.currentQuestion?.isEnd;

  const nextQuestion = (answerToCurrentQuestion, nextPull) => {
    //empty value...
    if (!showSummary) {
      //changing questions...
      saveAnswer(answerToCurrentQuestion);

      if (nextPull) {
        setQuestionState((prev) => ({
          ...prev,
          answer: undefined,
          currentIndex: 0,
          pull: nextPull,
        }));
      } else {
        setQuestionState((prev) => ({
          ...prev,
          answer: undefined,
          currentIndex: prev.currentIndex + 1,
        }));
      }
    }
  };

  useEffect(() => {
    setValue(questionState.answer || "");
  }, [questionState.answer, questionState.currentQuestion]);

  return (
    <>
      {showSummary ? (
        <QuestionSummary />
      ) : (
        <>
          <PrevQuestion />
          {questionState.currentQuestion && (
            <div className="form-question">
              <p className="form-question__title">
                {questionState.currentQuestion.question}
              </p>
              <br />

              {options ? (
                options.map((option, i) => (
                  <button
                    className="form-question__option"
                    onClick={() => {
                      nextQuestion(
                        option.value || option.name,
                        option.nextPull
                      );
                    }}
                    key={i}
                  >
                    {option.name}
                  </button>
                ))
              ) : questionState.currentQuestion.type === "gender" ? (
                genderOptions.map((gender) => (
                  <button
                    className="form-question__option--gender"
                    data-gender={gender.name}
                    onClick={() => {
                      nextQuestion(
                        gender.name,
                        questionState.currentQuestion.nextPull
                      );
                    }}
                  >
                    {gender.name}
                  </button>
                ))
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    nextQuestion(
                      inputValue,
                      questionState.currentQuestion.nextPull
                    );
                    setValue("");
                  }}
                >
                  <input
                    className="form-question__input"
                    placeholder="Type Here"
                    type={questionState.currentQuestion.type || "text"}
                    value={inputValue}
                    onChange={handleInputChange}
                    // required
                  />

                  <div className="form-question__footer">
                    <button className="form-question__footer__next-btn">
                      Continue
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}

function PrevQuestion() {
  const { goToPreviousQuestion, previousQuestion } = useQuestionContext();

  const previousQuestionTitle = previousQuestion?.currentQuestion?.question;
  const previousQuestionAnswer = previousQuestion?.answer;

  return (
    <>
      {previousQuestion && (
        <button
          className="form-previous-question"
          onClick={goToPreviousQuestion}
        >
          <p className="form-previous-question__title">
            {previousQuestionTitle}
          </p>
          <p className="form-previous-question__answer">
            {previousQuestionAnswer}
          </p>
        </button>
      )}
    </>
  );
}
