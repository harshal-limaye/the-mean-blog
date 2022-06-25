import { Category, ICategory } from "../models/category";
import err from "../helpers/error.helper";

export class CategoryService {
  static async getAll(): Promise<ICategory[]> {
    try {
      return await Category.find({});
    } catch (error: any) {
      throw Error(error);
    }
  }

  static async getById(id: string): Promise<ICategory> {
    try {
      const category = await Category.findById(id);
      if (category) {
        return category;
      }

      throw Error("Category not found!");
    } catch (error: any) {
      throw Error(error);
    }
  }

  static async create({ name, description }: ICategory): Promise<ICategory> {
    try {
      const category = await Category.create({ name, description });

      if (category) {
        return category;
      }

      throw Error(err.message);
    } catch (error: any) {
      throw Error(error);
    }
  }

  static async update(data: ICategory, id: string): Promise<ICategory> {
    if (!id) throw Error("Please provide a category id");

    try {
      const category = await Category.findById(id);

      if (category !== null) {
        const updated = await Category.findByIdAndUpdate(id, data, {
          new: true,
        });
        if (updated) return updated;
      }

      throw Error("Category not found!");
    } catch (error: any) {
      throw Error(error);
    }
  }

  static async delete(id: string): Promise<any> {
    try {
      return await Category.deleteOne({ _id: id });
    } catch (error: any) {
      throw Error(error);
    }
  }
}
