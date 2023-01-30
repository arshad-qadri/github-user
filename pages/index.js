import Head from "next/head";
import { useState } from "react";
import style from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import Profile from "../components/Profile";
import Repository from "../components/Repository";
import Search from "../components/Search";

function Home() {
  const userData = useSelector((state) => state.userRed.user?.data);
  const repo = useSelector((state) => state.userRed.repos);
  const error = useSelector((state) => state.userRed.error);
  const [errMsg, setErrMsg] = useState("");

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
          <Search setErrMsg={setErrMsg} />
          {error ? (
            <p className="w-full text-center font-bold text-lg">
              {error.message}
            </p>
          ) : (
            <div className="container mx-auto ">
              {!userData ? (
                <p
                  className={`w-full text-center font-bold text-lg ${
                    errMsg && "text-red-600"
                  } `}
                >
                  {" "}
                  {errMsg ? errMsg : " Please search the user"}
                </p>
              ) : (
                <div className={style.grids}>
                  <Profile userData={userData} />
                  <Repository repo={repo} />
                </div>
              )}
            </div>
          )}
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
