import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './Main';
import { Footer } from './Footer';
import { NotFound } from './NotFound';

const home="/mindulPage";
export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={home+"/"} element={<Main />} />

          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
