// import { useNavigate } from "react-router-dom";
// function DayCard({ item }) {
// const navigate = useNavigate();
// return(
// <div
// className="day-card"
// onClick={()=>navigate(`/planner/${item.day}`)}
// >
// <h2>
// {item.day}
// </h2>
// <p>
// {item.title}
// </p>
// </div>
// );
// }
// export default DayCard;
//res 5


//res 6
import { useNavigate } from "react-router-dom";

import {
  Clock3,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

function DayCard({ item }) {
  const navigate = useNavigate();

  return (
    <div
      className="day-card"
      onClick={() => navigate(`/planner/${item.day}`)}
    >
      <h2>{item.day}</h2>

      <h3>{item.title}</h3>

      <div className="day-meta">

        <span>

          <Clock3 size={15} />

          {item.time}

        </span>

        <span>

          <CheckCircle2 size={15} />

          {item.tasks} Tasks

        </span>

        <span>

          <BookOpen size={15} />

          {item.resources} Links

        </span>

      </div>
    </div>
  );
}

export default DayCard;