import { useState, useEffect } from "react";
import moment from 'moment';

function RankKofic() {
  const KEY = "06fe7383576234f02a83e4993c927e1f"
  const DATE = moment().format('YYYYMMDD');
  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([])
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
  
  console.log();

  return (
    <div>
      {loading ? <h1>Loading...</h1> :
      <div>
        {movies.map(movie => 
        <div key={movie.movieCd}> <h3>{movie.movieNm}</h3> 
        <p>누적 관객 수 : {movie.audiAcc}명</p>
        <p>영화 개봉일 :  ({movie.openDt}) </p>
        </div>)}
      </div>}
    </div>
  );
}

export default RankKofic;