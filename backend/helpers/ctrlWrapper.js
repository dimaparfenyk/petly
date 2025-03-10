const ctrlWrapper = (ctrl) => {
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res);
    } catch (error) {
      console.log("mistake in catch ctrlWrapper");
      next(error);
    }
  };
  return func;
};

module.exports = ctrlWrapper;
