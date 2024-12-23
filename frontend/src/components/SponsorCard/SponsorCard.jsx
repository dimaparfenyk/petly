import { useState } from "react";
import WorkDaysCard from "../WorkDaysCard";
import css from "./_SponsorCard.module.scss";
import moment from "moment";

const SponsorCard = ({ sponsor = {} }) => {
  const [isWorkDaysBoxOpen, setIsWorkDaysBoxOpen] = useState(false);

  const { url, address, addressUrl, title, email, phone, imageUrl, workDays } =
    sponsor;

  const curDay = moment().weekday();
  const markup = (propsData, defaultStr = "_ _ _ _ _ _ _ _ _ _ _ _") => {
    return propsData ? propsData : defaultStr;
  };

  const getWorkDayText = () => {
    if (!workDays || !workDays[curDay]) return "__ : __";
    return workDays[curDay].isOpen
      ? `${workDays[curDay].from} - ${workDays[curDay].to}`
      : "Closed";
  };

  const onMouseLeave = () => {
    setTimeout(() => {
      setIsWorkDaysBoxOpen(false);
    }, 500);
  };

  return (
    <li className={css.sponsor_item}>
      <article className={css.article}>
        <h2 className={css.card_title}>
          <a href={url} className={css.card_link}>
            {title}
          </a>
        </h2>
        <div className={css.meta_box}>
          <div className={css.meta_img}>
            <img
              src={markup(imageUrl, "/default-sponsor.jpg")}
              alt="logo"
              className={css.logo_img}
            />
          </div>
          <div className={css.meta_info}>
            <div
              className={`${css.meta_block} ${
                workDays?.length && isWorkDaysBoxOpen ? css.active : ""
              }`}
              onClick={() => {
                setIsWorkDaysBoxOpen((state) => !state);
              }}
              onMouseLeave={() => {
                onMouseLeave();
              }}
            >
              <p className={css.meta_text}>Time:</p>
              <p className={css.meta_text}>{getWorkDayText()}</p>
              {workDays && isWorkDaysBoxOpen && (
                <WorkDaysCard days={workDays} />
              )}
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Address:</p>
              <p className={css.meta_text}>
                {addressUrl ? (
                  <a href={addressUrl} target="_blank">
                    {address}
                  </a>
                ) : (
                  <>{markup(address)}</>
                )}
              </p>
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Email:</p>
              <p className={css.meta_text}>{markup(email)}</p>
            </div>
            <div className={css.meta_block}>
              <p className={css.meta_text}>Phone:</p>
              <p className={css.meta_text}>{markup(phone)}</p>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};

export default SponsorCard;
