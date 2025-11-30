const adminAuth = (req, res, next) => {
  console.log("The user is getting checked!!");
  const token = "xyz";
  const isadminauth = token === "xyz";
  if (!isadminauth) {
    res.status(404).send("unauthorized request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("The user is authnticated");
  const token = "abc";
  const isuserAuth = token === "abc";
  if (!isuserAuth) {
    res.status(404).send("the user is not valid");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
