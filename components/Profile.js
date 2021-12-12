import React from 'react'
import Image from "next/image";

const Profile = ({userData}) => {
    return (
        <>
            <div
                  className=" bg-white shadow-md rounded mx-auto p-6 mt-2"
                  style={{ height: "32rem" }}
                >
                  <Image
                    className="rounded"
                    src={userData?.avatar_url}
                    alt={userData?.name}
                    height={300}
                    width={300}
                  />

                  <h1 className="text-lg font-bold mt-2 capitalize">
                    {userData.name ? userData.name: "Unknown" }
                  </h1>
                  <p className="text-l mt-2 text-gray-500">{userData.blog ? userData.blog : "Blog empty"}</p>
                  <p className="text-l text-gray-500 mt-1">
                    {userData.location ? userData.location : "Location empty"}
                  </p>
                  <a href={userData?.html_url} target="_blank">
                    <button className="bg-green-400 px-4 py-2 text-lg hover:bg-green-500 rounded text-white font-bold capitalize  w-full mt-4">
                      View profile
                    </button>
                  </a>
                </div> 
        </>
    )
}

export default Profile
