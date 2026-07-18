import Layout from "../components/layout/Layout";
import { getDashboardStats } from "../utils/dashboardHelpers";
import SubjectProgress from "../components/analytics/SubjectProgress";
import WeeklyProgress from "../components/analytics/WeeklyProgress";

function Analytics() {
    const stats = getDashboardStats();
    return (
        <Layout>
            <div className="analytics-page">
                <h1>Analytics</h1>
                {/* Top Statistics */}
                <div className="analytics-grid">
                    <div className="planner-card stat-card">
                        <small>Overall Progress</small>
                        <h3>{stats.progress}%</h3>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{
                                    width: `${stats.progress}%`
                                }}
                            />
                        </div>
                        <span>
                            {stats.completedCount} / {stats.totalDays} Days
                        </span>
                    </div>
                    <div className="planner-card stat-card">
                        <small>Current Streak</small>
                        <h3>🔥 {stats.streak}</h3>
                        <span>Keep Going!</span>
                    </div>
                    <div className="planner-card stat-card">
                        <small>Completed</small>
                        <h3>{stats.completedCount}</h3>
                        <span>Goals Finished</span>
                    </div>
                    <div className="planner-card stat-card">
                        <small>Remaining</small>
                        <h3>{stats.totalDays - stats.completedCount}</h3>
                        <span>Days Left</span>
                    </div>
                </div>
                {/* Middle Section */}
                <div className="analytics-grid">
                    <div className="planner-card">
                        <h2>Weekly Progress</h2>
                        <WeeklyProgress />
                    </div>
                    <div className="planner-card">
                        <h2>Subject Progress</h2>
                        <SubjectProgress />
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="analytics-grid">
                    <div className="planner-card">
                        <h2>Productivity</h2>
                        <p>🔥 Best Streak : {stats.streak}</p>
                        <p>✅ Completion : {stats.progress}%</p>
                        <p>🎯 Finished : {stats.completedCount}</p>
                    </div>
                    <div className="planner-card">
                        <h2>Achievements</h2>
                        <p>🥉 First Step</p>
                        <p>{stats.streak >= 7 ? "🥈 One Week" : "🔒 One Week"}</p>
                        <p>{stats.streak >= 30 ? "🥇 One Month" : "🔒 One Month"}</p>
                        <p>{stats.progress === 100 ? "🏆 Goal Master" : "🔒 Goal Master"}</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Analytics;