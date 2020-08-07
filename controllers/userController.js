const User = require("../models/user");

exports.index = async (req, res, next) => {
  await User.find()
    .sort({ _id: -1 })
    .exec((err, data) => {
      res.render("user", { users: data });
    });
};
