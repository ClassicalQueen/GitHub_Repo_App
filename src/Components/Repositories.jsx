import React, { useEffect, useState } from "react";

import { Paginator } from "primereact/paginator";
import { Link } from "react-router-dom";

const repositories = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRepositories, setFilteredRepositories] = useState([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);

  useEffect(() => {
    const myRepo = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/ClassicalQueen/repos`,
          {
            method: "GET",
            headers: {
              Authorization: import.meta.env.VITE_TOKEN,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }

        const data = await response.json();
        setRepositories(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    myRepo();
  }, []);

  const SearchRepo = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filtered = repositories.filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRepositories(filtered);
  }, [repositories, searchTerm]);

  return (
    <>
      <div>
        

          <h3 className="author-name">
          <img src="./src/assets/author-photo.jpg"
            />

            Desiree Onyinyechi Chukwuji (ClassicalQueen)
          </h3>
          <h4 className="author-description">
            Software and web developer
            <br />
            Below are my GitHub repositories
          </h4>
        
        <label
          className="mx-auto mt-40 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
          htmlFor="search-bar"
        >
          <input
            id="search-bar"
            placeholder="Enter keyword"
            type="text"
            value={searchTerm}
            onChange={SearchRepo}
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
          />
          <a
            href="*"
            className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70"
          >
            <div className="relative">
              <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all"></div>

              <div className="flex items-center transition-all opacity-1 valid:">
                <button class="btn">
                  <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                    Search
                  </span>
                </button>
              </div>
            </div>
          </a>
        </label>
      </div>

      <div>
        
        <div>
          {loading ? (
            <p className="text-white">loading...</p>
          ) : (
            <div className="flex lg:flex-row lg:row-span-3 lg:flex-wrap flex-col gap-4 h-svh m-4  items-center">
              {filteredRepositories.slice(first, first + rows).map((repo) => (
                <div
                  className="group flex flex-col justify-start items-center gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300"
                  key={repo.id}
                >
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">
                      {repo.name}
                    </h2>
                  </div>
                  <button class="btn2">
                    <Link
                      to={`/repository/${repo.id}/`}
                      className="block hover:bg-gray-300 bg-gray-200 text-gray-800 mt-6 rounded p-2 px-6"
                    >
                      Explore
                    </Link>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <Paginator
          className="flex gap-4 text-zinc-100 m-5"
          first={first}
          rows={rows}
          totalRecords={repositories.length}
          onPageChange={(e) => {
            setFirst(e.first);
            setRows(e.rows);
          }}
        />
      </div>
    </>
  );
};

export default repositories;
