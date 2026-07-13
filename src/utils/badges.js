import { getCompletedDays } from "./storage";

export function getBadges() {
  const completed = getCompletedDays().length;

  return [
    {
      id: 1,
      title: "First Step",
      icon: "🥉",
      unlocked: completed >= 1,
    },
    {
      id: 2,
      title: "One Week",
      icon: "🥈",
      unlocked: completed >= 7,
    },
    {
      id: 3,
      title: "One Month",
      icon: "🥇",
      unlocked: completed >= 30,
    },
    {
      id: 4,
      title: "Goal Crusher",
      icon: "🔥",
      unlocked: completed >= 60,
    },
  ];
}