import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULT } from "../utils/constants";
import { SearchVideoCard } from "./SearchVideoCard";

const SearchResultContainer = () => {
  const [query] = useSearchParams();
  const [results, setResults] = useState([]);

  const getSearchResults = async () => {
    const data = await fetch(YOUTUBE_SEARCH_RESULT(query.get("search_query")));
    const json = await data.json();
    setResults(json.items);
  };

  useEffect(() => {
    getSearchResults();
  }, []);

  return (
    <div className="col-span-8 py-3 px-5">
      <h1 className="mb-3 font-semibold text-lg">Search results</h1>
      {results?.map((result) => {
        return <SearchVideoCard key={result.etag} videoItem={result} />;
      })}
    </div>
  );
};

export default SearchResultContainer;
