const isobject_id = (state = false, action) => {
  switch (action.type) {
    case "ISOBJECT_ID":
      return action.payload;
    default:
      return state;
  }
};

export default isobject_id;
