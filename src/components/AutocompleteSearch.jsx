import { useState, useEffect } from "react";

const AutocompleteSearch = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      console.log("RETURNED CACHE");
      setResults(cache[input]);
      return;
    }
    console.log("API CALLED " + input);
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const json = await data.json();
    //console.log(json.recipes);
    setResults(json?.recipes);
    //console.log(results);
    setCache((prev) => ({ ...prev, [input]: json?.recipes }));
    //console.log(cache);
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 380);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <>
      <div className="search-container">
        <input
          className="search"
          placeholder="search"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => {
            setShowResults(true);
          }}
          onBlur={() => {
            setShowResults(false);
          }}
        />
      </div>
      {showResults && (
        <div className="result-container">
          {results.map((r) => (
            <span className="result" key={r.id}>
              {r.name}
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default AutocompleteSearch;
