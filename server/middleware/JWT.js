const { sign, verify } = require("jsonwebtoken");

const createTokens = (email, role, status) => {
  const accessToken = sign(
    { email: email, role: role ,status: status},
    "dh51805028"
  );

  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  if (!accessToken)
    return res.json({ error: "User not Authenticated!" });

  try {
    const validToken = verify(accessToken, "dh51805028");
    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { createTokens, validateToken };