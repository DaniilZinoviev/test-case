import React from "react";
import { connect } from "react-redux";
import { StepBase } from "../components";

const PageError = ({ message }) => {
  return (
    <StepBase
      subtext="Результат расчета"
      title="Ошибка"
      cancelBtnTitle="Новый расчет"
    >
      <div className="text-red">{message}</div>
    </StepBase>
  );
};

const mapStateToProps = ({ result: { message } }) => {
  return {
    message,
  };
};

export default connect(mapStateToProps)(PageError);
