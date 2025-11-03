import type { FC } from 'react';
import { useAppSelector } from '@hooks';
import type { UserStats } from '@store';

const generateStatsString = (userStats: UserStats | null) =>
  Object.entries(userStats || {}).reduce((acc, [key, value]) => {
    const planeTextKey = key
      .split(/(?=[A-Z])/)
      .join(' ')
      .toLowerCase();

    const upperFirstKey = planeTextKey.charAt(0).toUpperCase() + planeTextKey.slice(1);

    return `${acc}${upperFirstKey}: ${value}\n`;
  }, '');

export const ProfileStats: FC = () => {
  const userStats = useAppSelector((state) => state.stats.userStats);
  const stats = generateStatsString(userStats);

  return <pre style={{ display: 'flex' }}>{stats}</pre>;
};
