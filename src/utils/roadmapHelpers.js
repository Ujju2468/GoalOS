// =======================================================
// GoalOS Roadmap Helpers
// Central helper functions used across the application.
// =======================================================

import roadmapData from "../data/roadmapData";
import { roadmapConfig } from "../data/roadmapConfig";

/**
 * Returns all roadmap data.
 */
export function getAllDays() {
  return roadmapData;
}

/**
 * Returns a single day.
 */
export function getDay(dayNumber) {
  return roadmapData.find(
    (day) => day.day === Number(dayNumber)
  );
}

/**
 * Returns all days for a month.
 */
// export function getMonthDays(month) {
//   return roadmapData.filter(
//     (day) =>
//       day.month.toLowerCase() ===
//       month.toLowerCase()
//   );
// }
export function getMonthDays(month) {

  console.log("Route month:", month);

  console.log("Roadmap:", roadmapData);

  return roadmapData.filter((day) => {

    console.log(day);

    return (
      day.month &&
      day.month.toLowerCase() === month.toLowerCase()
    );

  });

}

/**
 * Returns previous day.
 */
export function getPreviousDay(dayNumber) {
  return roadmapData.find(
    (day) => day.day === Number(dayNumber) - 1
  );
}

/**
 * Returns next day.
 */
export function getNextDay(dayNumber) {
  return roadmapData.find(
    (day) => day.day === Number(dayNumber) + 1
  );
}

/**
 * Returns DSA question range.
 */
export function getQuestionRange(dayNumber) {

  const start =
    ((dayNumber - 1) *
      roadmapConfig.dsa.questionsPerDay) + 1;

  const end =
    start +
    roadmapConfig.dsa.questionsPerDay -
    1;

  return {
    start,
    end
  };

}

/**
 * Returns completion percentage.
 */
export function getProgress(dayNumber) {

  return Math.round(
    (dayNumber / roadmapConfig.duration) * 100
  );

}

/**
 * Remaining days.
 */
export function getRemainingDays(dayNumber) {

  return (
    roadmapConfig.duration -
    dayNumber
  );

}

/**
 * Current week.
 */
export function getWeek(dayNumber) {

  return Math.ceil(dayNumber / 7);

}

/**
 * Development phase started?
 */
export function isDevelopmentStarted(dayNumber) {

  return (
    dayNumber >=
    roadmapConfig.development.startsOnDay
  );

}