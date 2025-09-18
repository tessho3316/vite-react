import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

export const TitlePage = () => {
  const title: string = "シュミトモ";

  const navigation = useNavigate()
  const onMovePage = () => {
    navigation("/Senni");
  }

  return (
    <div className="title">
      <div className="title-container">
        <h1 className="title-text">{title}</h1>
      </div>
      <div className="catchphrase">
        <p>趣味でつながる、最高の友達探しアプリ</p>
      </div>
      <div className="buttons">
        <button className="login-btn">ログイン</button>
        <button className="signup-btn">新規登録</button>
        <button className="start-btn" onClick={onMovePage}>はじめる</button>
      </div>
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