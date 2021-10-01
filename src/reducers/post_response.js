const post_response = (state = [], action) => {
  switch (action.type) {
    case "POST_RESPONSE":
      return action.payload;
    default:
      return state;
  }
};

export default post_response;
