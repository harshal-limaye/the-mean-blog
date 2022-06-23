import { Category, CategoryDto } from "../models/category";

export class CategoryService {
  static async getAll(): Promise<any[]> {
    try {
      return await Category.find({});
    } catch (error: any) {
      throw Error(error);
    }
  }

  static async getById(id: string): Promise<any> {
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

  static async create({ name, description }: CategoryDto): Promise<any> {
    try {
      const category = await Category.create({ name, description });

      if (category) {
        return category;
      }

      throw Error("Something went wrong!");
    } catch (error: any) {
      throw Error(error);
    }
  }

  static async update(data: CategoryDto, id: string): Promise<any> {
    if (!id) throw Error("Please provide a category id");

    try {
      const category = await Category.findById(id);

      if (category) {
        return await Category.findByIdAndUpdate(id, data, { new: true });
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
