import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeHeaders from './componentes/Header'
import CreateCard from './componentes/Create-card'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeHeaders/>} />
          <Route path='/create-card' element={<CreateCard/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App