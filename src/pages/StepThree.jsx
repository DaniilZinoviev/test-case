import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { StepBase } from "../components";
import { materials } from "../misc";
import { updateFormData } from "../store/actions";

const StepThree = ({ updateFormData }) => {
  const history = useHistory();

  const handleClick = (e, material) => {
    e.preventDefault();
    updateFormData({ material });
    history.push("step-four");
  };

  return (
    <StepBase subtext="Шаг 3" title="Материал стен:">
      <ul>
        {materials.map(({ title, value }) => (
          <li key={value}>
            <a href="/step-four" onClick={(e) => handleClick(e, value)}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </StepBase>
  );
};

export default connect(null, { updateFormData })(StepThree);
