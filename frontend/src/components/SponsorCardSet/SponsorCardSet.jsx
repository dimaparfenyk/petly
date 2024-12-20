import SponsorCard from "../SponsorCard/";

const SponsorCardSet = ({ sponsors }) => {
  return (
    <ul>
      {sponsors.map((sponsor) => (
        <SponsorCard key={sponsor._id} sponsor={sponsor} />
      ))}
    </ul>
  );
};

export default SponsorCardSet;
