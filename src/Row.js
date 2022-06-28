import React, { useState } from "react";
import { base_url } from "./constants";
import UseFetch from "./CustomHook/UseFetch";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies] = UseFetch(fetchURL);
  const [showVideo, setShowVideo] = useState(false);
  const [trailerURL, setTrailerURL] = useState("");

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      {title}
      <div className={`row__posters`}>
        {movies &&
          movies.map((movie) => (
            <>
              <img
                key={movie.id}
                className={`row__poster  ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => {
                  handleClick(movie);
                }}
              />
            </>
          ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
};

export default Row;
