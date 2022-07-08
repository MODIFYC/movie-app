import React from 'react';
import axios from 'axios';

class test extends React.Component {
 state = {
   isLoading: true,
   movies: [],
 }
 getMovies = async () => {
   const {data: { 
     movieListResult: 
     {movieList}
    }
  }
    = await axios.get("http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=06fe7383576234f02a83e4993c927e1f");
   console.log(movieList)
   this.setState({ movies: movieList, isLoading: false })
 }
 componentDidMount() {
   this.getMovies();
 }
 
 render () {
   const {isLoading, movies} = this.state;
   return <div>{ isLoading ? "Loading..." : movies.map((movie) => {
     console.log(movie);
     return (
        <div key={movie.movieCd}> <h3>{movie.movieNm}</h3> 
        <p>누적 관객 수 : {movie.audiAcc}명</p>
        <p>영화 개봉일 :  ({movie.openDt}) </p>
        </div>
     )
   })}</div>;
 }
}

export default test;