/**
 * Initial State
 */
const initialData = {
  formData: {
    building: null,
    floors: 1,
    material: null,
    sizes: {
      x: null,
      y: null,
    },
  },
  result: {
    message: null,
  },
};

/**
 * A core reducer of the app.
 * I tried to keep it simple with some flexibility
 *
 * @param {object} state
 * @param {{type: string, payload?: any}} action
 * @returns
 */
const reducer = (state = initialData, action) => {
  switch (action.type) {
    case "UPDATE_FORMDATA":
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };

    case "UPDATE_RESULT":
      return {
        ...state,
        result: {
          ...state.result,
          message: action.payload,
        },
      };
    case "CLEAR_STORE":
      return initialData;

    default:
      return state;
  }
};

export default reducer;
