"use client";

import { useState } from "react";
import RepoList from "./components/RepoList";
import FormInput from "./components/FormInput";
import { toast } from "react-toastify";
import { Repo } from "./components/model";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [repos, setRepos] = useState<Repo[]>([]);

  const fetchRepos = async () => {
    setLoading(true);
    const [owner, repoName] = query.split("/");
    try {
      const response = await fetch(
        repoName
          ? `http://localhost:3000/github/repos/${owner}/${repoName}`
          : `http://localhost:3000/github/repos/${owner}`
      );
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        let fetchedData = data;
        if (!Array.isArray(fetchedData)) {
          fetchedData = [fetchedData];
        }
        setRepos(fetchedData);
        toast.success("Data fetched successfully");
      } else if (response.status === 401) {
        toast.error("Wrong authentication token");
      } else {
        toast.error("An error occurred while fetching data");
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFetchRepos = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchRepos();
  };

  return (
    <div className="w-full min-h-[100vh] bg-white">
      <nav className="flex justify-center items-center bg-white min-h-[90px] text-[32px] text-black text-center shadow-md">
        Github Repository Details
      </nav>
      <main>
        <FormInput
          query={query}
          setQuery={setQuery}
          handleFetchRepos={handleFetchRepos}
        />
        <div className="w-full flex justify-center items-center">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="loader"></div>
            </div>
          ) : repos.length > 0 ? (
            <RepoList repos={repos} isLoading={loading} />
          ) : (
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <p className="text-gray-500 mt-2">
                Lists of repository with their stars appears here when you
                search
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
