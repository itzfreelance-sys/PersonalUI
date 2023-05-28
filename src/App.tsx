import Registration from './validate/registration/Registration';
import Home from './view/home/Home';
import NavMenuBar from './view/navmenu/NavMenuBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import New from './view/new/New';

function App() {
  return (
    <Router>
    <div className="App">
      <NavMenuBar />
      <Routes>
        <Route  path="/" Component={Home} />
        <Route  path="/registration" Component={Registration} />
        <Route  path="/new" Component={New} />

        </Routes>
    </div>
  </Router>
  );
}

export default App;


