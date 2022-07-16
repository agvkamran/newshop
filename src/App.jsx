import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Categories } from './components/categories/Categories';
import { Category } from './components/categories/Category';
import { Favorites } from './components/Favorites';
import { Home } from './components/Home';
import { ProductInfo } from './components/ProductInfo';
// import { ThemeContext } from './components/theme/Theme';
import { getAllProductsACS } from './modules/sagas/saga-action';

const App = () => {
  const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext(themes.light);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsACS());
  }, []);

  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <BrowserRouter>
        <div className="App">
          <Categories />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/category/:type" element={<Category />} />
            <Route path="/product/:id" element={<ProductInfo />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>

        </div>
      </BrowserRouter>
    // </ThemeContext.Provider>
  );
}

export default App;
