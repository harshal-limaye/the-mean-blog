import { ILoginPayload, IRegisterPayload, User } from "../models/user";
import bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export class UserService {
  static async register(data: IRegisterPayload): Promise<any> {
    const { email, password, confirmPassword, firstName, lastName } = data;
    const existingUser = await User.findOne({ email });

    if (password !== confirmPassword)
      throw Error("Password doesn't match confirmation");

    if (existingUser)
      throw Error("The email address is already in use. Pleas try logging-in.");

    const encryptedPassword = await bcrypt.hash(password, 10);

    return User.create({
      firstName,
      lastName,
      email,
      password: encryptedPassword,
    });
  }

  static async login(data: ILoginPayload): Promise<any> {
    const { email, password } = data;
    if (!email) throw Error("Please provide an email");

    if (!password) throw Error("Please provide a password");

    const user = await User.findOne({ email });

    if (!user) throw Error(`User doesn't exists`);

    let token;
    if (user && (await bcrypt.compare(password, user.password))) {
      token = jwt.sign({ userId: user._id }, process.env.SECRET || "", {
        expiresIn: "8h",
      });
    } else {
      throw Error("Authentication failed!");
    }

    return token;
  }
}