// import Layout from "../components/layout/Layout";
// import CalendarGrid from "../components/calendar/CalendarGrid";
// import { ArrowLeft } from "lucide-react";
// import { useNavigate,useParams } from "react-router-dom";
// function Month(){
// const navigate=useNavigate();
// const {month}=useParams();
// return(
// <Layout>
// <div className="month-header">
// <button
// className="back-btn"
// onClick={()=>navigate("/dashboard")}
// >
// <ArrowLeft/>
// Back
// </button>
// <h1>
// {month.charAt(0).toUpperCase()+month.slice(1)}
// </h1>
// </div>
// <CalendarGrid/>
// </Layout>
// );
// }
// export default Month;
//res 5


//res 6
import Layout from "../components/layout/Layout";
import CalendarGrid from "../components/calendar/CalendarGrid";
import calendarData from "../data/calendarData";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

function Month() {
  const navigate = useNavigate();

  const { month } = useParams();

  const data = calendarData[month] || [];

  return (
    <Layout>
      <div className="month-header">
        <button
          className="back-btn"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <h1>
          {month.charAt(0).toUpperCase() + month.slice(1)}
        </h1>
      </div>

      <CalendarGrid data={data}/>
    </Layout>
  );
}

export default Month;
