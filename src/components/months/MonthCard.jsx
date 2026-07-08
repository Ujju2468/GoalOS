import { useNavigate } from "react-router-dom";

function MonthCard({ month }) {
  const navigate = useNavigate();

  return (
    <div
      className="month-card"
      onClick={() =>
        navigate(`/month/${month.name.toLowerCase()}`)
      }
    >
      <h2>{month.name}</h2>

      <p>{month.completed} Days Completed</p>

      <div className="mini-progress">

        <div
          className="mini-fill"
          style={{
            width: `${month.progress}%`,
          }}
        ></div>

      </div>

      <span>{month.progress}%</span>
    </div>
  );
}

export default MonthCard;