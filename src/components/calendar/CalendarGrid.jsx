// import january from "../../data/january";

// import DayCard from "./DayCard";

// function CalendarGrid(){

// return(

// <section className="calendar-grid">

// {

// january.map((item)=>(

// <DayCard

// key={item.day}

// item={item}

// />

// ))

// }

// </section>

// );

// }

// export default CalendarGrid;
//res 5
// //res 6
// import DayCard from "./DayCard";

// function CalendarGrid({ data }) {
//   return (
//     <section className="calendar-grid">
//       {data.length === 0 ? (
//         <div className="empty-month">
//           <h2>No Plan Added Yet</h2>

//           <p>
//             This month is waiting for your goals.
//           </p>
//         </div>
//       ) : (
//         data.map((item) => (
//           <DayCard
//             key={item.day}
//             item={item}
//           />
//         ))
//       )}
//     </section>
//   );
// }

// export default CalendarGrid;


// -----------------------
import DayCard from "./DayCard";

function CalendarGrid({ data }) {
  return (
    <section className="calendar-grid">

      {data.length === 0 ? (

        <div className="empty-month">

          <h2>No Plan Added Yet</h2>

          <p>
            This month is waiting for your goals.
          </p>

        </div>

      ) : (

        data.map((item) => (

          <DayCard
            key={item.day}
            day={item}
          />

        ))

      )}

    </section>
  );
}

export default CalendarGrid;