const ispostloading = (state = true, action) => {
  switch (action.type) {
    case "ISPOSTLOADING":
      return action.payload;
    default:
      return state;
  }
};

export default ispostloading;
