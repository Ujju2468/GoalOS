import january from "../../data/january";

import DayCard from "./DayCard";

function CalendarGrid(){

return(

<section className="calendar-grid">

{

january.map((item)=>(

<DayCard

key={item.day}

item={item}

/>

))

}

</section>

);

}

export default CalendarGrid;