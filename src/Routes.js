
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'

function MainRoutes() {
  return (
    <Routes>

      <Route element={<Home />} path='/' />

    </Routes>
  );
}

export default MainRoutes;
