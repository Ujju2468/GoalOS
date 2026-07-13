import { getCompletedDays } from "../../utils/storage";
import { getCurrentStreak } from "../../utils/storage";
function RecentActivity() {
    const completed = getCompletedDays();
    const streak = getCurrentStreak();
    const recent = [...completed]
        .sort((a, b) => b - a)
        .slice(0, 5);
    return (
        <section className="planner-card">
            <h2>Recent Activity</h2>
            <div className="streak-card">
                🔥 Current Streak
                <strong>{streak} Days</strong>
            </div>
            {
                recent.length === 0 ? (<p>No completed days yet.</p>)
                    : (recent.map(day => (
                        <div
                            key={day}
                            className="activity-row"
                        >
                            <span>
                                ✅ Day {day}
                            </span>
                            <small>
                                Completed
                            </small>
                        </div>)))}
        </section>
    );
}
export default RecentActivity;