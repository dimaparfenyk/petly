import SponsorCard from "../SponsorCard/";
import css from "./_SponsorCardSet.module.scss";

const SponsorCardSet = ({ sponsors }) => {
  return (
    <ul className={css.sponsors_list}>
      {sponsors.map((sponsor) => (
        <SponsorCard key={sponsor._id} sponsor={sponsor} />
      ))}
    </ul>
  );
};

export default SponsorCardSet;
