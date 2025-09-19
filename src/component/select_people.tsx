import { useNavigate } from 'react-router-dom';
import { demo_profile } from './demo_profile';

export const SelectPeople = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="list">
        {demo_profile.slice(1).map(profile => (
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
      <div className="back">
        <button onClick={() => navigate(-1)}>戻る</button>
      </div>
    </div>
  );
};
