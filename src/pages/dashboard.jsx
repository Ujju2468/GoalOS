// --------------------------------------Response3-----------------------------------------------
import Layout from "../components/layout/Layout";
import GoalHero from "../components/dashboard/GoalHero";
import StatsCard from "../components/dashboard/StatsCard";
import TodayMission from "../components/dashboard/TodayMission";
import MonthsGrid from "../components/months/MonthsGrid";
import motivation from "../data/motivation";

function Dashboard() {
  return (
    <Layout>

      <GoalHero />
      
      <MonthsGrid/>

      <section className="stats-grid">

        <StatsCard
          title="Completed Days"
          value="124"
        />

        <StatsCard
          title="Current Streak"
          value="18"
        />

        <StatsCard
          title="Remaining Days"
          value="241"
        />

        <StatsCard
          title="Study Hours"
          value="412"
        />

      </section>

      <TodayMission />

    </Layout>
  );
}

export default Dashboard;
// --------------------------------------------RESPONSE3-----------------------------------------------

