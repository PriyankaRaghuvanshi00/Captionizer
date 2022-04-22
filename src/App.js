import { Route, Routes } from 'react-router';
import './App.css';
import Body from './component/body/body';
import Header from './component/header/header';
import Keyword from './component/keyword/keyword';
import Photo from './component/photo/photo';

function App() {
  return (
    <div className="App">
      <Header />
      <p className='app-p'><bold>Captionizer: </bold> Automated caption suggestions</p>
      <Routes>
        <Route path='/photo' element={<Photo />}></Route>
        <Route path='/keyword' element={<Keyword></Keyword>}></Route>
        <Route path='/random' element={<h1>random</h1>}></Route>
        <Route path='/' element={<Body ></Body>}></Route>
      </Routes>
    </div >
  );
}

export default App;
