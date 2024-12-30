import { useParams } from "react-router-dom";

const PetDetails = () => {
  const { petId } = useParams();
  return <div>Pet Details: {petId}</div>;
};

export default PetDetails;
