import { useState } from "react";
import { useDispatch } from "react-redux";
import { search_response } from "../actions/";
const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleEvent = async (e) => {
    if (e.key === undefined || e.key === "Enter") {
      if (query === "" || query === " ")
        alert("Search filed empty. Please input something!!!");
      else {
        const url = `http://hn.algolia.com/api/v1/search?query=${query}`;
        try {
          let response = await fetch(url);
          response = await response.json();
          response = response.hits;
          dispatch(search_response(response));
        } catch (e) {
          if (e instanceof TypeError)
            alert("Network Unavailable!! Check Connection.");
        }
      }
    }
  };
  return (
    <div className="search-container">
      <div className="search-header">
        <h1 className="search-header__logo">Posts</h1>
        <input
          className="search-header__search"
          type="search"
          placeholder="Search News"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => handleEvent(e)}
        />
        <button
          type="button"
          className="search-header__button"
          onClick={(e) => handleEvent(e)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
