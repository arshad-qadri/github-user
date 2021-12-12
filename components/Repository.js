import React from 'react'

const Repository = ({repo}) => {
    return (
        <>
           <div>
                  {repo?.length > 0 ? repo.map((item) =>
                  (
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
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>

                    </div>
                  )) : <p className="w-full text-center font-bold text-lg">Repository empty</p>}
                </div> 
        </>
    )
}

export default Repository
