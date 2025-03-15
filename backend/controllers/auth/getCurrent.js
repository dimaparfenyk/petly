const getCurrent = async (req, res) => {
  const { email, name, city, phone, avatarURL } = req.user;

  res.json({ email, name, city, phone, avatarURL });
};

module.exports = getCurrent;
