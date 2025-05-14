import React, { useState, useEffect } from 'react';
import './row.css';
import axios from '../../../utils/axios';
// import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Roow = ({ title, fetchUrl, islargeRow }) => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        // Fixed: URL should be interpolated using backticks properly
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error); // Fixed: pass the error object
      }
    })();
  }, [fetchUrl]); // Fixed: misplaced semicolon and comma

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name)
        .then((url) => {
          console.log(url);
          // Fixed: typo in URLSearchParams
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams.get('v'));
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log('Trailer not found:', error)); // Add catch for robustness
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movie?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${baseUrl}${islargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={`row_poster ${islargeRow ? "row_posterLarge" : ""}`} // Fixed: template string
          />
        ))}
      </div>

      <div style={{ padding: '40px' }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Roow;
