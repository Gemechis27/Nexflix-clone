import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/Requests';
import './Banner.css'

const Banner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(requests.fetchTrending); // 🔧 Fixed variable name
       

        setMovie(
          response.data.results[ // 🔧 Fixed `result` to `results`
            Math.floor(Math.random() * response.data.results.length) // 🔧 Fixed `math` to `Math`
          ]
        );
      } catch (error) {
        console.error('Error fetching banner:', error);
      }
    })();
  }, []);

  function truncate  (str, n)  {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <div
      className='banner'
      style={{
        backgroundSize: 'cover', // 🔧 Fixed `=` to `:`
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`, // 🔧 Fixed template literal
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="banner_container">
        <h1 className='Banner_title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
      

       <div className="banner_buttons">
        <button className='banner_button play'>Play</button>
        <button className='banner_button'>My List</button>
       </div>

       <h1 className='banner_description'>
        {truncate(movie?.overview, 150)}
        </h1>
        <div className='banner_fadeBotton'/>

      

      </div>

    </div>
  );
};

export default Banner;
