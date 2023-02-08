const initialState = {
  backgroundColour: "#282c34",
  heroValue: "2",
};

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BACKGROUND":
      return { ...state, backgroundColour: action.payload };
    case "GET_VALUE": {
      return { ...state, heroValue: action.payload };
    }
    default:
      return state;
  }
};

export default applicationReducer;
