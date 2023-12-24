import User from "../models/userModel.js";
import passwordBcrypt from "../utils/passwordBcrypt.js";
import jwt from "jsonwebtoken";

//based on https://www.youtube.com/watch?v=VWEJ-GhjU4U
class UserController {
  static async signup(req, res) {
    const { fullName , email, password, confirm_password } = req.body;
    const userName = fullName
    
    try {
      const userAlreadyExists = await User.findOne({ where: { email } });
      if (userAlreadyExists)
        return res.status(400).json({ message: "Email already exists" });

      if (password !== confirm_password) return res.status(400).json({message: "Password does not match!"})
      // Encrypt password
      const encryptedPassword = await passwordBcrypt.encryptPassword(password);

      //Prepare user data
      const userData = {
        userName,
        email,
        password: encryptedPassword,
      };

      const user = await User.create(userData);
      if (user) res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;


    const userWithEmail = await User.findOne({ where: { email } });
    if (!userWithEmail)
      return res
        .status(401)
        .json({ message: "Email or password does not match" });

    //check if password matches
    const passwordMatches = await passwordBcrypt.passwordMatches(
      password,
      userWithEmail.password
    );
    if (!passwordMatches)
      return res
        .status(401)
        .json({ message: "Email or password does not match" });

    const jwtToken = jwt.sign(
      { id: userWithEmail.id, email: userWithEmail.email },
      process.env.secretKey
    );

    res.status(200).json({ message: "User logged", user: { name: userWithEmail.userName, email: userWithEmail.email } ,token: jwtToken });
  }

  static async example(req, res) {
    try {
      res.status(200).json({ message: "Example" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default UserController;
