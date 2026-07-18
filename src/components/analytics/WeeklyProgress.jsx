import roadmapData from "../../data/roadmapData";
import { getCompletedDays } from "../../utils/storage";

function WeeklyProgress() {
    const completed = getCompletedDays();
    const weeks = [...new Set(
        roadmapData.map(day => day.week)
    )];
    return (
        <div>
            {
                weeks.map(week => {
                    const weekDays =
                        roadmapData.filter(
                            d => d.week === week
                        );
                    const done =
                        weekDays.filter(
                            d => completed.includes(d.day)
                        ).length;
                    const progress =
                        Math.round(
                            done /
                            weekDays.length *
                            100
                        ) || 0;
                    return (
                        <div
                            key={week}
                            className="subject-row"
                        >
                            <span>
                                Week {week}
                            </span>
                            <div className="subject-bar">
                                <div
                                    className="subject-fill"
                                    style={{
                                        width:`${progress}%`
                                    }}
                                />
                            </div>
                            <strong>
                                {progress}%
                            </strong>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default WeeklyProgress;