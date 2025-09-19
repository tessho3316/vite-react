import { demo_event } from "./demo_event";
import { demo_profile } from "./demo_profile";
import { useNavigate } from "react-router-dom";

export const DemoEventPage = () => {
  const navigate = useNavigate();

  // 今は最初のイベントを表示する例
  const event = demo_event[0];

  if (!event) {
    return <div>イベントが見つかりません。</div>;
  }

  const { eventname, date, location, description, users } = event.attributes;

  return (
    <div>
      <h1>{eventname} ({date})</h1>
      <p>開催場所: {location}</p>
      <p>{description}</p>
      
      <h3>登録中のユーザー</h3>
      <div className="list">
        {demo_profile
          .filter(profile => users.includes(profile.id)) // ← usersに含まれるidだけに絞る
          .map(profile => (
            <button
              key={profile.id}
              className="item"
              onClick={() => navigate(`/profile/${profile.id}`)}
            >
              {profile.attributes.name}<br/>
              {[profile.attributes.artist1, profile.attributes.artist2, profile.attributes.artist3]
                .filter(Boolean)
                .join(", ")}
            </button>
          ))}
      </div>
    </div>
  );
};
