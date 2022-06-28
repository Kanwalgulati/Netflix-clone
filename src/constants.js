import requests from "./requests";

export const base_url = "http://image.tmdb.org/t/p/original";

export const netflix_data = [
  {
    title: "NETFLIX ORIGINALS",
    fetchURL: requests.fetchNetflixOriginals,
    isLargeRow: true,
  },
  { title: "Treanding Now", fetchURL: requests.fetchTrending },
  { title: "Top Rated", fetchURL: requests.fetchTopRated },
  { title: "Action Movies", fetchURL: requests.fetchActionMovies },
  { title: "Comedy Movies", fetchURL: requests.fetchComedyMovies },
  { title: "Horror Movies", fetchURL: requests.fetchHorrorMovies },
  { title: "Romance Movies", fetchURL: requests.fetchRomanceMovies },
  { title: "Documentaries", fetchURL: requests.fetchDocumantaries },
];
