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
            <div className="list">
                    <button className="item" onClick={onMoveAProfile}>太郎<br/>
                    Ms.GREEN APPLE</button>
                    <button className="item" onClick={onMoveBProfile}>花子<br/>
                    あいみょん,米津玄師</button>
                    <button className="item" onClick={onMoveCProfile}>ねね<br/>
                    マカロニえんぴつ,go!go!vanillas,サカナクション</button>
            </div>
        </div>
    );
}