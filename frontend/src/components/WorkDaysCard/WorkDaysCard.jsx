import css from "./_WorkDaysCard.module.scss";

const WorkDaysCard = ({ days }) => {
  const weekDays = ["MN", "TU", "WE", "TH", "FR", "ST", "SU"];

  return (
    days.length > 0 && (
      <ul className={css.days_list}>
        {days.map(({ from, to, isOpen, _id }, index) => (
          <li key={_id} className={css.day_item}>
            <p className={css.week_day}>{weekDays[index]}</p>
            <p className={css.work_time_text}>
              {isOpen ? `${from} - ${to} ` : "Closed"}
            </p>
          </li>
        ))}
      </ul>
    )
  );
};

export default WorkDaysCard;
