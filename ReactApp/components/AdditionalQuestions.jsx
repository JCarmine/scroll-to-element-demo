import React from "react";
import PropTypes from "prop-types";
import QuestionDetails from "./QuestionDetails";
import ScrollToElement from "./ScrollToElement";

const AdditionalQuestions = ({ showQuestionsSummary, showAdditionalQuestions, ...props }) => (
  <div className="additional_questions">
    {!showQuestionsSummary &&
      <ScrollToElement
        id="AdditionalQuestionsSummaryScroll"
        scrollOnMount
        offset={-45}
      >
        <QuestionDetails {...props} />
      </ScrollToElement>
    }

    {showQuestionsSummary &&
      <ScrollToElement
        id="AdditionalQuestionsScroll"
        scrollOnMount
        duration={400}
        delay={100}
        offset={-45}
      >
        <div className="form_summary accessory_form_summary">
          <h3>Additional Specs <a onClick={showAdditionalQuestions} className="changeAnswers" id="change_answer_accessory" href="#">Change</a></h3>
        </div>
      </ScrollToElement>
    }
  </div>
);

AdditionalQuestions.propTypes = {
  showQuestionsSummary: PropTypes.bool.isRequired,
  showAdditionalQuestions: PropTypes.func.isRequired
};

export default AdditionalQuestions;
