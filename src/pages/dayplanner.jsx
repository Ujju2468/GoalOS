// import { useMemo } from "react";
// import { useParams } from "react-router-dom";
// import Layout from "../components/layout/Layout";
// import roadmapData from "../data/roadmapData";
// import { roadmapConfig } from "../data/roadmapConfig";

// function DayPlanner() {

//   const { day } = useParams();
//   const currentDay = Number(day);
//   const today = useMemo(() => {
//     return roadmapData.find(
//       (item) => item.day === currentDay
//     );
//   }, [currentDay]);
//   if (!today) {
//     return (
//       <Layout>
//         <div className="planner">
//           <div className="planner-card">
//             <h1>Day Not Found</h1>
//             <p>
//               This day hasn't been created yet.
//             </p>
//           </div>
//         </div>
//       </Layout>
//     );
//   }
//   const startQuestion =
//     ((today.day - 1) * roadmapConfig.dsa.questionsPerDay) + 1;

//   const endQuestion =
//     startQuestion +
//     roadmapConfig.dsa.questionsPerDay -
//     1;

//   const developmentStarted =
//     today.day >= roadmapConfig.development.startsOnDay;
//   const progress =
//     Math.round((today.day / roadmapConfig.duration) * 100);

//   const daysRemaining =
//     roadmapConfig.duration - today.day;

//   const weekProgress =
//     `${today.day}/${roadmapConfig.duration}`;

//   return (

//     <Layout>

//       <div className="planner">

//         <section className="planner-header">

//           <div>

//             <h1>

//               Day {today.day}

//             </h1>

//             <p>

//               Week {today.week}

//             </p>

//           </div>

//           <div className="planner-badge">

//             {today.subject}

//           </div>

//         </section>

//         <section className="planner-card">

//           <h2>

//             Today's Focus

//           </h2>

//           <div className="planner-grid">

//             <div>

//               <h3>

//                 Topic

//               </h3>

//               <p>

//                 {today.topic}

//               </p>

//             </div>

//             <div>

//               <h3>

//                 Milestone

//               </h3>

//               <p>

//                 {today.milestone}

//               </p>

//             </div>

//           </div>

//         </section>

//         <section className="planner-card">

//           <h2>

//             Daily Checklist

//           </h2>

//           <div className="task">

//             ⬜ Solve DSA Questions

//             <strong>

//               {startQuestion} - {endQuestion}

//             </strong>

//           </div>

//           <div className="task">

//             ⬜ Revision Questions

//             <strong>

//               {roadmapConfig.dsa.revisionPerDay}

//             </strong>

//           </div>

//           <div className="task">

//             ⬜ GitHub Pushes

//             <strong>

//               {roadmapConfig.githubPushes.minimum}

//               {" - "}

//               {roadmapConfig.githubPushes.target}

//             </strong>

//           </div>

//           <div className="task">

//             ⬜ Core Subject

//             <strong>

//               {today.subject}

//             </strong>

//           </div>

//           {

//             developmentStarted && (

//               <div className="task">

//                 ⬜ Development

//                 <strong>

//                   {today.development || "Coding Session"}

//                 </strong>

//               </div>

//             )

//           }

//         </section>

//         <section className="planner-card">

//           <h2>

//             Daily Timeline

//           </h2>

//           {

//             roadmapConfig.timetable.map(

//               (item) => (

//                 <div
//                   key={item.time}
//                   className="timeline-row"
//                 >

//                   <span>

//                     {item.time}

//                   </span>

//                   <strong>

//                     {item.title}

//                   </strong>

//                 </div>

//               )

//             )

//           }

//         </section>

//         <section className="planner-card">

//           <h2>

//             Notes

//           </h2>

//           <textarea

//             rows={10}

//             placeholder="Write today's learnings..."

//           />

//         </section>

//       </div>

//     </Layout>

//   );

// }

// export default DayPlanner;


// --------------------------------------------res 7 part 3-------------------------
import { useMemo, useState, useEffect } from "react";
import {
  useParams,
  useNavigate,
  Link
} from "react-router-dom";
import Layout from "../components/layout/Layout";

import {
  getDay,
  getQuestionRange,
  getProgress,
  getRemainingDays,
  isDevelopmentStarted,
  getPreviousDay,
  getNextDay
} from "../utils/roadmapHelpers";

import { roadmapConfig } from "../data/roadmapConfig";
import {
  completeDay,
  isCompleted,
  getNotes,
  saveNotes
} from "../utils/storage";



