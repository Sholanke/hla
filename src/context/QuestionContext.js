import { createContext, useContext, useEffect, useState } from "react";
import { intro } from "../utils/questions";

const questionContext = createContext();

export default function QuestionContextProvider({ children }) {
  const [questionState, setQuestionState] = useState({
    currentIndex: 0,
    pull: intro,
  });

  useEffect(() => {
    console.log(questionState);

    setQuestionState((prev) => ({
      ...prev,
      currentIndex: 0,
      currentQuestion: questionState.pull[0],
    }));
  }, [questionState.pull]);

  useEffect(() => {
    setQuestionState((prev) => ({
      ...prev,
      currentQuestion: questionState.pull[questionState.currentIndex],
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionState.currentIndex]);

  return (
    <questionContext.Provider value={{ questionState, setQuestionState }}>
      {children}
    </questionContext.Provider>
  );
}

export function useQuestionContext() {
  return useContext(questionContext);
}
