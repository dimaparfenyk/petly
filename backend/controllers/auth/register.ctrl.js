const { User } = require("../../models/user");

const register = async (req, res) => {
  const data = req.body;
  const { name, email, password, city, phone } = data;

  if (!name || !email || !password || !city || !phone) {
    return res
      .status(400)
      .json({ success: false, message: "Fill in all required fields." });
  }

  try {
    const result = await User.create({ ...data });
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error("error in post user method ");
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = register;
