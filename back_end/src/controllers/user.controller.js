import User from '../models/user.model';
import {loginService, registerService} from "../services/user.service";

const registerController = async (req, res) => {
  const {password, username} = req.body;
  const user = await registerService(username, password);

  if (user) {
    return res.json(user);
  }
};

const loginController = async (req, res) => {
  const {password, username} = req.body;
  const user = await loginService(username, password);

  if (user) {
    return res.json({
      success: true,
      user,
    })
  }
  return res.json({
    success: false,
    message: 'error',
  });
};

export {loginController, registerController};