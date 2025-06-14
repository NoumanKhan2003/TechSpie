import axios from "axios";
import jwt from "jsonwebtoken";
import userModel from "../Models/userModel.js";
import oauth2client from "../Utils/googleConfig.js";

const googleLoginController = async (req, res) => {
  try {
    const { code } = req.query;
    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }
    const googleResponse = await oauth2client.getToken(code);
    oauth2client.setCredentials(googleResponse.tokens);
    const userResponse = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleResponse.tokens.access_token}`
    );
    const { name, email, picture } = userResponse.data;
    let user = await userModel.findOne({ email });
    if (!user) {
      user = await userModel.create({
        name,
        email,
        profileImage: picture,
      });
    }
    const { _id } = user;
    const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });
    res.status(200).json({
      message: "success",
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      details: error.response?.data || error,
    });
  }
};

export { googleLoginController };
