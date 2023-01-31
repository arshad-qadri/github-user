import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRepository } from "../redux/Actions";

const Repository = ({ repo }) => {
  const reposRef = useRef();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userRed);

  const handleScroll = () => {
    const scrollTop = reposRef.current?.scrollTop;
    const scrollHeight = reposRef.current?.scrollHeight;
    const clientHeight = reposRef?.current?.clientHeight;
    try {
      if (scrollTop + clientHeight >= scrollHeight) {
        setPage((perv) => perv + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user?.data?.login && page > 1) {
      dispatch(userRepository(user?.data?.login, page));
    }
  }, [page]);

  useEffect(() => {
    if (repo?.length < user?.data?.public_repos) {
      const repositories = document.getElementById("repositories");
      repositories.addEventListener("scroll", handleScroll);
      return () => repositories.removeEventListener("scroll", handleScroll);
    }
    // repositories.
  }, [repo?.length]);
  return (
    <>
      <div
        style={{
          height: "66vh",
          overflow: "auto",
          padding: "10px 0",
        }}
        id="repositories"
        ref={reposRef}
      >
        {repo?.length > 0 ? (
          repo.map((item) => (
            <div
              className="w-full bg-white mt-2 p-3 px-10 rounded-l shadow-sm hover:shadow-lg hover:border-green-500 "
              key={item.id}
            >
              <div className="text-sm text-gray-400">
                <span className="capitalize">{item.default_branch}</span>
              </div>

              <div className="lg:flex lg:justify-between lg:items-center sm:flex-none">
                <h1 className="font-bold my-2 capitalize text-lg">
                  <a
                    href={item.html_url}
                    className="text-green-600 hover:text-green-500"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.name}
                  </a>
                </h1>
                <div className="my-2 text-sm text-gray-600 font-bold">
                  <span className="lg:mx-3 ">
                    Star : {item.stargazers_count}
                  </span>
                  <span className="mx-8">Forks : {item.forks}</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))
        ) : (
          <p className="w-full text-center font-bold text-lg">
            Repository empty
          </p>
        )}
      </div>
    </>
  );
};

export default Repository;
