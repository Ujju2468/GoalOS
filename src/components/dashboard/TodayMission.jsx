import { CheckCircle2 } from "lucide-react";

function TodayMission() {

const tasks=[

"7 New DSA Questions",

"3 Revision Problems",

"Computer Networks",

"3 GitHub Pushes",

"Development Practice"

];

return(

<section className="mission">

<h2>

Today's Mission

</h2>

<p>

Complete today's roadmap and continue your streak.

</p>

<div className="mission-list">

{

tasks.map(task=>(

<div
key={task}
className="mission-item"
>

<CheckCircle2
size={18}
/>

<span>

{task}

</span>

</div>

))

}

</div>

<button>

Mark Day Complete

</button>

</section>

);

}

export default TodayMission;