import { useMemo } from "react";
import { useParams } from "react-router-dom";

import Layout from "../components/layout/Layout";

import roadmapData from "../data/roadmapData";
import { roadmapConfig } from "../data/roadmapConfig";

function DayPlanner() {

    const { day } = useParams();

    const currentDay = Number(day);

    const today = useMemo(() => {

        return roadmapData.find(
            (item) => item.day === currentDay
        );

    }, [currentDay]);

    if (!today) {

        return (

            <Layout>

                <div className="planner">

                    <div className="planner-card">

                        <h1>Day Not Found</h1>

                        <p>

                            This day hasn't been created yet.

                        </p>

                    </div>

                </div>

            </Layout>

        );

    }

    const startQuestion =
        ((today.day - 1) * roadmapConfig.dsa.questionsPerDay) + 1;

    const endQuestion =
        startQuestion +
        roadmapConfig.dsa.questionsPerDay -
        1;

    const developmentStarted =
        today.day >= roadmapConfig.development.startsOnDay;

    return (

        <Layout>

            <div className="planner">

                <section className="planner-header">

                    <div>

                        <h1>

                            Day {today.day}

                        </h1>

                        <p>

                            Week {today.week}

                        </p>

                    </div>

                    <div className="planner-badge">

                        {today.subject}

                    </div>

                </section>

                <section className="planner-card">

                    <h2>

                        Today's Focus

                    </h2>

                    <div className="planner-grid">

                        <div>

                            <h3>

                                Topic

                            </h3>

                            <p>

                                {today.topic}

                            </p>

                        </div>

                        <div>

                            <h3>

                                Milestone

                            </h3>

                            <p>

                                {today.milestone}

                            </p>

                        </div>

                    </div>

                </section>

                <section className="planner-card">

                    <h2>

                        Daily Checklist

                    </h2>

                    <div className="task">

                        ⬜ Solve DSA Questions

                        <strong>

                            {startQuestion} - {endQuestion}

                        </strong>

                    </div>

                    <div className="task">

                        ⬜ Revision Questions

                        <strong>

                            {roadmapConfig.dsa.revisionPerDay}

                        </strong>

                    </div>

                    <div className="task">

                        ⬜ GitHub Pushes

                        <strong>

                            {roadmapConfig.githubPushes.minimum}

                            {" - "}

                            {roadmapConfig.githubPushes.target}

                        </strong>

                    </div>

                    <div className="task">

                        ⬜ Core Subject

                        <strong>

                            {today.subject}

                        </strong>

                    </div>

                    {

                        developmentStarted && (

                            <div className="task">

                                ⬜ Development

                                <strong>

                                    {today.development || "Coding Session"}

                                </strong>

                            </div>

                        )

                    }

                </section>

                <section className="planner-card">

                    <h2>

                        Daily Timeline

                    </h2>

                    {

                        roadmapConfig.timetable.map(

                            (item) => (

                                <div
                                    key={item.time}
                                    className="timeline-row"
                                >

                                    <span>

                                        {item.time}

                                    </span>

                                    <strong>

                                        {item.title}

                                    </strong>

                                </div>

                            )

                        )

                    }

                </section>

                <section className="planner-card">

                    <h2>

                        Notes

                    </h2>

                    <textarea

                        rows={10}

                        placeholder="Write today's learnings..."

                    />

                </section>

            </div>

        </Layout>

    );

}

export default DayPlanner;