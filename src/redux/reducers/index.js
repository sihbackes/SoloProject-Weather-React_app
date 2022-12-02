const initialState = {
  weatherDetails: {
    content: {},
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CITY_INFO":
      return {
        weatherDetails: {
          content: action.payload,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
