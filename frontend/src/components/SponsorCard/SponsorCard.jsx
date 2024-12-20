const SponsorCard = ({ sponsor }) => {
  const { url, address, addressUrl, title, email, phone, imageUrl, workDays } =
    sponsor;

  return (
    <li>
      <article>
        <h2>
          <a href={url}>{title}</a>
        </h2>
        <div>
          <img src={imageUrl ? imageUrl : "/default-sponsor.jpg"}></img>
        </div>
        <div>
          <p>
            Time:{" "}
            {workDays
              ? `${workDays[0]?.from} - ${workDays[0]?.to}`
              : "_ _ _ _ _ _"}
          </p>
        </div>
        <div>
          <p>
            Address:
            {addressUrl ? (
              <a href={addressUrl} target="_blank">
                {address}
              </a>
            ) : (
              <>{address ? address : "_ _ _ _ _ _"}</>
            )}
          </p>
        </div>
        <div>
          <p>Email:{email ? email : "_ _ _ _ _ _"}</p>
        </div>
        <div>
          <p>Phone:{phone ? phone : "_ _ _ _ _ _"}</p>
        </div>
      </article>
    </li>
  );
};

export default SponsorCard;
