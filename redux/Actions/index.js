import axios from "axios";


export const userDatas = user => {
  return async dispatch => {
    axios.get(`https://api.github.com/users/${user}`).then((res) => {
      console.log("user", res);
      dispatch({ type: "USER_DATA", payload: res });
    })

  };
};
export const userRepository = (user) => {
  return async dispatch => {

    axios.get(`https://api.github.com/users/${user}/repos`).then((res) => {
      console.log("repo", res);
      dispatch({ type: "USER_REPO", payload: res });
    })

  };
}