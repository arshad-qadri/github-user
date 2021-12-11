import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import style from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userDatas, userRepository } from "../redux/Actions";
// import { Link } from "next/link";

function Home() {
  const userData = useSelector(state => state.userRed.user?.data);
  const repo = useSelector(state => state.userRed.repos);
  console.log("reposs:", repo?.data);

  console.log("userData", userData);
  const dispatch = useDispatch();
  const [user, setUser] = useState("");

  const search = () => {
    if (user === "") {
      alert("Plz fill the field");
    } else {
      dispatch(userDatas(user));
      dispatch(userRepository(user))
    }
    
  };

  return (
    <>
      <Head>
        <title>Github-User</title>
      </Head>
      <div className="bg-gray-100 min-h-screen w-screen relative  ">
        <h1 className="bg-green-400 text-white text-2xl font-bold h-12 text-center uppercase leading-10 ">
          Github User
        </h1>

        <div className="h-auto ">
          <div className=" w-full flex justify-center my-8">
            <input
              type="search"
              placeholder="Search user..."
              value={user}
              onChange={e => setUser(e.target.value)}
              className="w-96 h-12 px-4 focus:outline-none "
            />
            <button
              onClick={search}
              className="bg-green-400 px-4 text-white font-bold"
            >
              Search
            </button>
          </div>

          <div className="container mx-auto ">

            <p className="w-full text-center font-bold text-lg">
              Please search the user
            </p>

            {userData && <div className={style.grids}>
              <div
                className=" bg-white shadow-md rounded mx-auto p-6 mt-2"
                style={{ height: "32rem" }}
              >
                <Image
                    className="rounded"
                    src={userData?.avatar_url || ""}
                    alt="myimg"
                    height={300}
                    width={300}
                  />

                <h1 className="text-lg font-bold mt-2 capitalize">
                  {userData?.name}
                </h1>

                {/* <p className="text-l mt-2 text-gray-500">Null</p> */}

                <p className="text-l mt-2 text-gray-500">{userData?.blog}</p>


                <p className="text-l text-gray-500 mt-1">
                  {userData?.location}
                </p>
                <a href={userData?.html_url} target="_blank">
                  <button className="bg-green-400 px-4 py-2 text-lg hover:bg-green-500 rounded text-white font-bold capitalize  w-full mt-4">
                    View profile
                  </button>
                </a>
              </div>
              <div className="">
                {repo && repo.data ? <p>Repository empty</p> : repo?.data.map(e => {
                  return (
                    <div
                      className="w-full bg-white mt-2 p-3 px-10 rounded-l shadow-sm hover:shadow-lg hover:border-green-500 "
                      key={e.id}
                    >
                      <div className="text-sm text-gray-400">
                        <span className="capitalize">{e.default_branch}</span>
                        {/* <span> {e.created_at} </span> */}
                      </div>

                      <div className="lg:flex lg:justify-between lg:items-center sm:flex-none">
                        <h1 className="font-bold my-2 capitalize text-lg">
                          <a
                            href={e.html_url}
                            className="text-green-600 hover:text-green-500"
                            target="_blank"
                          >
                            {e.name}
                          </a>
                        </h1>
                        <div className="my-2 text-sm text-gray-600 font-bold">
                          <span className="lg:mx-3 ">
                            Star : {e.stargazers_count}
                          </span>
                          <span className="mx-8">Forks : {e.forks}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">
                        {e.description}
                      </p>

                    </div>
                  );
                })}
              </div>
            </div>
            }
            {/* <p className="w-full text-center font-bold text-lg">
                No user found
              </p> */}

          </div>
        </div>
        <br />
        <br />

        <footer className=" bg-green-400 w-full text-white py-1 absolute bottom-0 text-center ">
          arshad &copy; all rights are reserved
        </footer>
      </div>
    </>
  );
}
export default Home;

