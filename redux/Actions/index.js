import axios from "axios";


export const userDatas = user => {
  return async dispatch => {
    axios.get(`https://api.github.com/users/${user}`).then((res) => {
      dispatch({ type: "USER_DATA", payload: res });
    })
    // .catch((err)=>{
    //   console.log("err",err.response);
    //   dispatch({ type: "ERROR", payload: err.response.data });
    // })
  };
};

export const userRepository = (user) => {
  return async dispatch => {
    axios.get(`https://api.github.com/users/${user}/repos`).then((res) => {
      dispatch({ type: "USER_REPO", payload: res });
    })

  };
};