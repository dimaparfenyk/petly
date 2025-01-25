import MoonLoader from "react-spinners/MoonLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

const Spinner = ({ loading }) => {
  return (
    <MoonLoader
      loading={loading}
      cssOverride={override}
      color="#ff6101"
      size={44}
      aria-label="Loading Spinner"
      data-testid="loader"
      speedMultiplier="0.75"
    />
  );
};

export default Spinner;
