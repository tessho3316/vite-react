import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';



export const Login = () => {
    const title: string = "シュミトモ";
    const navigation = useNavigate()
    const onMovePage = () => {
    navigation("/Senni");
    }

    return (
        <div>
            <div className="title-container">
                <h1 className="title-text">{title}</h1>
            </div>
            <div className="catchphrase">
                <p>趣味でつながる、最高の友達探しアプリ</p>
            </div>
            <div className="buttons">
                    <button className="login-btn">ログイン</button>
                    <button className="signup-btn">新規登録</button>
                    <button className="start-btn" onClick={onMovePage}>テストログイン</button>
            </div>
        </div>
    );
}