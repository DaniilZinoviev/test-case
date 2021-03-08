import React from "react";
import { ButtonCancel, Content } from "..";

const StepBase = ({ subtext, title, children, button, cancelBtnTitle }) => {
  return (
    <div>
      <div className="subtext">{subtext}</div>

      <Content title={title}>
        {children}
      </Content>

      <div className="flex-center">
        <ButtonCancel title={cancelBtnTitle} />
        {button}
      </div>
    </div>
  )
}

export default StepBase
