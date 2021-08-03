export const inputdata = user => {
  return async dispatch => {
    const api = await fetch(`https://api.github.com/users/${user}`);
    const res = await api.json();

    const repos = await fetch(`https://api.github.com/users/${user}/repos`);
    const repo = await repos.json();
    dispatch({ type: "USER", payload: res, user, repo });
    // console.log("res", repo);
  };
};
