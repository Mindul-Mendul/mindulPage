import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './header';
import { Main } from './Main';
import { Footer } from './footer';
import { NotFound } from './notFound';

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
