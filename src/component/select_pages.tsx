import { useNavigate } from 'react-router-dom';



export const SelectPages = () => {
    const navigation = useNavigate()
    const onMoveMyProfile = () => {
    navigation("/My_profile");
    }
    const onMoveOtherProfiles = () => {
        navigation("/Other_profiles");
        }

    return (
        <div>
            <div className="buttons">
                    <button className="login-btn" onClick={onMoveMyProfile}>自分のプロフィールを見る</button>
                    <button className="start-btn" onClick={onMoveOtherProfiles}>他の人のプロフィールを見る</button>
            </div>
        </div>
    );
}