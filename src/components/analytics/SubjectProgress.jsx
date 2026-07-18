import roadmapData from "../../data/roadmapData";
import { getCompletedDays } from "../../utils/storage";

function SubjectProgress() {

    const completed = getCompletedDays();

    const subjects = [...new Set(
        roadmapData.map(day => day.subject)
    )];

    return (

        <div>

            {

                subjects.map(subject => {

                    const total =
                        roadmapData.filter(
                            d => d.subject === subject
                        ).length;

                    const done =
                        roadmapData.filter(
                            d =>
                                d.subject === subject &&
                                completed.includes(d.day)
                        ).length;

                    const progress =
                        total
                            ? Math.round(done / total * 100)
                            : 0;

                    return (

                        <div
                            key={subject}
                            className="subject-row"
                        >

                            <span>

                                {subject}

                            </span>

                            <div className="subject-bar">

                                <div

                                    className="subject-fill"

                                    style={{
                                        width: `${progress}%`
                                    }}

                                />

                            </div>

                            <strong>

                                {progress}%

                            </strong>

                        </div>

                    );

                })

            }

        </div>

    );

}

export default SubjectProgress;