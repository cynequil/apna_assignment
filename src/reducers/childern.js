const children = (state = [], action) => {
  switch (action.type) {
    case "CHILDREN":
      return action.payload;
    default:
      return state;
  }
};

export default children;
