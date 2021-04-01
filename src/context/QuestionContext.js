import { createContext, useContext, useEffect, useState } from "react";
import { intro } from "../utils/questions";

const questionContext = createContext();

export default function QuestionContextProvider({ children }) {
  const [questionState, setQuestionState] = useState({
    currentIndex: 0,
    pull: intro,
    appHeader: "",
    answers: [],
  });

  const saveAnswer = (answer) => {
    setQuestionState((prev) => ({
      ...prev,
      answers: [...prev.answers, { ...prev, answer }],
    }));
  };

  useEffect(() => {
    setQuestionState((prev) => ({
      ...prev,
      currentQuestion: prev.pull[questionState.currentIndex],
    }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionState.currentIndex, questionState.pull]);

  useEffect(() => {
    const appHeader = questionState.currentQuestion?.appHeader;
    if (appHeader) {
      setQuestionState((prev) => ({
        ...prev,
        appHeader,
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionState.currentQuestion]);

  const previousQuestion =
    questionState?.answers?.[questionState?.answers?.length - 1];

  const goToPreviousQuestion = () => {
    if (questionState.answers.length > 0) {
      setQuestionState(previousQuestion);
    }
  };

  return (
    <questionContext.Provider
      value={{
        questionState,
        previousQuestion,
        setQuestionState,
        goToPreviousQuestion,
        saveAnswer,
      }}
    >
      {children}
    </questionContext.Provider>
  );
}

export function useQuestionContext() {
  return useContext(questionContext);
}
