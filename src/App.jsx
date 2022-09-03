import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Basket from './components/Basket';
import { Categories } from './components/categories/Categories';
import { Category } from './components/categories/Category';
import EditProfile from './components/EditProfile';
import { Favorites } from './components/Favorites';
import { Home } from './components/Home';
import NotFound from './components/NotFound';
import { ProductInfo } from './components/ProductInfo';
import Search from './components/Search';
import { getAllProductsACS } from './modules/sagas/saga-action';

const App = () => {
  const dispatch = useDispatch();
  const [mobMenu, setMobMenu] = useState(false);

  useEffect(() => {
    dispatch(getAllProductsACS());
  }, []);

  useEffect(() => {
    const windowSize = window.addEventListener('resize', () => {
      if (window.innerWidth >= 1200) {
        setMobMenu(false);
      }
    })
    return () => window.removeEventListener('resize', windowSize);
  }, [window.innerWidth, mobMenu]);

  return (
    <BrowserRouter>
      <div className="App">
        {
          mobMenu
            ?
            <Categories mobMenu={mobMenu} setMobMenu={setMobMenu} />
            :
            <>
              <Categories mobMenu={mobMenu} setMobMenu={setMobMenu} />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/category/:type" element={<Category />} />
                <Route path="/product/:id" element={<ProductInfo />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/search" element={<Search />} />
                <Route path='/basket' element={<Basket />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path='/signIn' element={<SignIn />} />
                <Route path='/edit' element={<EditProfile />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </>
        }
        {/* <Slider /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
