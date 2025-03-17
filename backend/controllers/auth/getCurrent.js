const getCurrent = async (req, res) => {
  const { email, name, city, phone, avatarURL } = req.user;

  res.json({ name, email, phone, city, avatarURL });
};

module.exports = getCurrent;
