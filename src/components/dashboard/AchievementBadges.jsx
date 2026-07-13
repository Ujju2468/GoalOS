import { getBadges } from "../../utils/badges";

function AchievementBadges() {
  const badges = getBadges();

  return (
    <section className="planner-card">
      <h2>Achievements</h2>

      <div className="badges-grid">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={
              badge.unlocked
                ? "badge unlocked"
                : "badge locked"
            }
          >
            <div className="badge-icon">
              {badge.icon}
            </div>
            <h4>{badge.title}</h4>
            <span>
              {badge.unlocked ? "Unlocked" : "Locked"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AchievementBadges;