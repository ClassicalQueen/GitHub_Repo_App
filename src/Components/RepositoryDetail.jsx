import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const RepositoryDetail = () => {
  const { id } = useParams();
  const [repository, setRepository] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repositories/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: import.meta.env.VITE_TOKEN,
            },
          }
        );
        if (!response.ok) {
          throw new Error("failed to fetch repository");
        }
        const data = await response.json();
        setRepository(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p className="text=white">Loading...</p>
      ) : (
        <div>
          <div className="flex items-center sm:justify-center ml-4 sm:ml-0">
            <table className="w-full border-collapse border border-blue-500 max-w-xl mt-16 mx-auto">
              <thead>
                <tr class="bg-blue-500 text-white">
                  <th class="py-2 px-4">Description</th>
                  <th class="py-2 px-4">Data</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-blue-500 ">
                  <td class="py-2 px-4">Name</td>
                  <td class="py-2 px-4">{repository.name}</td>
                </tr>

                <tr className="bg-white border-b border-blue-500 ">
                  <td class="py-2 px-4">Stars</td>
                  <td class="py-2 px-4">{repository.stargazers_count}</td>
                </tr>

                <tr className="bg-white border-b border-blue-500 ">
                  <td class="py-2 px-4">Language</td>
                  <td class="py-2 px-4">{repository.language}</td>
                </tr>

                <tr className="bg-white border-b border-blue-500 ">
                  <td class="py-2 px-4">Forks</td>
                  <td class="py-2 px-4">{repository.forks_count}</td>
                </tr>

                <tr className="bg-white border-b border-blue-500 ">
                  <td class="py-2 px-4">Open Issues</td>
                  <td class="py-2 px-4">{repository.open_issues_count}</td>
                </tr>

                <tr className="bg-white border-b border-blue-500 ">
                  <td class="py-2 px-4">Default Branch</td>
                  <td class="py-2 px-4">{repository.default_branch}</td>
                </tr>

                <tr className="bg-white border-b border-blue-500 ">
                  <td class="py-2 px-4">Created At</td>
                  <td class="py-2 px-4">
                    {new Date(repository.created_at).toLocaleDateString()}
                  </td>
                </tr>

                <tr className="bg-white border-b border-blue-500 ">
                  <td class="py-2 px-4"> Last Updated At</td>
                  <td class="py-2 px-4">
                    {new Date(repository.updated_at).toLocaleDateString()}
                  </td>
                </tr>

                <tr className="bg-white border-b border-blue-500 ">
                  <td class="py-2 px-4"> License</td>
                  <td class="py-2 px-4">
                    {repository.license
                      ? repository.license.name
                      : "No License"}
                  </td>
                </tr>
                <tr className="bg-white border-b border-blue-500 ">
                  <td class="py-2 px-4"> Owner</td>
                  <td class="py-2 px-4">{repository.owner.login}</td>
                </tr>
                <tr className="bg-white border-b border-blue-500 ">
                  <td class="py-2 px-4"> Homepage</td>
                  <td class="py-2 px-4">
                    {repository.homepage ? (
                      <a
                        href={repository.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {repository.homepage}
                      </a>
                    ) : (
                      "No Homepage"
                    )}
                  </td>
                </tr>

                <tr class="bg-white border-b border-blue-500">
                  <td class="py-2 px-4">Size</td>
                  <td class="py-2 px-4">{repository.size} KB</td>
                </tr>
                <tr class="bg-white border-b border-blue-500">
                  <td class="py-2 px-4">Watchers</td>
                  <td class="py-2 px-4">{repository.watchers_count}</td>
                </tr>

                <tr class="bg-white border-b border-blue-500">
                  <td class="py-2 px-4">Subscribers</td>
                  <td class="py-2 px-4">{repository.subscribers_count}</td>
                </tr>

                <tr class="bg-white border-b border-blue-500">
                  <td class="py-2 px-4">Network Count</td>
                  <td class="py-2 px-4">{repository.network_count}</td>
                </tr>
                <tr class="bg-white border-b border-blue-500">
                  <td class="py-2 px-4">Open Issues</td>
                  <td class="py-2 px-4">{repository.open_issues_count}</td>
                </tr>
                <tr class="bg-white border-b border-blue-500">
                  <td class="py-2 px-4">Is Private</td>
                  <td class="py-2 px-4">{repository.private ? "Yes" : "No"}</td>
                </tr>
                <tr class="bg-white border-b border-blue-500">
                  <td class="py-2 px-4">Archived</td>
                  <td class="py-2 px-4">
                    {repository.archived ? "Yes" : "No"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link to="/">
            <button className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 m-10">
              Home page
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default RepositoryDetail;
