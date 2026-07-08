import { useNavigate } from "react-router-dom";

function DayCard({ item }) {

const navigate = useNavigate();

return(

<div
className="day-card"

onClick={()=>navigate(`/planner/${item.day}`)}

>

<h2>

{item.day}

</h2>

<p>

{item.title}

</p>

</div>

);

}

export default DayCard;