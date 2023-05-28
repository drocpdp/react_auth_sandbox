import { Routes, Route } from 'react-router-dom';

import LandingPage from './routes/landing.component';
import MyAccount from './routes/my-account.component';
import ProductsAnimals from './routes/products-animals.component';
import ProductsCars from './routes/products-cars.component';
import ProductsClothes from './routes/products-clothes.component';
import PageNotFound from './routes/page-not-found.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/my-account' element={<MyAccount />}/>
      <Route path='/products-animals' element={<ProductsAnimals />}/>
      <Route path='/products-cars' element={<ProductsCars />}/>
      <Route path='/products-clothes' element={<ProductsClothes />}/>
      <Route path='*' element={<PageNotFound />}/>
    </Routes>
  );
}

export default App;
