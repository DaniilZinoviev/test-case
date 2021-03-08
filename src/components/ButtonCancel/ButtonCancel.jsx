import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { clearStore } from "../../store/actions";
import Button from "../Button";

const ButtonCancel = ({ title = "Отмена", clearStore }) => {
  const history = useHistory();
  const handleClick = () => {
    clearStore();
    history.push("/");
  };
  return <Button onClick={handleClick}>{title}</Button>;
};

export default connect(null, { clearStore })(ButtonCancel);
