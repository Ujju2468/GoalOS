import roadmapData from "../data/roadmapData";
import {
  getCompletedDays,
  getCurrentStreak
} from "./storage";
export function getDashboardStats() {

    const completed = getCompletedDays();

    const totalDays = roadmapData.length;

    const completedCount = completed.length;

    const progress =
        Math.round((completedCount /     totalDays) * 100);

    return {
    completed,
    totalDays,
    completedCount,
    progress,
    streak: getCurrentStreak()
};

}

export function getMonthProgress(month) {

    const completed = getCompletedDays();

    const monthDays =
    roadmapData.filter(
        day =>
            day.month.toLowerCase() ===
            month.toLowerCase()
    );

    const completedInMonth =
        monthDays.filter(
            day => completed.includes(day.day)
        ).length;

    const progress =
        monthDays.length
            ? Math.round(
                completedInMonth /
                monthDays.length *
                100
              )
            : 0;

    return {

        completed: completedInMonth,

        total: monthDays.length,

        progress

    };

}