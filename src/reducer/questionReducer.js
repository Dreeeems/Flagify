const intialState = {
  question: null,
};

const questionReducer = (state = intialState, action) => {
  switch (action.type) {
    case "SET_QUESTION":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default questionReducer;
