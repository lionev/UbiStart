import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from '../App';
import { DetailsDrinks } from '../screens/DetailsDrinks';
import { DrinkForCategory } from '../screens/DrinkForCategory';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/DetailsDrinks/:idDrink' element={<DetailsDrinks />} />
        <Route path='/DrinkForCategory/:strCategory' element={<DrinkForCategory />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes;