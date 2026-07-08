import MonthCard from "./MonthCard";
import months from "../../data/months";

function MonthsGrid() {
  return (
    <section className="months-grid">
      {months.map((month) => (
        <MonthCard
          key={month.id}
          month={month}
        />
      ))}
    </section>
  );
}

export default MonthsGrid;