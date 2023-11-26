import { FormEvent, FunctionComponent, useState } from "react";

interface SearchFormProps {
  onSubmitted: (query: string) => void;
}
const SearchForm: FunctionComponent<SearchFormProps> = ({ onSubmitted }) => {
  const [query, setQuery] = useState<string>("");

  const handleQuerySubmitRequest = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitted(query);
  };

  return (
    <form
      className="flex w-[250px] md:w-80 text-sm mx-auto md:p-0 bg-baseDark dark:bg-baseWhite rounded-lg h-min"
      onSubmit={handleQuerySubmitRequest}
    >
      <label
        htmlFor="default-search"
        className="text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      {/* <div> */}
      {/* <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div> */}
      <div className="flex text-baseWhite bg-trasparent rounded-lg dark:text-baseDark ">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          id="default-search"
          className="outline rounded-lg outline-0 border-0 p-4 text-start bg-baseDark dark:bg-baseWhite w-full h-12 md:h-12 text-md md:text-lg text-baseWhite dark:text-baseDark"
          placeholder="Search"
          required
        ></input>
        <button
          type="submit"
          className="text-white m-2 md:h-auto bg-accentPurple hover:bg-black focus:outline-none font-semibold rounded-lg text-sm md:text-sm p-2 md:px-4 md:py-2"
        >
          Search
        </button>
      </div>
      {/* </div> */}
    </form>
  );
};

export default SearchForm;
