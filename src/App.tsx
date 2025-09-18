import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './component/login';

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
      <h1>
        profile
      </h1>
      <p>
        名前:藤貫　哲生
      </p>
      <p>
        20歳<br/>
        男<br/>
        好きなアーティスト<br/>
        PEOPLE1 🔥🔥🔥🔥🔥<br/>
        vaundy 🔥🔥🔥🔥<br/>
      </p>
    </div>
  )
}

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/Senni" element={<Senni />} />
      </Routes>
    </BrowserRouter>
  );
}