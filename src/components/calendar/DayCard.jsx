// // import { useNavigate } from "react-router-dom";
// // function DayCard({ item }) {
// // const navigate = useNavigate();
// // return(
// // <div
// // className="day-card"
// // onClick={()=>navigate(`/planner/${item.day}`)}
// // >
// // <h2>
// // {item.day}
// // </h2>
// // <p>
// // {item.title}
// // </p>
// // </div>
// // );
// // }
// // export default DayCard;
// //res 5


// //res 6
// import { useNavigate } from "react-router-dom";

// import {
//   Clock3,
//   BookOpen,
//   CheckCircle2,
// } from "lucide-react";

// function DayCard({ item }) {
//   const navigate = useNavigate();

//   return (
//     <div
//       className="day-card"
//       onClick={() => navigate(`/planner/${item.day}`)}
//     >
//       <h2>{item.day}</h2>

//       <h3>{item.title}</h3>

//       <div className="day-meta">

//         <span>

//           <Clock3 size={15} />

//           {item.time}

//         </span>

//         <span>

//           <CheckCircle2 size={15} />

//           {item.tasks} Tasks

//         </span>

//         <span>

//           <BookOpen size={15} />

//           {item.resources} Links

//         </span>

//       </div>
//     </div>
//   );
// }

// export default DayCard;
import { Link } from "react-router-dom";
import {
Clock3,
BookOpen,
CircleCheck,
Target
} from "lucide-react";

function DayCard({ day }) {

const progress =
Math.round((day.day / 60) * 100);

const today =
day.day === 1; // later backend

return (

<Link
to={`/planner/${day.day}`}
className={`day-card ${today ? "today-card" : ""}`}
>

<div className="day-top">

<h2>
{day.day}
</h2>

{

today &&

<span className="today-pill">
TODAY
</span>

}

</div>

<h3>

{day.topic}

</h3>

<div className="day-progress">

<div
className="day-progress-fill"
style={{
width:`${progress}%`
}}
/>

</div>

<div className="day-info">

<span>

<BookOpen size={15}/>

{day.subject}

</span>

<span>

<Target size={15}/>

Q {((day.day-1)*7)+1}
-
{((day.day-1)*7)+7}

</span>

<span>

<Clock3 size={15}/>

Week {day.week}

</span>

</div>

<div className="day-status">

<CircleCheck
size={17}
/>

Pending

</div>

</Link>

);

}

export default DayCard;