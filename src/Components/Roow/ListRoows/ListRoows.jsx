import React from 'react';
import Roow from '../Roow/Roow';
import Requests from '../../../utils/Requests';

const rowConfigs = [
  { title: "Trending Movies", fetchUrl: Requests.fetchTrending },
  { title: "Top Rate Movies", fetchUrl: Requests.fetchTopRatedMovies },
  { title: "Animation Movies", fetchUrl: Requests.fetchAnimationMovies },
  { title: "Comedy Movies", fetchUrl: Requests.fetchComedyMovies },
  { title: "Horror Movies", fetchUrl: Requests.fetchHorrorMovies },
  { title: "Documentaries Movies", fetchUrl: Requests.fetchDocumentaries },
  { title: "TV Shows Movies", fetchUrl: Requests.fetchTVShows },
];

const ListRoows = () => {
  return (
    <>
      {rowConfigs.map((row, index) => (
        <Roow
          key={index}
          title={row.title}
          fetchUrl={row.fetchUrl}
          islargeRow={true} 
        />
      ))}
    </>
  );
};

export default ListRoows;
