const search_response = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_RESPONSE":
      return action.payload;
    default:
      return state;
  }
};

export default search_response;
