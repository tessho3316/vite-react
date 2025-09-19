import { useNavigate } from 'react-router-dom';

export const SelectPages = () => {
  const navigate = useNavigate();

  const onMoveMyProfile = () => {
    navigate("/My_profile");
  };
  const onMoveOtherProfiles = () => {
    navigate("/Other_profiles");
  };

  return (
    <div>
      <div className="buttons">
        <button className="login-btn" onClick={onMoveMyProfile}>
          自分のプロフィールを見る
        </button>
        <button className="start-btn" onClick={onMoveOtherProfiles}>
          他の人のプロフィールを見る
        </button>
      </div>

      <div className="back">
        <button onClick={() => navigate(-1)}>戻る</button>
      </div>
    </div>
  );
};
