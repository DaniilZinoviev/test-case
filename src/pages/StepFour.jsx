import React, { useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, StepBase } from "../components";
import { TechartApiContext } from "../contexts";
import { updateFormData, updateResult } from "../store/actions";

const StepFour = ({ updateFormData, formData, updateResult }) => {
  const history = useHistory();
  const [sizeX, setSizeX] = useState(1);
  const [sizeY, setSizeY] = useState(1);
  const apiService = useContext(TechartApiContext);

  const handleClick = (e) => {
    e.preventDefault();
    updateFormData({ sizes: { x: sizeX, y: sizeY } });
  };

  useEffect(() => {
    if (formData.sizes.x && formData.sizes.y) {
      apiService
        .getResponse(formData)
        .then((message) => {
          updateResult(message);
          history.push("/success");
        })
        .catch((e) => {
          updateResult(e.message);
          history.push("/error");
        });
    }
  }, [formData]);

  return (
    <StepBase
      subtext="Шаг 4"
      title="Длина стен (в метрах):"
      button={<Button onClick={handleClick}>Рассчитать</Button>}
    >
      <div className="flex-center">
        <input
          type="number"
          name="size-x"
          min="1"
          max="1000"
          onChange={(e) => setSizeX(e.target.value)}
          required
        />
        <div className="delimeter">X</div>
        <input
          type="number"
          name="size-y"
          min="1"
          max="1000"
          onChange={(e) => setSizeY(e.target.value)}
          required
        />
      </div>
    </StepBase>
  );
};

const mapStateToProps = ({ formData }) => ({ formData });

export default connect(mapStateToProps, { updateFormData, updateResult })(
  StepFour
);
