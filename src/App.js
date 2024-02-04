import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Pages/create';
import Redirect from './Pages/redirect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create/>} />
        <Route path='u/:id' element={<Redirect/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
