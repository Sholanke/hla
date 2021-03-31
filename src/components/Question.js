import { useQuestionContext } from "../context/QuestionContext";

export default function Question() {
  const { questionState, setQuestionState } = useQuestionContext();

  const nextQuestion = (answerToCurrentQuestion, nextPull) => {
    if (questionState.currentQuestion.isLastQuestion) {
      alert("This is the end");
    } else {
      if (nextPull) {
        setQuestionState((prev) => ({ ...prev, pull: nextPull }));
      } else {
        setQuestionState((prev) => ({
          ...prev,
          currentIndex: prev.currentIndex + 1,
        }));
      }
    }
  };

  return (
    <>
      {questionState.currentQuestion && (
        <div>
          {questionState.currentQuestion.question}
          <br />

          {questionState.currentQuestion?.options?.map((option, i) => (
            <button
              onClick={() => {
                nextQuestion(option.value || option.name, option.nextPull);
              }}
              key={i}
            >
              {option.name}
            </button>
          )) || (
            <button
              onClick={() => {
                nextQuestion("name", questionState.currentQuestion.nextPull);
              }}
            >
              Next
            </button>
          )}
        </div>
      )}
    </>
  );
}
