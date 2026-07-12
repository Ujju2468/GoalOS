import { useNavigate } from "react-router-dom";
import { getMonthProgress } from "../../utils/dashboardHelpers";

function MonthCard({ month }) {

  const navigate = useNavigate();

  const progress =
    getMonthProgress(month.name);

  return (

    <div
      className="month-card"
      onClick={() =>
        navigate(`/month/${month.name.toLowerCase()}`)
      }
    >

      <h2>{month.name}</h2>

      <p>
        {progress.completed} Days Completed
      </p>

      <div className="mini-progress">

        <div
          className="mini-fill"
          style={{
            width: `${progress.progress}%`
          }}
        />

      </div>

      <span>{progress.progress}%</span>

    </div>

  );

}

export default MonthCard;