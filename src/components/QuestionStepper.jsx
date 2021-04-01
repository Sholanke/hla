import { useQuestionContext } from "../context/QuestionContext";

export default function QuestionStepper() {
  const { questionState, goToPreviousQuestion } = useQuestionContext();

  const stepperLength = questionState.pull.length;

  const generateStepperClass = (stepperIndex) => {
    if (stepperIndex === questionState.currentIndex) {
      return "active";
    } else if (stepperIndex < questionState.currentIndex) {
      return "done";
    }
    return "";
  };

  return (
    <div className="form-question-stepper">
      <button
        className="form-question-stepper__back-btn"
        onClick={goToPreviousQuestion}
      >
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.67567 0.229661C5.8054 0.0765505 5.96756 5.27372e-07 6.12972 5.13196e-07C6.29189 4.99019e-07 6.45406 0.0765505 6.58379 0.229661L11.8054 6.39234C12.0649 6.69856 12.0649 7.1579 11.8054 7.46412C11.5459 7.77034 11.1568 7.77034 10.8973 7.46412L6.12972 1.83731L1.10271 7.77034C0.843248 8.07656 0.454053 8.07656 0.194594 7.77034C-0.0648652 7.50239 -0.0648652 7.00479 0.194594 6.69857L5.67567 0.229661Z"
            fill="#5E5E5E"
          />
        </svg>
      </button>

      <span className="form-question-stepper__spacer"></span>
      {Array.from({ length: stepperLength }).map((_, i) => (
        <button
          className={`form-question-stepper__step-btn ${generateStepperClass(
            i
          )}`}
          key={i}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
