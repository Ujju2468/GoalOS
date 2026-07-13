import { getDashboardStats } from "../utils/dashboardHelpers";
import Layout from "../components/layout/Layout";
import GoalHero from "../components/dashboard/GoalHero";
import StatsCard from "../components/dashboard/StatsCard";
import TodayMission from "../components/dashboard/TodayMission";
import MonthsGrid from "../components/months/MonthsGrid";
import motivation from "../data/motivation";
import roadmapData from "../data/roadmapData";
import RecentActivity from "../components/dashboard/RecentActivity";
import AchievementBadges from "../components/dashboard/AchievementBadges";
import {
  getCompletedDays
} from "../utils/storage";

function Dashboard() {
  const completedDays =
    getCompletedDays();
  const completed =
    completedDays.length;
  const total =
    roadmapData.length;
  const remaining =
    total - completed;
  const progress =
    Math.round(
      (completed / total) * 100
    ) || 0;
  const currentDay =
    completed + 1;
  const stats = getDashboardStats();
  return (

    <Layout>
      <GoalHero />
      <MonthsGrid />
      <section className="stats-grid">
        <StatsCard
          title="Completed Days"
          value={completed}
        />
        <StatsCard
          title="🔥 Streak"
          value={`${stats.streak} Days`}
        />
        <StatsCard
          title="Remaining"
          value={remaining}
        />
        <StatsCard
          title="Progress"
          value={`${progress}%`}
        />
      </section>
      <TodayMission
        quote={
          motivation[
          Math.floor(
            Math.random() * motivation.length
          )]}
      />
      <RecentActivity />
      <AchievementBadges/>
    </Layout>
  );
}
export default Dashboard;