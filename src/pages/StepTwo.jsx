import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { Button, StepBase } from "../components";
import { updateFormData } from "../store/actions";

const StepTwo = ({ updateFormData, building }) => {
  const history = useHistory();
  const [floors, setFloors] = useState(1);

  /**
   * Redirect to the next form if there was selected "Garage" building
   */
  if (building === 2) {
    updateFormData({ floors: 1 });
    history.push("step-three");
  }

  const handleClick = (e) => {
    e.preventDefault();
    updateFormData({ floors });
    history.push("step-three");
  };

  return (
    <StepBase
      subtext="Шаг 2"
      title="Количество этажей (число):"
      button={<Button onClick={handleClick}>Далее</Button>}
    >
      <div className="text-center">
        <input type="number" name="floor-number" min="1" max="200" value={floors} onChange={(e) => setFloors(e.target.value)} required />
      </div>
    </StepBase>
  );
};

const mapStateToProps = ({ formData: { building } }) => {
  return {
    building
  }
}

export default connect(mapStateToProps, { updateFormData })(StepTwo);
