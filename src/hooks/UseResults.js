import React, { useEffect, useState } from "react";
import Yelp from "../api/Yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("Hi there");
    try {
      const response = await Yelp.get("/search", {
        params: { limit: 50, term: searchTerm, location: "chicago" },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError("something Went wrong");
    }
  };

  //   to prevent multiple calls to the api

  useEffect(() => {
    searchApi("pasta");
  }, []);
  return [searchApi, results, error];
};
