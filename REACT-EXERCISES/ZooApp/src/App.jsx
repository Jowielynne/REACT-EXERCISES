import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<HomePage />} />
          <Route path='/animals/:id' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App