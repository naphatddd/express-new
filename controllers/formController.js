const Form = require("../models/user");

exports.index = async (req, res, next) => {
  res.render("form");
};
exports.insert = async (req, res, next) => {
  const { name, email, password } = req.body;

  const doc = new Form();
  doc.name = name;
  doc.email = email;
  doc.password = await doc.encryptPassword(password);

  await doc.save((err, data) => {
    if (err) console.log(err);
    res.redirect("/users");
  });
  console.log(doc);
};
