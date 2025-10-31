import { useAppSelector, useAppDispatch } from '@hooks';
import { clearUser } from '@store';
import { AccountCard } from './AccountCard';
import { EditAccountForm } from './EditAccountForm';

export const Account = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const userStats = useAppSelector((state) => state.stats.userStats);

  const stats = `
    Rating: ${userStats?.Rating}
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
