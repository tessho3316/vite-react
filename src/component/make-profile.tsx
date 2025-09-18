import { demo_profile } from "./demo_profile";

// コンポーネントがpropsとして profileId を受け取るようにする
// { profileId }: { profileId: number } はTypeScriptの型指定
export const MakeProfile = ({ profileId }: { profileId: number }) => {
  // 1. 受け取ったprofileIdを元に、配列から該当するプロフィールを探す
  const profile = demo_profile.find(p => p.id === profileId);

  // 2. もしプロフィールが見つからなかった場合の表示
  if (!profile) {
    return <div>プロフィールが見つかりません。</div>;
  }

  // 3. データを使いやすいように変数に入れる (毎回demo_profile[0]...と書く必要がなくなる)
  const { name, age, gender, artist1, motivation1, artist2, motivation2, artist3, motivation3, bio, ng } = profile.attributes;

    return ( 
        <div className='profile-card'>
            <h2>{name}</h2>
            <p>{age}歳 / {gender}</p>
            <hr />
            <h3>好きなアーティスト</h3>
            <ul>
        {/* artist1が存在すればリスト項目を表示する */}
        {artist1 && <li>{artist1} - {motivation1}</li>}
        {artist2 && <li>{artist2} - {motivation2}</li>}
        {artist3 && <li>{artist3} - {motivation3}</li>}
      </ul>
      <hr />
      <p><b>自己紹介:</b> {bio}</p>
      <p><b>NGなこと:</b> {ng}</p>
    </div>
  );
};