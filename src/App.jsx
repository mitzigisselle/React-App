import Navbar from './components/navbar/Navbar.jsx';
import Astros from './components/navbar/astros/Astros.jsx';
import './App.css';
import { Routes, Route} from 'react-router-dom';



function App() {

  const links = [
    { id: 1, href: "/", text: "Home" },
    { id: 2, href: "/astros", text: "Astros" },
    { id: 3, href: "/apod", text: "APOD" }
  ];

  return (
    //fragmento de React <> </>: obliga atener una buena estructura en los componentes 
    <>
      <Navbar links={links}/>
      <Routes>
        <Route path='/' element={<h1>Space-app</h1>} />
        <Route path='/astros' element={<Astros />} />
      </Routes>
    </>
  );
}

export default App
