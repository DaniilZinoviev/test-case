const updateFormData = (payload) => {
  return {
    type: "UPDATE_FORMDATA",
    payload,
  };
};

const updateResult = (payload) => {
  return {
    type: "UPDATE_RESULT",
    payload,
  };
};

const clearStore = () => {
  return {
    type: "CLEAR_STORE",
  };
};

export { updateFormData, updateResult, clearStore };
