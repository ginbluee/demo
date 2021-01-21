const authRoutes = () => {
  const router = require("express").Router();
  const auth = require("../controllers/auth.controller.js");

  // Create a new user
  router.post("/register", auth.register);

  // Retrieve all Tutorials
  // router.get("/", auth.findAll);
};

module.exports = authRoutes;
