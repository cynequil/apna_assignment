export const search_response = (payload) => {
  return {
    type: "SEARCH_RESPONSE",
    payload,
  };
};
export const object_id = (payload) => {
  return {
    type: "OBJECT_ID",
    payload,
  };
};

export const isobject_id = (payload) => {
  return {
    type: "ISOBJECT_ID",
    payload,
  };
};

export const post_response = (payload) => {
  return {
    type: "POST_RESPONSE",
    payload,
  };
};

export const resolve_children = (payload) => {
  return {
    type: "CHILDREN",
    payload,
  };
};
