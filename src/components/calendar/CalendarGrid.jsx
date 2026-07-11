import { getMonthDays } from "../../utils/roadmapHelpers";
import { useParams } from "react-router-dom";
import DayCard from "./DayCard";

function CalendarGrid() {

  const { month } = useParams();

  const data = getMonthDays(month);

  if(data.length===0){

    return(

      <div className="empty-month">

        <h2>No roadmap available.</h2>

      </div>

    );

  }

  return(

    <section className="calendar-grid">

      {

      data.map(day=>(

        <DayCard

          key={day.day}

          day={day}

        />

      ))

      }

    </section>

  );

}

export default CalendarGrid;