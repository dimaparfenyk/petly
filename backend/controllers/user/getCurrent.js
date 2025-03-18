const getCurrent = async (req, res) => {
  const { email, name, city, phone, avatarURL, myPets } = req.user;

  res.json({ name, email, phone, city, avatarURL, myPets });
};

module.exports = getCurrent;
