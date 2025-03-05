import React from "react";

interface FormInputProps {
  query: string;
  setQuery: (query: string) => void;
  handleFetchRepos: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  query,
  setQuery,
  handleFetchRepos,
}) => {
  return (
    <form
      onSubmit={handleFetchRepos}
      className="w-full h-[150px] flex justify-center items-center"
    >
      <div className="flex w-[60%] h-[50px] border border-gray-400 rounded-[40px] overflow-hidden">
        <input
          type="text"
          className="w-[92%] h-full focus:outline-0 px-4 text-gray-800"
          placeholder="Enter Repository Name  e.g. facebook/react or organization/owner name e.g. facebook"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center w-[8%] bg-blue-500 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default FormInput;
