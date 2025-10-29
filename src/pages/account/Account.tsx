import { useAppSelector } from '../../hooks';
import { EditAccountForm } from './EditAccountForm';
import { useAppDispatch } from '../../hooks';
import { clearUser } from '../../store/slices/auth';
import { AccountCard } from './AccountCard';

export const Account = () => {
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
    <div style={{ maxWidth: '100%', maxHeight: '100%' }}>
      <AccountCard user={user} onClick={handleDeleteProfile} stats={stats} />
      <EditAccountForm />
    </div>
  );
};
