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
    const onMoveDProfile = () => {
        navigation("/D_profile");
    }
        const onMoveEProfile = () => {
        navigation("/E_profile");
    }
        const onMoveFProfile = () => {
        navigation("/F_profile");
    }
        const onMoveGProfile = () => {
        navigation("/G_profile");
    }
        const onMoveHProfile = () => {
        navigation("/H_profile");
    }
        const onMoveIProfile = () => {
        navigation("/I_profile");
    }
        const onMoveJProfile = () => {
        navigation("/J_profile");
    }
        const onMoveKProfile = () => {
        navigation("/K_profile");
    }
        const onMoveLProfile = () => {
        navigation("/L_profile");
    }
        const onMoveMProfile = () => {
        navigation("/M_profile");
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
                    <button className="item" onClick={onMoveDProfile}>健太<br/>
                    back number,Saucy Dog</button>
                    <button className="item" onClick={onMoveEProfile}>由美<br/>
                    YOASOBI,Ado,ずっと真夜中でいいのに。</button>
                    <button className="item" onClick={onMoveFProfile}>大輝<br/>
                    ONE OK ROCK,[Alexandros],SUPER BEAVER</button>
                    <button className="item" onClick={onMoveGProfile}>さくら<br/>
                    back number</button>
                    <button className="item" onClick={onMoveHProfile}>拓也<br/>
                    Creepy Nuts,BUMP OF CHICKEN</button>
                    <button className="item" onClick={onMoveIProfile}>美咲<br/>
                    aiko,緑黄色社会,Perfume</button>
                    <button className="item" onClick={onMoveJProfile}>翔太<br/>
                    RADWIMPS</button>
                    <button className="item" onClick={onMoveKProfile}>葵<br/>
                    Official髭男dism,King Gnu</button>
                    <button className="item" onClick={onMoveLProfile}>蓮<br/>
                    SEKAI NO OWARI,Vaundy</button>
                    <button className="item" onClick={onMoveMProfile}>陽菜<br/>
                    Saucy Dog,My Hair is Bad,クリープハイプ</button>
                    
            </div>
            <div className="back">
                <button onClick={() => navigation(-1)}>戻る</button>
            </div>
        </div>
    );
}