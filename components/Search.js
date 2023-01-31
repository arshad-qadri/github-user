import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userDatas, userRepository } from "../redux/Actions";

const Search = ({ setErrMsg }) => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const search = (e) => {
    e.preventDefault();
    if (user === "") {
      // alert("Please enter user name");
      setErrMsg("Please enter user name");
    } else {
      dispatch(userDatas(user));
      dispatch(userRepository(user));
    }
    setUser("");
  };
  return (
    <>
      <form className=" w-full flex justify-center my-8">
        <input
          type="search"
          placeholder="Enter github user name."
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-96 h-12 px-4 focus:outline-none"
        />
        <button
          type="submit"
          onClick={(e) => search(e)}
          className="bg-green-400 px-4 text-white font-bold"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
