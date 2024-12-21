import css from "./_SponsorCard.module.scss";

const SponsorCard = ({ sponsor = {} }) => {
  const { url, address, addressUrl, title, email, phone, imageUrl, workDays } =
    sponsor;

  const placeholderStr = "_ _ _ _ _ _ _ _ _ _ _ _";

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
              src={imageUrl ? imageUrl : "/default-sponsor.jpg"}
              alt="logo"
              className={css.logo_img}
            />
          </div>
          <div className={css.meta_info}>
            <div className={css.meta_block}>
              <p>Time:</p>
              <div>
                {workDays
                  ? `${workDays[0]?.from ?? "_ _"}- ${workDays[0]?.to ?? "_ _"}`
                  : placeholderStr}
              </div>
            </div>
            <div className={css.meta_block}>
              <p>Address:</p>
              <p className={css.meta_text}>
                {addressUrl ? (
                  <a href={addressUrl} target="_blank">
                    {address}
                  </a>
                ) : (
                  <>{address ? address : placeholderStr}</>
                )}
              </p>
            </div>
            <div className={css.meta_block}>
              <p>Email:</p>
              <p className={css.meta_text}>{email ? email : placeholderStr}</p>
            </div>
            <div className={css.meta_block}>
              <p>Phone:</p>
              <p className={css.meta_text}>{phone ? phone : placeholderStr}</p>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
};

export default SponsorCard;
