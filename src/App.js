
import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './requests';
import Nav from "./components/Nav";
function App() {

  return (
    
    <div>
     <Nav/>
    <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Netflix Originals" isPoster={true} fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Trending Movies" fetchUrl={requests.fetchTrending}/>

    </div>
   
  );
}

export default App;
