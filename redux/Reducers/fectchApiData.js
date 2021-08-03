const intitialState = {
  user: null,
  api: null,
  repos: null,
};

const userRed = (state = intitialState, action) => {
  switch (action.type) {
    case "USER":
      return {
        ...state,
        user: action.user,
        api: action.payload,
        repos: action.repo,
      };
    default:
      return state;
  }
};
export default userRed;
