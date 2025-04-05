const handleNext = async (validateForm, setTouched, setStep) => {
  const validationErrors = await validateForm();

  if (Object.keys(validationErrors).length > 0) {
    setTouched(
      Object.keys(validationErrors).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {})
    );
    return;
  }

  setStep(2);
};

export default handleNext;
