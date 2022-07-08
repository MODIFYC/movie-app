import { useState, useEffect } from "react";
import moment from 'moment';


function RankKofic() {
  const KEY = "06fe7383576234f02a83e4993c927e1f"
  const DATE = moment().subtract(1, 'day').format('YYYYMMDD');
  
  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${KEY}&targetDt=${DATE}`
      )
    ).json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, [])


  return (
    <div>
      {loading ? <h1>Loading...</h1> :
      <div>
        {movies.map(movie => 
        <div key={movie.movieCd}> 
        <p>{movie.rnum}위</p>
        <h3>{movie.movieNm}</h3> 
        </div>)}
      </div>}
    </div>
  );
}

export default RankKofic;