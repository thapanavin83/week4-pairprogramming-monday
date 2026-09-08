const auth = (req, res, next) => {
  if (req.query.admin === "true") {
    next();
  } else {
    res.status(401).json({
      message: "You are not authorized",
    });
  }
};

module.exports = auth;
