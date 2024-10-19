import { generateToken } from "../lib/utils/generateToken.js";
import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'
class authController {
    static signup = async (req, res) => {
        try {
            const { fullName, username, email, password } = req.body
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({
                    error: "Invalid email format",
                })
            }
            const existingUser = await User.findOne({ username })
            if (existingUser) {
                return res.status(400).json({
                    error: "Username is already taken",
                })
            }

            const existingEmail = await User.findOne({ email })
            if (existingEmail) {
                return res.status(400).json({
                    error: "Email is already taken",
               
                })

            }
            if (password.length < 6) {
                return res.status(400).json({
                    error: "Password must be atleast 6 character long",
                  
                })
            }
            const hashedPassword = await bcrypt.hash(password, 16)
            const newUser = new User({
                fullName,
                username,
                email,
                password: hashedPassword,
            })
            if (newUser) {
                await newUser.save()
                return res.status(200).json({
                    user: newUser,
                })

            } else {
                return res.status(400).json({
                    error: "Invalid user data",
                })
            }


        } catch (err) {
            console.log("Error in signup controller", err.message)
            return res.status(500).json({
                error: "Internal Server Error.."
            })
        }
    }

    static login = async (req, res) => {
        try {
            const { username, password } = req.body
            const authUser = await User.findOne({ username })
            const isPasswordCorrect = await bcrypt.compare(password, authUser?.password || "")
            if (!authUser || !isPasswordCorrect) {
                return res.status(400).json({
                    error: "Invalid username or password"
                })
            }
            var token = generateToken(authUser._id,authUser)
            res.cookie("jwt", token, {
                    httpOnly: true,
                })
                .status(200)
                .json({token});


        } catch (err) {
            console.log("Error in login  controller", err.message)
            return res.status(500).json({
                error: "Internal Server Error.."
            })

        }

    }
    static logout = async (req, res) => {
        try {
            res.clearCookie('jwt')
            return res.status(200).send({ message: "successfully logged out" })
        } catch (err) {
            console.log("Error in logout  controller", err.message)
            return res.status(500).json({
                error: "Internal Server Error.."
            })
        }
    }
    static getMe = async (req, res) => {
        try {
            const authUser = await User.findById(req.user._id)
            return res.status(200).json(
                authUser)

        } catch (err) {
            console.log("Error in getMe  controller", err.message)
            return res.status(500).json({
                error: "Internal Server Error.."
            })
        }
    }
}
export default authController