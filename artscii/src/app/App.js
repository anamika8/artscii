import './App.css';
import Header from '../components/header/Header'
import Main from '../components/main/Main';
import About from '../components/about/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
		<Header/>
		<Routes>
			<Route exact path='/artscii' element={<Main/>}/>
			<Route exact path='/' element={<Main/>}/>
			<Route exact path='/about' element={<About/>}/>
		</Routes>
    </div>
  );
}

export default App;
