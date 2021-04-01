import { useQuestionContext } from "../context/QuestionContext";

export default function QuestionsHeader() {
  const { questionState } = useQuestionContext();

  return (
    <div className="form-question-header">
      <p>{questionState.appHeader}</p>

      <div></div>
    </div>
  );
}
