import { useEffect, useState } from "react";
import axios from "../axios";

const UseFetch = (api_link) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(api_link);
      setMovies(request.data.results);
    }
    fetchMovies();
  }, [api_link]);
  return [movies];
};

export default UseFetch;
