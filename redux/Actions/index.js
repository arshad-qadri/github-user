import axios from "axios";

export const userDatas = user => {
  return async dispatch => {
   await axios.get(`https://api.github.com/users/${user}`,{}).then((res) => {
      dispatch({ type: "USER_DATA", payload: res });
    }).catch((err)=>{
      dispatch({ type: "ERROR", payload: err.response.data });
    })
  };
};

export const userRepository = (user,page=1) => {
  // PAGINATION API
  //api.github.com/users/arshad-qadri/repos?page=1&per_page=1
  https: return async (dispatch) => {
    await axios
      .get(`https://api.github.com/users/${user}/repos?page=${page}&per_page=10`, {})
      .then((res) => {
        dispatch({ type: "USER_REPO", payload: res });
      })
      .catch((err) => {
        // console.log("err",err.response);
        // dispatch({ type: "ERROR", payload: err.response.data });
      });
  };
};