import React from 'react'
import SingleRow from '../SingleRow'
import requests from "../../../utils/requests"

const RowList = () => {
  return (
    <div>
      <SingleRow
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <SingleRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <SingleRow title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <SingleRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <SingleRow title="Comedy MOvies" fetchUrl={requests.fetchComedyMovies} />
      <SingleRow title="Horror MOvies" fetchUrl={requests.fetchHorrorMovies} />
      <SingleRow
        title="Romance MOvies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <SingleRow title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <SingleRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default RowList
