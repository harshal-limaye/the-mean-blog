import { Option, IOption } from "../models/option";
import err from "../helpers/error.helper";

export class OptionService {
  static async get(key: string): Promise<IOption> {
    try {
      const option = await Option.findOne({ key });
      if (option) {
        return option;
      } else {
        console.log(option);
        throw Error("Option not found");
      }
    } catch (error: any) {
      throw Error(error);
    }
  }

  static async set(key: string, value: any): Promise<IOption> {
    try {
      if (!value) {
        throw Error("Please provide a value");
      }
      let option = await Option.findOne({ key });

      if (option) {
        option.update({ key, value });
        option.save();
      } else {
        option = await Option.create({ key, value });
      }

      return option;
    } catch (error: any) {
      throw Error(error);
    }
  }
}
