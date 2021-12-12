const intitialState = {
  user: null,
  repos: null,
  error:null
};

const userRed = (state = intitialState, action) => {
  switch (action.type) {
    case "USER_DATA":
      return {
        ...state,
        user: action.payload,  
        error:null      
      };

    case "USER_REPO":
      return {
        ...state,
        repos: action.payload,
        error:null
      };
      case "ERROR":
        return{
          error:action.payload
        }
    default:
      return state;
  }
};
export default userRed;
