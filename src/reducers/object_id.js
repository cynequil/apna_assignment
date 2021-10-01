const object_id = (state = "", action) => {
  switch (action.type) {
    case "OBJECT_ID":
      return action.payload;
    default:
      return state;
  }
};

export default object_id;
