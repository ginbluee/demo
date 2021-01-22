import User from '../models/user.model';
import moment from 'moment';

const registerService = async (username, password) => {
  let checkData = await User.findOne({
    where: {
      username: username,
    },
  });

  if (!username) {
    return {
      success: false,
      message: 'Username is required!'
    };
  } else if (!password) {
    return {
      success: false,
      message: 'Password is required!'
    };
  }

  if (checkData) {
    return {
      success: false,
      message:"Already Exist",
    };
  } else {
    const user = User.create({
      username: username,
      password: password
    });
  
    if (user) {
      res.json({
        success: true,
        message:"User Created Successfully", 
        data: {
          id: user.id,
          username: user.username,
          password: user.password,
          createdAt: moment().unix(),
        },
      });
    }

    return {
      success: false,
      message: "Something went wrong!",
    };
  }
}

const loginService = (username, password) => {
  const user = User.findOne({
    where: {
      username: username,
      password: password
    }
  })
  return user;
}

export {registerService, loginService};