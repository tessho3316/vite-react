import { useNavigate } from 'react-router-dom';



export const SelectPeople = () => {
    const navigation = useNavigate()
    const onMoveAProfile = () => {
    navigation("/A_profile");
    }
    const onMoveBProfile = () => {
        navigation("/B_profile");
        }

    const onMoveCProfile = () => {
        navigation("/C_profile");
    }

    return (
        <div>
            <div className="buttons">
                    <button className="login-btn" onClick={onMoveAProfile}>Aさんのプロフィールを見る</button>
                    <button className="start-btn" onClick={onMoveBProfile}>Bさんのプロフィールを見る</button>
                    <button className="start-btn" onClick={onMoveCProfile}>Cさんのプロフィールを見る</button>
            </div>
        </div>
    );
}