import { useAppSelector } from '../../hooks';
import { EditProfileForm } from '../../components';
import { useAppDispatch } from '../../hooks';
import { clearUser } from '../../store/slices/auth';
import { MyProfileCard } from '../../components';
import './style.css';

export const MyProfile = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const userStats = useAppSelector((state) => state.stats.userStats);

  const stats = `Rating: ${userStats?.Rating}
Snippets: ${userStats?.Snippets}
Comments: ${userStats?.Comments}
Likes: ${userStats?.Likes}
Dislikes: ${userStats?.Dislikes}
Questions: ${userStats?.Questions}
Correct Answers: ${userStats?.CorrectAnswers}
Regular Answers: ${userStats?.RegularAnswers}`;

  const handleDeleteProfile = () => {
    dispatch(clearUser());
  };

  return (
    <div className='profile-maincontainer'>
      <MyProfileCard user={user} onClick={handleDeleteProfile} stats={stats} />
      <EditProfileForm />
    </div>
  );
};
