import Layout from "../components/layout/Layout";
import GoalHero from "../components/dashboard/GoalHero";
import StatsCard from "../components/dashboard/StatsCard";
import TodayMission from "../components/dashboard/TodayMission";
import MonthsGrid from "../components/months/MonthsGrid";

import motivation from "../data/motivation";

import roadmapData from "../data/roadmapData";

import {
getCompletedDays
} from "../utils/storage";

function Dashboard(){

const completedDays=
getCompletedDays();

const completed=
completedDays.length;

const total=
roadmapData.length;

const remaining=
total-completed;

const progress=
Math.round(
(completed/total)*100
)||0;

const currentDay=
completed+1;

return(

<Layout>

<GoalHero/>

<MonthsGrid/>

<section className="stats-grid">

<StatsCard
title="Completed Days"
value={completed}
/>

<StatsCard
title="Current Day"
value={currentDay}
/>

<StatsCard
title="Remaining"
value={remaining}
/>

<StatsCard
title="Progress"
value={`${progress}%`}
/>

</section>

<TodayMission
quote={
motivation[
Math.floor(
Math.random()*motivation.length
)
]
}
/>

</Layout>

);

}

export default Dashboard;