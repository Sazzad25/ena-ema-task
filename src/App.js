import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Section1 from './components/Section1';
import Video from './components/Video';

function App() {
  return (
    <div >
      <Navbar />
      <SearchBar />
      <Section1 />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
