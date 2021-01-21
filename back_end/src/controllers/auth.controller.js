const authService = require("../services/auth.service");

exports.register = async (req, res) => {
  try {
    console.log('req: ', req);

    const user = req.body;
    const data = await authService.register(user);

    if (!data) {
      throw "error";
    }
    return res.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
    });
  }
};
