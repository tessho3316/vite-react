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

export const D_profile = () => {
  return ( 
    <div className='profile'>
      <MakeProfile profileId={5} />
    </div>
  );
}

export const E_profile = () => {
  return ( 
    <div className='profile'>
      <MakeProfile profileId={6} />
    </div>
  );
}

export const F_profile = () => {
  return ( 
    <div className='profile'>
      <MakeProfile profileId={7} />
    </div>
  );
}

export const G_profile = () => {
  return ( 
    <div className='profile'>
      <MakeProfile profileId={8} />
    </div>
  );
}

export const H_profile = () => {
  return ( 
    <div className='profile'>
      <MakeProfile profileId={9} />
    </div>
  );
}

export const I_profile = () => {
  return ( 
    <div className='profile'>
      <MakeProfile profileId={10} />
    </div>
  );
}

export const J_profile = () => {
  return ( 
    <div className='profile'>
      <MakeProfile profileId={11} />
    </div>
  );
}

export const K_profile = () => {
  return ( 
    <div className='profile'>
      <MakeProfile profileId={12} />
    </div>
  );
}

export const L_profile = () => {
  return ( 
    <div className='profile'>
      <MakeProfile profileId={13} />
    </div>
  );
}

export const M_profile = () => {
  return ( 
    <div className='profile'>
      <MakeProfile profileId={14} />
    </div>
  );
}

export const N_profile = () => {
  return ( 
    <div className='profile'>
      <MakeProfile profileId={15} />
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
        <Route path="/D_profile" element={<D_profile />} />
        <Route path="/E_profile" element={<E_profile />} />
        <Route path="/F_profile" element={<F_profile />} />
        <Route path="/G_profile" element={<G_profile />} />
        <Route path="/H_profile" element={<H_profile />} />
        <Route path="/I_profile" element={<I_profile />} />
        <Route path="/J_profile" element={<J_profile />} />
        <Route path="/K_profile" element={<K_profile />} />
        <Route path="/L_profile" element={<L_profile />} />
        <Route path="/M_profile" element={<M_profile />} />
        <Route path="/N_profile" element={<N_profile />} />
      </Routes>
    </BrowserRouter>
  );
}