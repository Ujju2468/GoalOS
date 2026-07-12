import { getDashboardStats } from "../../utils/dashboardHelpers";
import { ArrowRight, Trophy } from "lucide-react";
function GoalHero() {
  const stats = getDashboardStats();
  return (
    <section className="goal-hero">
      <div className="hero-top">
        <div>
          <span className="hero-tag">
            <Trophy size={16} />
            60 Day Placement Mission
          </span>
          <h1>
            Build. Learn. Improve.
          </h1>
          <p>
            Every day counts. Stay consistent and become the developer
            your future self will thank you for.
          </p>
        </div>
      </div>
      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${stats.progress}%`
            }}
          />
        </div>
        <strong>{stats.progress}%</strong>      
        </div>
      <button className="hero-btn">
        Continue Journey
        <p>
          {stats.completedCount} of {stats.totalDays} days completed
        </p>
        <ArrowRight size={18} />
      </button>
    </section>
  );
}
export default GoalHero;