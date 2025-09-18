import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './component/login';
import { SelectPages } from './component/select_pages';

export const TitlePage = () => {

  return (
    <div className="title">
      <Login />
    </div>
  );
}

export const Senni= () => {

  return (
    <div className='profile'>
      <SelectPages />
    </div>
  );
}

export const My_profile = () => {

  return ( 
    <div>
      <p>a</p>
    </div>
  )
}

export const Other_profiles = () => {

  return ( 
    <div>
      <p>b</p>
    </div>
  )
}

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/Senni" element={<Senni />} />
        <Route path="/my_profile" element={<My_profile />} />
        <Route path="/other_profiles" element={<Other_profiles />} />
      </Routes>
    </BrowserRouter>
  );
}