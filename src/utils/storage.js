// // ======================================================
// // GoalOS Storage Utility
// // Handles all LocalStorage operations
// // ======================================================

// const STORAGE_KEY = "goalos-data";

// // -------------------------------
// // Default State
// // -------------------------------

// const defaultData = {

//   completedDays: [],

//   notes: {},

//   settings: {},

// };

// // -------------------------------
// // Load
// // -------------------------------

// export function loadData() {

//   const data = localStorage.getItem(STORAGE_KEY);

//   if (!data) {

//     return defaultData;

//   }

//   return JSON.parse(data);

// }

// // -------------------------------
// // Save
// // -------------------------------

// export function saveData(data) {

//   localStorage.setItem(

//     STORAGE_KEY,

//     JSON.stringify(data)

//   );

// }

// // -------------------------------
// // Completed Days
// // -------------------------------

// export function getCompletedDays() {

//   return loadData().completedDays;

// }

// export function completeDay(day) {

//   const data = loadData();

//   if (!data.completedDays.includes(day)) {

//     data.completedDays.push(day);

//   }

//   saveData(data);

// }

// // -------------------------------
// // Notes
// // -------------------------------

// export function saveNote(day, note) {

//   const data = loadData();

//   data.notes[day] = note;

//   saveData(data);

// }

// export function getNote(day) {

//   return loadData().notes[day] || "";

// }

// // -------------------------------
// // Reset
// // -------------------------------

// export function clearGoalOS() {

//   localStorage.removeItem(STORAGE_KEY);

// }

// ==========================================
// GoalOS Storage Utilities
// ==========================================

const COMPLETED_KEY = "goalos_completed_days";
const NOTES_KEY = "goalos_notes";

// --------------------
// Completed Days
// --------------------

export function getCompletedDays() {

    const data =
        localStorage.getItem(COMPLETED_KEY);

    return data ? JSON.parse(data) : [];

}

export function completeDay(day) {

    // const completed =
    //     getCompletedDays();

    // if (!completed.includes(day)) {

    //     completed.push(day);

    //     localStorage.setItem(
    //         COMPLETED_KEY,
    //         JSON.stringify(completed)
    //     );

    // }


    console.log("completeDay called", day);

    const completed =
        getCompletedDays();

    if (!completed.includes(day)) {

        completed.push(day);

        localStorage.setItem(
            COMPLETED_KEY,
            JSON.stringify(completed)
        );

    }

    console.log(localStorage);


}

export function unCompleteDay(day) {

    const updated =
        getCompletedDays().filter(
            d => d !== day
        );

    localStorage.setItem(
        COMPLETED_KEY,
        JSON.stringify(updated)
    );

}

export function isCompleted(day) {

    return getCompletedDays().includes(day);

}

// --------------------
// Notes
// --------------------

export function getNotes(day) {

    const notes =
        JSON.parse(
            localStorage.getItem(NOTES_KEY)
        ) || {};

    return notes[day] || "";

}

export function saveNotes(day, text) {

    const notes =
        JSON.parse(
            localStorage.getItem(NOTES_KEY)
        ) || {};

    notes[day] = text;

    localStorage.setItem(
        NOTES_KEY,
        JSON.stringify(notes)
    );

}

export function clearStorage() {

    localStorage.removeItem(COMPLETED_KEY);

    localStorage.removeItem(NOTES_KEY);

}