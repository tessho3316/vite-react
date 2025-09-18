import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './component/login';
import { SelectPages } from './component/select_pages';
import { SelectPeople } from './component/select_people';
import { MakeProfile } from './component/make-profile';

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
    <div className='profile'>
      <MakeProfile profileId={1} />
    </div>
  )
}

export const Other_profiles = () => {

  return ( 
    <div className='profile'>
      <SelectPeople />
    </div>
  );
}

export const A_profile = () => {
  return ( 
    <div className='profile'>
      <MakeProfile profileId={2} />
    </div>
  );
}

export const B_profile = () => {
  return ( 
    <div className='profile'>
      <MakeProfile profileId={3} />
    </div>
  );
}

export const C_profile = () => {
  return ( 
    <div className='profile'>
      <MakeProfile profileId={4} />
    </div>
  );
}

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/Senni" element={<Senni />} />
        <Route path="/my_profile" element={<My_profile />} />
        <Route path="/other_profiles" element={<Other_profiles />} />
        <Route path="/A_profile" element={<A_profile />} />
        <Route path="/B_profile" element={<B_profile />} />
        <Route path="/C_profile" element={<C_profile />} />
      </Routes>
    </BrowserRouter>
  );
}