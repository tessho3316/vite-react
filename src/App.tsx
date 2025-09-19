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

import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="profile">
      <MakeProfile profileId={Number(id)} />
    </div>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/Senni" element={<Senni />} />
        <Route path="/my_profile" element={<My_profile />} />
        <Route path="/other_profiles" element={<Other_profiles />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}