import './App.css';
import Row from "./Row"
import requests from "./request"
import Banner from "./Banner"
import Nav from "./Nav"
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
 <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} 
 isLargeRow
 />

 <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
 <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
 <Row title="action movies" fetchUrl={requests.fetchActionMovies} />
 <Row title="comedy movies" fetchUrl={requests.fetchComedyMovies} />
 <Row title="horror movies" fetchUrl={requests.fetchHorrorMovies} />
 <Row title="romance movies" fetchUrl={requests.fetchRomanceMovies} />
 <Row title="documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

// b85c4f584beac7ef9e061180374782e2

// https://api.themoviedb.org/3/movie/550?api_key=b85c4f584beac7ef9e061180374782e2
