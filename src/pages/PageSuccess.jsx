import React from "react";
import { connect } from "react-redux";
import { StepBase } from "../components";

const PageSuccess = ({ message }) => {
  return (
    <StepBase
      subtext="Результат расчета"
      title="Успешно"
      cancelBtnTitle="Новый расчет"
    >
      <div className="text-blue text-center">{message}</div>
    </StepBase>
  );
};

const mapStateToProps = ({ result: { message } }) => {
  return {
    message,
  };
};

export default connect(mapStateToProps)(PageSuccess);
