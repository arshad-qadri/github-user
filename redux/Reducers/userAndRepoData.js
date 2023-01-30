const intitialState = {
  user: null,
  repos: [],
  error: null,
};

const userRed = (state = intitialState, action) => {
  // console.log("action.payload===", action.payload?.data);
  switch (action.type) {
    case "USER_DATA":
      return {
        ...state,
        user: action.payload,
        error: null,
      };

    case "USER_REPO":
      return {
        ...state,
        repos: [...state.repos, ...action.payload.data],
        error: null,
      };
    case "ERROR":
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
export default userRed;
