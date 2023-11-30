const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");

const register = async ({ body }) => {
  try {
    const { firstName, lastName, email, password, phone, dateOfBirth, gender } =
      body;

    const user = await User.findOne({ email });

    if (user) {
      return { status: 409, message: "User already exists with credentials." };
    }

    const encryptedPassword = await bcrypt.hash(password, 12);

    const newUser = {
      firstName,
      lastName,
      email,
      password: encryptedPassword,
      phone,
      dateOfBirth,
      gender,
    };

    const nUser = await User.create(newUser);
    return {
      status: 200,
      data: {
        id: nUser._id,
        email: nUser.email,
        firstName: nUser.firstName,
        token: jwt.sign(
          {
            id: nUser._id,
          },
          process.env.SECRET_KEY,
          { expiresIn: "30d" }
        ),
      },
    };
  } catch (err) {
    console.log("register", err);
    throw err;
  }
};

const login = async ({ body }) => {
  try {
    const { email, password } = body;

    const user = await User.findOne({ email });

    let match = null;

    if (user?.password) {
      match = await bcrypt.compare(password, user.password);
    }

    if (match) {
      return {
        status: 200,
        data: {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          token: jwt.sign(
            {
              id: user._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "30d" }
          ),
        },
      };
    } else {
      return { status: 401, message: "Wrong Credentials" };
    }
  } catch (err) {
    console.log("login", err);
    throw err;
  }
};

const profile = async ({ query, userId }) => {
  try {
    const user = await User.findById(userId).select(["-password"]);

    if (!user) {
      return { status: 404, message: "User not found." };
    }

    return { status: 200, data: user };
  } catch (err) {
    console.log("profile", err);
    throw err;
  }
};

module.exports = { register, login, profile };
