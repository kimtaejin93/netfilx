
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Movies from './pages/Movies';
import Navigation from './components/Navigation'
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:id" element={<MovieDetails/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
