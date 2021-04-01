import { useQuestionContext } from "../context/QuestionContext";

export default function QuestionSummary() {
  const { questionState, setQuestionState } = useQuestionContext();

  return (
    <div>
      <p>Summary</p>
      {questionState?.answers?.map((answerSet, i) => (
        <>
          <div>
            <button onClick={() => setQuestionState(answerSet)} key={i}>
              {answerSet.currentQuestion.question} --- {answerSet.answer}
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
