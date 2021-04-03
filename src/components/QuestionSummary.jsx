import numeral from "numeral";
import { useState } from "react";
import { useQuestionContext } from "../context/QuestionContext";

export default function QuestionSummary() {
  const { questionState } = useQuestionContext();

  const summaryData = [...(questionState?.answers || [])].filter(
    (questionSet) => questionSet.currentQuestion.summaryName
  );

  const processedSummaryData = summaryData.map((data) => ({
    name: data.currentQuestion.summaryName,
    value: data.answer,
    answerSet: data,
  }));

  const getSummaryDataByName = (name) => {
    return (
      [...processedSummaryData].filter(
        (data) => data.name.toLowerCase() === name.toLowerCase()
      )[0] || {}
    );
  };

  const policyDetails = [
    getSummaryDataByName("policy class"),
    getSummaryDataByName("frequency"),
    { ...getSummaryDataByName("premium"), pre: "N" },
    { ...getSummaryDataByName("Sum Assured"), pre: " N" },
    { ...getSummaryDataByName("duration"), post: " Years" },
  ].filter((q) => q.name);

  const medicalDetails = [
    getSummaryDataByName("weight"),
    getSummaryDataByName("height"),
    getSummaryDataByName("gender"),
  ].filter((q) => q.name);

  return (
    <div className="form-question-summary">
      {policyDetails.length > 0 && (
        <div className="form-question-summary__card">
          <div className="form-question-summary__card__heading">
            Policy Details
          </div>

          {policyDetails?.map((data) => (
            <SummaryRow summary={data} />
          ))}

          {/* {processedSummaryData.map((summary, i) => (
          <SummaryRow summary={summary} key={i} />
        ))} */}
        </div>
      )}

      {medicalDetails.length > 0 && (
        <div className="form-question-summary__card">
          <div className="form-question-summary__card__heading">
            Medical Record
          </div>

          {medicalDetails?.map((data) => (
            <SummaryRow summary={data} />
          ))}
        </div>
      )}

      {/* {questionState?.answers?.map((answerSet, i) => (
        <>
          <div>
            <button onClick={() => setQuestionState(answerSet)} key={i}>
              {answerSet.currentQuestion.question} --- {answerSet.answer}
            </button>
          </div>
        </>
      ))} */}
    </div>
  );
}

function SummaryRow({ summary }) {
  const { setQuestionState } = useQuestionContext();
  const [active, setActive] = useState(false);

  const valueIsNumber = !isNaN(summary.value);

  return (
    <div
      className="form-question-summary__card__row"
      data-active={active}
      onClick={() => {
        setActive(true);
      }}
    >
      <div className="form-question-summary__card__row__name">
        {summary.name}
      </div>

      <div className="form-question-summary__card__row__value__wrapper">
        <div className="form-question-summary__card__row__value">
          {summary.pre}
          {valueIsNumber ? numeral(summary.value).format("0,0") : summary.value}
          {summary.post}
        </div>

        <div className="form-question-summary__card__row__action">
          <button
            className="btn"
            onClick={() => setQuestionState(summary.answerSet)}
          >
            Edit
          </button>
          <button
            className="btn"
            onClick={(e) => {
              e.stopPropagation();
              setActive(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