function DayPlanner() {
  const { day } = useParams();

  const currentDay = Number(day);

  const navigate = useNavigate();

  const today = useMemo(() => getDay(currentDay), [currentDay]);

  

  if (!today) {
    return (
      <Layout>
        <div className="planner">
          <div className="planner-card">
            <h1>Day Not Found</h1>
            <p>This day hasn't been created yet.</p>
          </div>
        </div>
      </Layout>
    );
  }

  const questionRange =
    getQuestionRange(today.day);

  const progress =
    getProgress(today.day);

  const daysRemaining =
    getRemainingDays(today.day);

  const developmentStarted =
    isDevelopmentStarted(today.day);

  const previousDay =
    getPreviousDay(today.day);

  const nextDay =
    getNextDay(today.day);

  const [notes, setNotes] = useState("");

  const [completed, setCompleted] =
    useState(false);

    useEffect(() => {
  if (!today) return;

  setCompleted(isCompleted(today.day));
  setNotes(getNotes(today.day));
}, [today]);

useEffect(() => {
  if (!today) return;

  saveNotes(today.day, notes);
}, [notes, today]);
  return (
    <Layout>
      <div className="planner">

        <div className="planner-topbar">

          <Link
            to="/month/january"
            className="back-btn"
          >
            ← Back to January
          </Link>

        </div>


        {/* ================= HEADER ================= */}

        <section className="planner-header">
          <div>
            <h1>Day {today.day}</h1>

            <p>
              Week {today.week} • {today.subject}
            </p>
          </div>

          <div className="planner-badge">
            {progress}% Complete
          </div>
        </section>

        {/* ================= OVERVIEW ================= */}

        <section className="planner-overview">
          <div className="overview-card">
            <h3>Progress</h3>

            <h2>{progress}%</h2>

            <p>
              Day {today.day} of {roadmapConfig.duration}
            </p>
          </div>

          <div className="overview-card">
            <h3>Remaining</h3>

            <h2>{daysRemaining}</h2>

            <p>Days Left</p>
          </div>

          <div className="overview-card">
            <h3>DSA Today</h3>

            <h2>
              {questionRange.start}-{questionRange.end}
            </h2>

            <p>{roadmapConfig.dsa.sheet}</p>
          </div>

          <div className="overview-card">
            <h3>GitHub</h3>

            <h2>
              {roadmapConfig.githubPushes.minimum} -{" "}
              {roadmapConfig.githubPushes.target}
            </h2>

            <p>Daily Push Goal</p>
          </div>
        </section>

        {/* ================= TODAY'S FOCUS ================= */}

        <section className="planner-card">
          <h2>Today's Focus</h2>

          <div className="planner-grid">
            <div>
              <h3>Subject</h3>

              <p>{today.subject}</p>
            </div>

            <div>
              <h3>Topic</h3>

              <p>{today.topic}</p>
            </div>

            <div>
              <h3>Milestone</h3>

              <p>{today.milestone}</p>
            </div>

            <div>
              <h3>Development</h3>

              <p>
                {developmentStarted
                  ? today.development || "Coding Session"
                  : "Starts on Day 31"}
              </p>
            </div>
          </div>
        </section>

        {/* ================= CHECKLIST ================= */}

        <section className="planner-card">
          <h2>Today's Checklist</h2>

          <div className="task">
            <span>✅ Solve DSA Questions</span>

            <strong>
              {questionRange.start} - {questionRange.end}
            </strong>
          </div>

          <div className="task">
            <span>✅ Revision Questions</span>

            <strong>
              {roadmapConfig.dsa.revisionPerDay}
            </strong>
          </div>

          <div className="task">
            <span>✅ GitHub Pushes</span>

            <strong>
              {roadmapConfig.githubPushes.minimum} -{" "}
              {roadmapConfig.githubPushes.target}
            </strong>
          </div>

          <div className="task">
            <span>✅ Core Subject</span>

            <strong>{today.subject}</strong>
          </div>

          {developmentStarted && (
            <div className="task">
              <span>✅ Development</span>

              <strong>
                {today.development || "Coding Session"}
              </strong>
            </div>
          )}
        </section>

        {/* ================= TIMELINE ================= */}

        <section className="planner-card">
          <h2>Daily Timeline</h2>

          {roadmapConfig.timetable.map((item) => (
            <div
              key={item.time}
              className="timeline-row"
            >
              <span>{item.time}</span>

              <strong>{item.title}</strong>
            </div>
          ))}
        </section>

        {/*New section res 9*/}

        <section className="planner-navigation">
          <button
            disabled={!previousDay}
            onClick={() =>
              previousDay &&
              navigate(`/planner/${previousDay.day}`)
            }
          >
            ← Previous Day
          </button>
          <button
            disabled={!nextDay}
            onClick={() =>
              nextDay &&
              navigate(`/planner/${nextDay.day}`)
            }
          >
            Next Day →
          </button>
        </section>


        <section className="planner-card">

          <h2>Daily Progress</h2>

          <button
            className="complete-btn"
            disabled={completed}
            onClick={() => {

              completeDay(today.day);

              setCompleted(true);

            }}
          >

            {
              completed
                ? "✅ Completed"
                : "Mark Day Complete"
            }

          </button>

        </section>


        {/* ================= NOTES ================= */}

        <section className="planner-card">
          <h2>Today's Notes</h2>

          <textarea
            rows={10}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write today's learnings, doubts, interview questions..."
          />
        </section>
      </div>
    </Layout>
  );
}

export default DayPlanner;