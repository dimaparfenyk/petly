import { useState } from "react";

const useFilter = () => {
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (e) => {
    const normalizedStr = e.target.value.toLowerCase().trim();
    setFilterValue(normalizedStr);
  };

  return [filterValue, handleFilterChange];
};

export default useFilter;
