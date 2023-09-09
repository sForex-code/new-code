import './App.scss';
import Home from './Components/Home'
import Header from './Components/Home/Header';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header/>
      <Home/>
    </Router>
  );
}

export default App;
