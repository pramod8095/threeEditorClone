export const getBackGroundColor = (payload) => {
  return {
    type: "GET_BACKGROUND",
    payload: payload,
  };
};

export const getHeroValue = (payload) => {
  return {
    type: "GET_VALUE",
    payload: payload,
  };
};
