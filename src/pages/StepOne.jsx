import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { StepBase } from "../components";
import { buildings } from "../misc";
import { updateFormData } from "../store/actions";

const StepOne = ({ updateFormData }) => {
  const history = useHistory();
  const handleClick = (e, building) => {
    e.preventDefault();
    updateFormData({ building });
    history.push("step-two");
  };

  return (
    <StepBase subtext="Шаг 1" title="Что будем строить?">
      <ul>
        {buildings.map(({ title, value }) => (
          <li key={value}>
            <a href="/step-two" onClick={(e) => handleClick(e, value)}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </StepBase>
  );
};

export default connect(null, { updateFormData })(StepOne);
