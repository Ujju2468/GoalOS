import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <div className="welcome-card">
        <h1>GoalOS</h1>

        <h2>Welcome to Your Journey</h2>

        <p>
          Plan every day, stay consistent, and achieve your long-term goals.
        </p>

        <button onClick={() => navigate("/dashboard")}>
          Begin Journey
        </button>
      </div>
    </div>
  );
}

export default Welcome;