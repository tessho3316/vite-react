import { MakeProfile } from './make-profile';

export const DemoEventPage = () => {

    return ( 
        <div>
            <h1>ROCK IN JAPAN FES.2025(9月21日)</h1>
            <p>開催場所: 千葉県蘇我市</p>
            <h3>登録中のユーザー</h3>
            <div className='profile'>
                <MakeProfile profileId={2} />
                <MakeProfile profileId={3} />
                <MakeProfile profileId={4} />
                <MakeProfile profileId={5} />
                <MakeProfile profileId={6} />
                <MakeProfile profileId={7} />
            </div>
        </div>
    );
}